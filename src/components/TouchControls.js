import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

class TouchControls extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			speed: 0.0,
			positions: []
		}
	}

	onRelease({ nativeEvent }) {
		const recentPosition = this.state.positions[this.state.positions.length - 2]
		const width =
			(nativeEvent.locationX > recentPosition.posX
				? nativeEvent.locationX
				: recentPosition.posX) -
			(nativeEvent.locationX < recentPosition.posX
				? nativeEvent.locationX
				: recentPosition.posX)
		// get length of invisible rectangle
		const length =
			(nativeEvent.locationY > recentPosition.posY
				? nativeEvent.locationY
				: recentPosition.posY) -
			(nativeEvent.locationY < recentPosition.posY
				? nativeEvent.locationY
				: recentPosition.posY)
		// get diagonal length of the invisible rectangle

		// const lineLength = Math.sqrt(width * width + (length + length))
		const timeTaken = (nativeEvent.timestamp - recentPosition.timestamp) / 1000
		const widthVelocity = width / timeTaken
		const lengthVelocity = length / timeTaken
		console.log(widthVelocity / 1000)
		console.log(lengthVelocity / 1000)
		// this.setState({ speed: initialSpeed })

		this.props.onRelease(widthVelocity / 46, lengthVelocity / 46)
	}

	onMove({ nativeEvent }) {
		const newArray = this.state.positions.concat({
			posX: nativeEvent.locationX,
			posY: nativeEvent.locationY,
			timestamp: nativeEvent.timestamp
		})
		this.setState({
			positions: newArray
		})
		this.props.onMove([nativeEvent.locationX, nativeEvent.locationY])
	}

	render() {
		return (

			<View
				style={[{ flex: 1 }, this.props.style]}
				onStartShouldSetResponder={() => true}
				onResponderMove={event => this.onMove(event)}
				onResponderRelease={event => this.onRelease(event)}
			>
				{this.props.children}
			</View>
		)
	}
}

TouchControls.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.object),
		PropTypes.object
	]),
	style: PropTypes.object,
	onMove: PropTypes.func,
	onRelease: PropTypes.func
}

export default TouchControls
