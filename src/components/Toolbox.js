import React  from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { StyleSheet, Alert, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import IconFound from 'react-native-vector-icons/Foundation'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import IconIonic from 'react-native-vector-icons/Ionicons'

export default function Toolbox() {
	return (
		<Layout>
			<Layout style={styles.ToolBox}>
				<Layout style={styles.buttonRow}>
					<TouchableOpacity onPress={() => Alert.alert('', 'test')}>
						<Layout style={styles.button}>
							<Layout style={styles.buttonIcon}>
								<Icon name="edit" size={30} />
								<Text style={{fontSize: 10}}>Edit</Text>
							</Layout>
						</Layout>
					</TouchableOpacity>
					<Layout style={styles.button}>
						<Layout style={styles.buttonIcon}>
							<IconFound name={'paint-bucket'} size={30} />
							<Text style={{fontSize: 10}}>Fill Tool</Text>
						</Layout>
					</Layout>
					<Layout style={styles.button}>
						<Layout style={styles.buttonIcon}>
							<IconMaterial name="timeline" size={30} />
							<Text style={{fontSize: 10}}>Manual Pathing</Text>
						</Layout>
					</Layout>
				</Layout>
				<Layout style={styles.buttonRow}>
					<Layout style={styles.button}>
						<Layout style={styles.buttonIcon}>
							<IconMaterial name="add-location" size={30} />
							<Text style={{fontSize: 10}}>Location Plotter</Text>
						</Layout>
					</Layout>
					<Layout style={styles.button} >
						<Layout style={styles.buttonIcon}>
							<IconIonic name="ios-magnet" size={30} />
							<Text style={{fontSize: 10}}>Snapping Mode</Text>
						</Layout>
					</Layout>
					<Layout style={styles.button}>
						<Layout style={styles.buttonIcon}>
							<IconMaterial name="room" size={30} />
							<Text style={{fontSize: 10}}>Plot Mode</Text>
						</Layout>
					</Layout>
				</Layout>
			</Layout>
			<Layout style={styles.arrowDown} />
		</Layout>
	)
}

const styles = StyleSheet.create({
	ToolBox: {
		position: 'absolute',
		bottom: 85,
		zIndex: 3,
		width: '100%',
		height: 250
	},
	buttonRow: {
		height: '50%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'white',
		alignItems: 'center',
		paddingLeft: '7%',
		paddingRight: '7%'
	},
	button: {
		backgroundColor: '#f5f5f5',
		borderRadius: 15,
		height: 85,
		width: 85,
		justifyContent: 'center'
	},
	arrowDown: {
		position: 'absolute',
		backgroundColor: 'transparent',
		width: 0,
		height: 0,
		borderLeftColor: 'transparent',
		borderLeftWidth: 20,
		borderRightColor: 'transparent',
		borderRightWidth: 20,
		borderTopWidth: 20,
		borderTopColor: 'white',
		bottom: 65,
		right: 55
	},
	buttonIcon: {
		backgroundColor: 'transparent',
		alignItems: 'center'
	}
})
