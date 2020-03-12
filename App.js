import React from 'react'
import { WebView } from 'react-native-webview'
import Html from './src/dist/index.html'

export default function App() {
	return (
		<View style={{flex: 1}}>
			<WebView
				source={Html}
				style={{flex: 1}}								
			/>
		</View>
	)
}
