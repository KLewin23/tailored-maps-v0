import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export const AntIconsPack = {
	name: 'ant',
	icons: createIconsMap()
}

function createIconsMap() {
	return new Proxy(
		{},
		{
			get(target, name) {
				return IconProvider(name)
			}
		}
	)
}

const IconProvider = name => ({
	toReactElement: props => AntIcon({ name, ...props })
})

function AntIcon({ name, style }) {
	const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style)
	return (
		<Icon name={name} size={height} color={tintColor} style={iconStyle} />
	)
}
