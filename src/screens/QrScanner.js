import React, { useState, useEffect } from 'react'
import { Text, View, Alert, StyleSheet, Dimensions } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Layout } from '@ui-kitten/components'

export default function QrScanner() {
	const [hasPermission, setHasPermission] = useState(null)
	const [scanned, setScanned] = useState(false)

	useEffect(() => {
		;(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync()
			setHasPermission(status === 'granted')
		})()
	}, [])

	const handleBarCodeScanned = ({ type, data }) => {
		if (type === 256) {
			setScanned(true)

			Alert.alert(
				`Bar code with type ${type} and data ${data} has been scanned!`
			)
		}
	}

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>
	}

	return (
		<Layout style={{ flex: 1 }}>
			<Layout
				style={{
					flex: 1,
					backgroundColor: '#000',
					padding: 0,
					zIndex: 1
				}}
			>
				<BarCodeScanner
					onBarCodeScanned={
						scanned ? undefined : handleBarCodeScanned
					}
					style={[
						StyleSheet.absoluteFillObject,
						styles.cameraContainer
					]}
					barCodeTypes={['qr']}
				/>
				<Layout style={styles.overlay}>
					<Layout
						style={{
							height:
								(Dimensions.get('window').height -
									(Dimensions.get('window').width / 100) *
										80) /
								2,
							width: '100%',
							backgroundColor: 'black',
							opacity: 0.5
						}}
					/>
					<Layout style={{ backgroundColor: 'transparent' }}>
						<Layout
							style={{
								height:
									(Dimensions.get('window').width / 100) * 80,
								width: '10%',
								backgroundColor: 'black',
								opacity: 0.5
							}}
						/>
						<Layout
							style={{
								marginLeft:
									Dimensions.get('window').width / 2 +
									(Dimensions.get('window').width / 100) * 40,
								height:
									(Dimensions.get('window').width / 100) *
									40 *
									2,
								width: '10%',
								backgroundColor: 'black',
								opacity: 0.5,
								marginTop: 0 - (Dimensions.get('window').width / 100) * 80
							}}
						/>
					</Layout>
					<Layout
						style={{
							height: (Dimensions.get('window').height -
								(Dimensions.get('window').width / 100) *
								80) /
								2,
							width: '100%',
							backgroundColor: 'black',
							opacity: 0.5
						}}
					/>
				</Layout>
			</Layout>
		</Layout>
	)
}

const styles = StyleSheet.create({
	cameraContainer: {
		marginHorizontal: 0,
		marginTop: -100,
		marginLeft: 0,
		marginStart: 0,
		paddingHorizontal: 0,
		paddingLeft: 0,
		paddingStart: 0,
		height: '130%',
		padding: 0,
		zIndex: 1
	},
	overlay: {
		zIndex: 2,
		width: '100%',
		backgroundColor: 'transparent'
	}
})
