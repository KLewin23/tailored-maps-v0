import React, { useState } from 'react'
import { GLView } from 'expo-gl'
import ExpoTHREE, { THREE } from 'expo-three'
import TouchControls from './TouchControls'
import { Text } from '@ui-kitten/components'
import { Animated } from 'react-native'

export default function MapBuilder() {
	const [speed, setSpeed] = useState(100)
	const [startPosition, setStartPos] = useState([0, 0])

	// const onContextCreate = async gl => {
	// 	// const raycaster = new THREE.Raycaster()
	// 	const scene = new THREE.Scene()
	// 	const camera = new THREE.PerspectiveCamera(
	// 		75,
	// 		gl.drawingBufferWidth / gl.drawingBufferHeight,
	// 		0.1,
	// 		1000
	// 	)
	// 	const renderer = new ExpoTHREE.Renderer({ gl })
	// 	renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)
	//
	// 	// const geometry = new THREE.BoxGeometry(1, 1, 1)
	// 	// const material = new THREE.MeshNormalMaterial({ wireframe: true })
	// 	// const cube = new THREE.Mesh(geometry, material)
	//
	// 	// raycaster.setFromCamera(
	// 	// 	{ x: startPosition[0], y: startPosition[1] },
	// 	// 	camera
	// 	// )
	// 	//
	// 	// const dist = cube.position
	// 	// 	.clone()
	// 	// 	.sub(camera.position)
	// 	// 	.length()
	//
	// 	// raycaster.ray.at(dist, cube.position)
	//
	// 	scene.add(cube)
	//
	// 	const cube = new THREE.Mesh(
	// 		new THREE.BoxBufferGeometry(),
	// 		new THREE.MeshBasicMaterial({
	// 			color: 'red',
	// 			wireframe: true
	// 		})
	// 	)
	//
	// 	cube.rotation.x += speed
	// 	cube.rotation.y += speed
	//
	// 	camera.position.set(0, 0, 10)
	//
	// 	console.log(startPosition)
	//
	// 	const animate = () => {
	// 		console.log(speed)
	// 		window.requestAnimationFrame(animate)
	// 		renderer.render(scene, camera)
	// 		gl.endFrameEXP()
	// 	}
	// 	animate()
	// }

	const _onGLContextCreate = async gl => {
		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(
			75,
			gl.drawingBufferWidth / gl.drawingBufferHeight,
			0.1,
			1000
		)
		const renderer = ExpoTHREE.createRenderer({ gl })
		renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)

		const geometry = new THREE.SphereBufferGeometry(1, 36, 36)
		const material = new THREE.MeshBasicMaterial({
			color: 'red',
			wireframe: true
		})
		const sphere = new THREE.Mesh(geometry, material)
		scene.add(sphere)
		camera.position.set(0, 0, 10)
		const render = () => {
			window.requestAnimationFrame(render)
			sphere.rotation.x += 0.01
			sphere.rotation.y += 0.01
			renderer.render(scene, camera)
			gl.endFrameEXP()
		}
		render()
	}

	return (
		<GLView
			style={{ flex: 1, backgroundColor: 'black' }}
			onContextCreate={_onGLContextCreate}
		/>
	)
}

//<Animated.View style={{ flex: 1 }}>

// <TouchControls speedChange={setSpeed} startPos={setStartPos}>
//{/*	<Text style={{ color: 'pink', position: 'absolute' }}>*/}
// 		{/*		{startPosition}*/}
// 		{/*	</Text>*/}
// 		{/*</TouchControls>*/}
