import React from 'react'
import { WebView } from 'react-native-webview'
import html from './build/index.html'

export default function App() {
	return (
		<WebView source={{ html: html }} />
	)
}
