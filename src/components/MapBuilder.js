import React from 'react'
import { GraphicsView } from 'expo-graphics'
import ExpoTHREE, { THREE } from 'expo-three'
import TouchControls from './TouchControls'

export default class MapBuilder extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			speed: 1,
			cube: null,
			touch: {},
			camera: null
		}
		this.onContextCreate = this.onContextCreate.bind(this)
		this.onRender = this.onRender.bind(this)
		this.reposition = this.reposition.bind(this)
	}

	onContextCreate({ gl, width, height, scale: pixelRatio }) {
		this.renderer = new ExpoTHREE.Renderer({
			gl, pixelRatio, width, height
		})
		this.scene = new THREE.Scene()
		this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
		this.camera.position.z = 5
		this.setState({ camera: this.camera })
		const geometry = new THREE.BoxGeometry(1, 1, 1)
		const material = new THREE.MeshPhongMaterial({ wireframe: true })

		this.cube = new THREE.Mesh(geometry, material)

		this.setState({ cube: this.cube })

		this.scene.add(this.cube)
	}

	onRender(delta) {
		const cube = this.state.cube
		cube.rotation.x += this.state.speed * delta
		cube.rotation.y += 2 * delta
		this.renderer.render(this.scene, this.camera)
	}

	reposition([x, y]) {
		this.raycaster = new THREE.Raycaster()
		this.raycaster.setFromCamera(
			{ x: x, y: y },
			this.state.camera
		)

		const dist = this.state.cube.position
			.clone()
			.sub(this.state.camera.position)
			.length()

		this.raycaster.ray.at(dist, this.state.cube.position)
	}

	render() {
		return (
			<TouchControls
				//increaseSpeed={() => this.setState({ speed: this.state.speed + 0.5 })}
				velocityUpdate={(e) => this.setState({
					touch: {
						...this.state.touch,
						velocity: e
					}
				})}
				touchPosition={e => this.reposition(e)}
			>
				<GraphicsView onContextCreate={this.onContextCreate} onRender={this.onRender}/>
			</TouchControls>
		)
	}
}
