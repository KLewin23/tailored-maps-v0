import { AppLoading, registerRootComponent } from 'expo'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { HomeScreen } from './screens'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { mapping, light as lightTheme } from '@eva-design/eva'
import theme from './custom-theme.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

function Main(props) {
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
				<IconRegistry icons={EvaIconsPack} />
				<ApplicationProvider
					mapping={mapping}
					theme={{ ...lightTheme, ...theme }}
				>
					<HomeScreen />
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
