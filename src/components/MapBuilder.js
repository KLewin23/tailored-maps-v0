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

		const geometry = new THREE.PlaneGeometry(1800, 1200, 1)
		geometry.translate(0, 0.5, 0)
		const loader = new THREE.TextureLoader()
		const material = new THREE.MeshBasicMaterial({
			map: loader.load('../images/grid.jpg')
		})
		const cube = new THREE.Mesh(geometry, material)
		scene.add(cube)

		camera.position.y = 0
		camera.position.x = 0
		camera.position.z = 2

		const animate = () => {
			window.requestAnimationFrame(animate)
			renderer.render(scene, camera)
			gl.endFrameEXP()
		}
		animate()
	}

	return (
		<GLView
			style={{ flex: 1, backgroundColor: '#f5f5f5' }}
			onContextCreate={onContextCreate}
		/>
	)
}
