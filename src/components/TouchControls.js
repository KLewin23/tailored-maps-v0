import React, { useState } from 'react'
import { View, Alert } from 'react-native'
import PropTypes from 'prop-types'

function TouchControls(props) {
	const [pressed, setPressed] = useState(false)
	const [touchStart, setTouchStart] = useState({})
	const [speed, setSpeed] = useState(0.0)

	function onMove({ nativeEvent }) {
		if (!pressed) {
			setPressed(true)
			// console.log([nativeEvent.locationX, nativeEvent.locationY])
			// console.log('pressed')
			setTouchStart({
				posX: nativeEvent.locationX,
				posY: nativeEvent.locationY,
				timestamp: nativeEvent.timestamp
			})
			props.startPos([nativeEvent.locationX, nativeEvent.locationY])
			console.log([nativeEvent.locationX, nativeEvent.locationY])
		}
	}

	function onRelease({ nativeEvent }) {
		if (pressed) {
			setPressed(false)
		}
		// velocity calc
		// get width of invisible rectangle
		const width =
			(nativeEvent.locationX > touchStart.posX
				? nativeEvent.locationX
				: touchStart.posX) -
			(nativeEvent.locationX < touchStart.posX
				? nativeEvent.locationX
				: touchStart.posX)
		// get length of invisible rectangle
		const length =
			(nativeEvent.locationY > touchStart.posY
				? nativeEvent.locationY
				: touchStart.posY) -
			(nativeEvent.locationY < touchStart.posY
				? nativeEvent.locationY
				: touchStart.posY)
		// get diagonal length of the invisible rectangle
		const lineLength = Math.sqrt(width * width + (length + length))
		const timeTaken = (nativeEvent.timestamp - touchStart.timestamp) / 1000
		const initialSpeed = lineLength / timeTaken
		setSpeed(initialSpeed)
		// console.log([nativeEvent.locationX, nativeEvent.locationY])
		// console.log('release')
		props.speedChange(initialSpeed)
	}

	return (
		<View
			style={{ flex: 1 }}
			onStartShouldSetResponder={() => {
				return true
			}}
			onResponderMove={e => onMove(e)}
			onResponderRelease={e => onRelease(e)}
		>
			{props.children}
		</View>
	)
}

TouchControls.propTypes = {
	children: PropTypes.array
}

export default TouchControls
