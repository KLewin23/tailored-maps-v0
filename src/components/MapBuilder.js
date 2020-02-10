import React from 'react'
import * as THREE from 'three'
import { GLView } from 'expo-gl'
import ExpoTHREE from 'expo-three'

export default function MapBuilder() {
	const onContextCreate = async gl => {
		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(
			75,
			gl.drawingBufferWidth / gl.drawingBufferHeight,
			0.1,
			1000
		)
		const renderer = new ExpoTHREE.Renderer({ gl })
		renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)

		const geometry = new THREE.BoxGeometry(1, 1, 1)
		const material = new THREE.MeshNormalMaterial({ wireframe: true })
		const cube = new THREE.Mesh(geometry, material)
		scene.add(cube)

		camera.position.y = 0
		camera.position.x = 0
		camera.position.z = 5

		const animate = () => {
			window.requestAnimationFrame(animate)
			cube.rotation.x += 0.02
			cube.rotation.y += 0.02
			renderer.render(scene, camera)
			gl.endFrameEXP()
		}
		animate()
	}

	return (
		<GLView
			style={{ flex: 1, backgroundColor: 'black' }}
			onContextCreate={onContextCreate}
		/>
	)
}
