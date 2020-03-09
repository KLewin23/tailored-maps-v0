import React from 'react'
import { GraphicsView } from 'expo-graphics'
import ExpoTHREE, { THREE } from 'expo-three'
import TouchControls from './TouchControls'
import CANNON from 'cannon'
import { Vector3 } from 'three'

export default class MapBuilder extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			three: {
				speed: 1,
				plane: {},
				touch: {},
				camera: {},
				gl: {},
				renderer: {},
				scene: {}
			},
			cannon: {
				world: {},
				body: {}
			}
		}
		this.onContextCreate = this.onContextCreate.bind(this)
		this.onRender = this.onRender.bind(this)
		this.reposition = this.reposition.bind(this)
		this.onRelease = this.onRelease.bind(this)
	}

	onContextCreate({ gl, width, height, scale: pixelRatio }) {
		const renderer = new ExpoTHREE.Renderer({
			gl, pixelRatio, width, height
		})
		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
		camera.position.z = 5
		const geometry = new THREE.PlaneGeometry(1, 1)
		const material = new THREE.MeshPhongMaterial({ wireframe: true })
		const plane = new THREE.Mesh(geometry, material)
		scene.add(plane)
		// Cannon JS // Physics Engine //
		const world = new CANNON.World()
		world.broadphase = new CANNON.NaiveBroadphase()
		world.solver.iterations = 10
		const shape = new CANNON.Plane()
		const body = new CANNON.Body({ mass: 1 })
		body.addShape(shape)
		world.addBody(body)
		this.setState({
			cannon: {
				body: body,
				world: world
			},
			moving: false,
			three: {
				plane: plane,
				gl: gl,
				camera: camera,
				renderer: renderer,
				scene: scene
			}
		})
	}

	onRender() {
		const plane = this.state.three.plane
		this.state.cannon.world.step(1 / 60)
		plane.position.copy(this.state.cannon.body.position)
		plane.quaternion.copy(this.state.cannon.body.quaternion)
		this.state.three.renderer.render(this.state.three.scene, this.state.three.camera)
	}

	reposition([x, y]) {
		const target = new Vector3()
		this.raycaster = new THREE.Raycaster()
		this.raycaster.setFromCamera(
			{
				x: (x / this.state.three.gl.drawingBufferWidth) * 7 - 1,
				y: -(y / this.state.three.gl.drawingBufferHeight) * 7 + 1
			},
			this.state.three.camera
		)
		const dist = this.state.three.plane.position
			.clone()
			.sub(this.state.three.camera.position)
			.length()
		this.raycaster.ray.at(dist, target)
		this.state.cannon.body.position.set(target.x, target.y, 0)
	}

	onRelease(widthVelocity, heightVelocity) {
		console.log([widthVelocity, heightVelocity])
		if (widthVelocity !== 0 && heightVelocity !== 0) {
			this.state.cannon.body.velocity.set(widthVelocity, heightVelocity, 0)
			velocityBurn(this.state.cannon.body)
		}

		function velocityBurn(object) {
			sleep(500).then(() => {
				object.velocity.set(object.velocity.x - 0.1, object.velocity.y - 0.1, 0)
				if (Math.floor(object.velocity.x * 10) / 10 !== 0 && Math.floor(object.velocity.y * 10) / 10 !== 0) {
					velocityBurn(object)
				} else {
					object.velocity.set(0, 0, 0)
				}
			})
		}

		function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms))
		}
	}

	render() {
		return (
			<TouchControls
				velocityUpdate={(e) => this.setState({
					touch: {
						...this.state.three.touch,
						velocity: e
					}
				})}
				onMove={e => this.reposition(e)}
				onRelease={(w, h) => this.onRelease(w, h)}
			>
				<GraphicsView onContextCreate={this.onContextCreate} onRender={this.onRender}/>
			</TouchControls>
		)
	}
}
