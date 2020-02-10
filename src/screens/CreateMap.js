import React, { useState } from 'react'
import {
	StyleSheet,
	Image,
	TouchableOpacity,
	Dimensions,
	Alert
} from 'react-native'
import { Layout } from '@ui-kitten/components'
import Icon from 'react-native-vector-icons/AntDesign'
import MapBuilder from '../components/MapBuilder'
import Toolbox from '../components/Toolbox'

// eslint-disable-next-line react/prop-types
export default function CreateScreen({ navigation }) {
	const [toolBox, setToolbox] = useState(true)

	const BottomBar = () => (toolBox ? <Toolbox /> : <Layout />)

	// setToolbox(true)

	return (
		<Layout style={{ backgroundColor: 'pink' }}>
			<Layout style={styles.MaxBar} />
			<Layout style={styles.topBar}>
				<TouchableOpacity onPress={() => navigation.navigate('Home')}>
					<Image
						source={require('../assets/images/icon.png')}
						style={styles.logo}
					/>
				</TouchableOpacity>
			</Layout>
			<Layout style={styles.mainBody}>
				<MapBuilder style={{ zIndex: 1 }} />
				<BottomBar />
			</Layout>
			<Layout style={styles.bottomBar}>
				<TouchableOpacity>
					<Icon
						name="logout"
						size={30}
						onPress={() => navigation.navigate('Home')}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Icon name="google" size={30} />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						setToolbox(!toolBox)
					}}
				>
					<Icon name="tool" size={30} />
				</TouchableOpacity>
			</Layout>
		</Layout>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
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
		height: Dimensions.get('window').height - 88,
		width: '100%'
	},
	bottomBar: {
		height: 65,
		width: '100%',
		marginTop: -65,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: '15%',
		paddingRight: '15%',
		alignItems: 'center'
	}
})
