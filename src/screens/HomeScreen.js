import React from 'react'
import { Button, Layout } from '@ui-kitten/components'
import { Image, StyleSheet, Text } from 'react-native'

export default function HomeScreen() {
	return (
		<Layout
			style={styles.container}
			contentContainerStyle={styles.contentContainer}
		>
			<Layout style={styles.logoContainer}>
				<Image
					source={require('../assets/images/icon.png')}
					style={styles.logo}
				/>
				<Text style={styles.title}>Tailored Maps</Text>
			</Layout>
			<Layout style={styles.buttonContainer}>
				<Button
					status='basic'
					appearence='filled'
					style={styles.button}
				>
					Scan QR Code
				</Button>
			</Layout>
		</Layout>
	)
}

HomeScreen.navigationOptions = {
	header: null
}

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		fontFamily: 'plex-bold'
	},
	container: {
		flex: 1,
		backgroundColor: '#ffffff'
	},
	contentContainer: {
		paddingTop: 30
	},
	logoContainer: {
		alignItems: 'center',
		marginTop: 135,
		marginBottom: 20
	},
	logo: {
		width: 125,
		height: 125,
		resizeMode: 'contain',
		marginLeft: -10
	},
	buttonContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: '100%'
	},
	button: {
		width: 268,
		height: 54,
	}
})
