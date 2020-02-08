import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Button, Layout } from '@ui-kitten/components'
import { SafeAreaView } from 'react-navigation'

// eslint-disable-next-line react/prop-types
export default function CreateScreen({ navigation }) {
	const home = () => {
		// eslint-disable-next-line react/prop-types
		navigation.goBack()
	}

	return (
		<SafeAreaView emulateUnlessSupported={false}>
			<Layout>
				<Layout style={styles.MaxBar} />
				<Layout style={styles.topBar}>
					<Image
						source={require('../assets/images/icon.png')}
						style={styles.logo}
					/>
				</Layout>
				<Layout style={styles.mainBody}>
					<Button style={{ marginTop: 500 }} onPress={home}>
						Test
					</Button>
				</Layout>
				<Layout style={styles.bottomBar} />
			</Layout>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff'
	},
	MaxBar: {
		backgroundColor: 'black',
		height: 23,
		width: '100%'
	},
	topBar: {
		height: 65,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo: {
		height: 45,
		width: 45,
		resizeMode: 'contain'
	},
	mainBody: {
		height: '100%',
		width: '100%',
		backgroundColor: '#f5f5f5'
	},
	bottomBar: {
		height: 65,
		width: '100%',
		backgroundColor: 'white',
		marginTop: -65
	}
})
