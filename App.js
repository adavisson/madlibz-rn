import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/views/HomeScreen'
import MenuScreen from './src/views/MenuScreen'

const navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      },
    },
    Menu: MenuScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'MadLibz',
      headerStyle: {
        backgroundColor: '#f66783',
      }
    }
  },
)

export default createAppContainer(navigator)