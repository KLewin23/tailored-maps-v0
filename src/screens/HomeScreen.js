import React from 'react'
import { Button, Icon, Layout } from '@ui-kitten/components'
import { Image, StyleSheet, Text } from 'react-native'

export const QrIcon = style => <Icon name='qrcode' {...style} />
export const EditIcon = style => <Icon name='edit' {...style} />
export const LoginIcon = style => <Icon name='login' {...style} />

// eslint-disable-next-line react/prop-types
export default function HomeScreen({ navigation }) {
	const navigateCreate = () => {
		// eslint-disable-next-line react/prop-types
		navigation.navigate('Create')
	}
	const navigateQrScanner = () => {
		// eslint-disable-next-line react/prop-types
		navigation.navigate('QrScan')
	}

	return (
		<Layout
			style={styles.container}
			contentContainerStyle={styles.contentContainer}
		>
			<Layout style={styles.wrapper}>
				<Layout style={styles.logoContainer}>
					<Image
						source={require('../assets/images/icon.png')}
						style={styles.logo}
					/>
					<Text style={styles.title}>Tailored Maps</Text>
				</Layout>
				<Layout style={styles.buttonContainer}>
					<Layout style={styles.indButtonContainer}>
						<Button
							status='basic'
							appearence='filled'
							style={styles.button}
							icon={QrIcon}
							onPress={navigateQrScanner}
						>
							Scan QR
						</Button>
					</Layout>
					<Layout style={styles.indButtonContainer}>
						<Button
							status='basic'
							appearence='filled'
							style={styles.button}
							icon={EditIcon}
							onPress={navigateCreate}
						>
							Create Map
						</Button>
					</Layout>
					<Layout style={styles.indButtonContainer}>
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
		backgroundColor: '#ffffff',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	wrapper: {
		alignItems: 'center'
	},
	contentContainer: {
		paddingTop: 30
	},
	logoContainer: {
		alignItems: 'center'
	},
	logo: {
		width: 125,
		height: 125,
		resizeMode: 'contain',
		marginLeft: -10
	},
	buttonContainer: {
		width: '100%',
		justifyContent: 'center',
		marginTop: '10%'
	},
	button: {
		fontFamily: 'plex-reg',
		width: 268,
		height: 54,
		fontSize: 20
	},
	icon: {
		height: 30,
		width: 30
	},
	indButtonContainer: {
		marginBottom: '10%'
	}
})
