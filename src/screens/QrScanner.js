import React, { useState, useEffect } from 'react'
import { Text, View, Alert, StyleSheet, Dimensions } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Layout, Spinner } from '@ui-kitten/components'

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
			Alert.alert('', `qr found ${data}`)
			// Load Map
		} else {
			Alert.alert('', `Incorrect type ${type}`)
		}
	}

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>
	}

	const Waiting = () => {
		return scanned ? (
			<Text
				style={{
					color: 'white',
					fontFamily: 'plex-bold',
					fontSize: 15,
					marginRight: 20
				}}
			>
				Scanned
			</Text>
		) : (
			<View
				style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
			>
				<Text
					style={{
						color: 'white',
						fontFamily: 'plex-bold',
						fontSize: 15,
						marginRight: 20
					}}
				>
					Scanning
				</Text>
				<Spinner status="basic" />
			</View>
		)
	}

	return (
		<Layout style={{ flex: 1 }}>
			<Layout
				style={{
					flex: 1,
					backgroundColor: '#000',
					padding: 0
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
					>
						<Layout
							style={{
								height: 6,
								width: 40,
								backgroundColor: 'white',
								opacity: 1,
								marginTop:
									(Dimensions.get('window').height -
										(Dimensions.get('window').width / 100) *
											80) /
										2 -
									6,
								marginLeft:
									(Dimensions.get('window').width / 100) *
										10 -
									6
							}}
						/>
						<Layout
							style={{
								height: 6,
								width: 40,
								backgroundColor: 'white',
								opacity: 1,
								marginLeft:
									Dimensions.get('window').width / 2 +
									(Dimensions.get('window').width / 100) *
										40 -
									34,
								marginTop: -6
							}}
						/>
					</Layout>
					<Layout style={{ backgroundColor: 'transparent' }}>
						<Layout
							style={{
								height:
									(Dimensions.get('window').width / 100) * 80,
								width: '10%',
								backgroundColor: 'black',
								opacity: 0.5
							}}
						>
							<Layout
								style={{
									height: 34,
									width: 6,
									backgroundColor: 'white',
									opacity: 1,
									marginLeft:
										(Dimensions.get('window').width / 100) *
											10 -
										6
								}}
							/>
							<Layout
								style={{
									height: 34,
									width: 6,
									backgroundColor: 'white',
									opacity: 1,
									marginLeft:
										(Dimensions.get('window').width / 100) *
											10 -
										6,
									marginTop:
										(Dimensions.get('window').width / 100) *
											40 *
											2 -
										68
								}}
							/>
						</Layout>
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
								marginTop:
									0 -
									(Dimensions.get('window').width / 100) * 80
							}}
						>
							<Layout
								style={{
									height: 34,
									width: 6,
									backgroundColor: 'white',
									opacity: 1
								}}
							/>
							<Layout
								style={{
									height: 34,
									width: 6,
									backgroundColor: 'white',
									opacity: 1,
									marginTop:
										(Dimensions.get('window').width / 100) *
											40 *
											2 -
										68
								}}
							/>
						</Layout>
					</Layout>
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
					>
						<Layout
							style={{
								height: 6,
								width: 40,
								backgroundColor: 'white',
								opacity: 1,
								marginLeft:
									(Dimensions.get('window').width / 100) *
										10 -
									6
							}}
						/>
						<Layout
							style={{
								height: 6,
								width: 40,
								backgroundColor: 'white',
								opacity: 1,
								marginLeft:
									Dimensions.get('window').width / 2 +
									(Dimensions.get('window').width / 100) *
										40 -
									34,
								marginTop: -6
							}}
						/>
					</Layout>
				</Layout>
				<Layout style={styles.ui}>
					<Layout style={styles.top} />
					<Layout style={styles.middle} />
					<Layout style={styles.bottom}>
						<Waiting style={styles.loader} />
					</Layout>
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
	},
	ui: {
		zIndex: 3,
		backgroundColor: 'transparent',
		marginTop: 0 - Dimensions.get('window').height,
		height: '100%',
		width: '100%',
		alignItems: 'center'
	},
	top: {
		height:
			(Dimensions.get('window').height -
				(Dimensions.get('window').width / 100) * 80) /
			2,
		width: '100%',
		backgroundColor: 'transparent'
	},
	middle: {
		height: (Dimensions.get('window').width / 100) * 80,
		width: '100%',
		backgroundColor: 'transparent'
	},
	bottom: {
		height:
			(Dimensions.get('window').height -
				(Dimensions.get('window').width / 100) * 80) /
			2,
		width: '100%',
		backgroundColor: 'transparent',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
