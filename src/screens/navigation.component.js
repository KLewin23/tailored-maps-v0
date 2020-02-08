import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './HomeScreen'
import CreateScreen from './LinksScreen'

const HomeNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		Create: CreateScreen
	},
	{
		headerMode: 'none'
	}
)

export const AppNavigator = createAppContainer(HomeNavigator)
