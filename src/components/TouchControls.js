import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

class TouchControls extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			pressed: false,
			touchStart: null,
			speed: 0.0
		}
	}

	onRelease({ nativeEvent }) {
		if (this.state.pressed) {
			this.setState({ pressed: false })
		}
		// get width of invisible rectangle
		const width =
			(nativeEvent.locationX > this.state.touchStart.posX
				? nativeEvent.locationX
				: this.state.touchStart.posX) -
			(nativeEvent.locationX < this.state.touchStart.posX
				? nativeEvent.locationX
				: this.state.touchStart.posX)
		// get length of invisible rectangle
		const length =
			(nativeEvent.locationY > this.state.touchStart.posY
				? nativeEvent.locationY
				: this.state.touchStart.posY) -
			(nativeEvent.locationY < this.state.touchStart.posY
				? nativeEvent.locationY
				: this.state.touchStart.posY)
		// get diagonal length of the invisible rectangle
		const lineLength = Math.sqrt(width * width + (length + length))
		const timeTaken = (nativeEvent.timestamp - this.state.touchStart.timestamp) / 1000
		const initialSpeed = lineLength / timeTaken
		this.setState({ speed: initialSpeed })

		this.props.velocityUpdate(initialSpeed)
	}

	onMove({ nativeEvent }) {
		if (!this.state.pressed) {
			this.setState({ pressed: true })
			this.setState({
				touchStart: {
					posX: nativeEvent.locationX,
					posY: nativeEvent.locationY,
					timestamp: nativeEvent.timestamp
				}
			})
			// Alert.alert('xx', [nativeEvent.locationX, nativeEvent.locationY()])
			this.props.touchPosition([nativeEvent.locationX, nativeEvent.locationY])
		}
	}

	render() {
		return (

			<View
				style={[{ flex: 1 }, this.props.style]}
				// onStartShouldSetResponder={() => {
				// 	props.increaseSpeed()
				// }}
				onResponderMove={e => this.onMove(e)}
				onResponderRelease={e => this.onRelease(e)}
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
	// increaseSpeed: PropTypes.func,
	touchPosition: PropTypes.func,
	velocityUpdate: PropTypes.func
}

export default TouchControls
