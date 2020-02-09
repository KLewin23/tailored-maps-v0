import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './HomeScreen'
import CreateScreen from './CreateMap'
import QrScanner from './QrScanner'

const HomeNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		Create: CreateScreen,
		QrScan: QrScanner
	},
	{
		headerMode: 'none'
	}
)

export const AppNavigator = createAppContainer(HomeNavigator)
