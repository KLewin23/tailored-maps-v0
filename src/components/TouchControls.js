import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

function TouchControls(props) {
	return (
		<View
			// onClick={() => {
			// 	// some stuff
			// 	const velocity = 1;
			// 	return props.handleVelocityChange(velocity);
			// }}
			onStartShouldSetResponder={() => {
				console.log('xx')
			}}
		>
			{props.children}
		</View>
	)
}

TouchControls.propTypes = {
	children: PropTypes.arrayOf(PropTypes.object)
}

export default TouchControls
