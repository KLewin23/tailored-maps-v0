import * as Font from 'expo-font'
import theme from './custom-theme.json'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { AppNavigator } from './screens/navigation.component'
import { AntIconsPack } from './assets/icons/AntAdapter'
import { AppLoading, registerRootComponent } from 'expo'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'

export default function Main(props) {
	const [isLoadingComplete, setLoadingComplete] = useState(false)

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return (
			<AppLoading
				startAsync={loadResourcesAsync}
				onError={handleLoadingError}
				onFinish={() => handleFinishLoading(setLoadingComplete)}
			/>
		)
	} else {
		return (
			<View style={styles.container}>
				{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
				<IconRegistry icons={AntIconsPack} />
				<ApplicationProvider
					mapping={mapping}
					theme={{ ...lightTheme, ...theme }}
				>
					<AppNavigator />
				</ApplicationProvider>
			</View>
		)
	}
}

async function loadResourcesAsync() {
	await Promise.all([
		Font.loadAsync({
			...Ionicons.font,
			'plex-reg': require('./assets/fonts/IBMPlexSansArabic-Regular.ttf'),
			'plex-bold': require('./assets/fonts/IBMPlexSansArabic-Bold.ttf')
		})
	])
}

function handleLoadingError(error) {
	console.warn(error)
}

function handleFinishLoading(setLoadingComplete) {
	setLoadingComplete(true)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
})

registerRootComponent(Main)
