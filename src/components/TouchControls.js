import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

function TouchControls(props) {
	return (
		<View
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
