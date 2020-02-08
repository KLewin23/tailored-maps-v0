import React from 'react'
import { Button, Layout, Icon } from '@ui-kitten/components'
import { Image, StyleSheet, Text } from 'react-native'

export const QrIcon = style => <Icon name='qrcode' {...style} />
export const EditIcon = style => <Icon name='edit' {...style} />
export const LoginIcon = style => <Icon name='login' {...style} />

// eslint-disable-next-line react/prop-types
export default function HomeScreen({ navigation }) {
	const navigateDetails = () => {
		// eslint-disable-next-line react/prop-types
		navigation.navigate('Create')
	}

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
					icon={QrIcon}
				>
					Scan QR
				</Button>
				<Button
					status='basic'
					appearence='filled'
					style={styles.button}
					icon={EditIcon}
					onPress={navigateDetails}
				>
					Create Map
				</Button>
				<Button
					status='basic'
					appearence='filled'
					style={styles.button}
					icon={LoginIcon}
				>
					Login
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
		width: '100%',
		justifyContent: 'center',
		marginTop: 95
	},
	button: {
		fontFamily: 'plex-reg',
		width: 268,
		height: 54,
		fontSize: 20,
		marginBottom: 35
	},
	icon: {
		height: 30,
		width: 30
	}
})
