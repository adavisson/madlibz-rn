import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/views/HomeScreen'

const navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'MadLibz'
    }
  },
)

export default createAppContainer(navigator)