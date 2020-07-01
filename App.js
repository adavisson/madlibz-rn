import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/views/HomeScreen'
import MenuScreen from './src/views/MenuScreen'
import FormScreen from './src/views/FormScreen'

const navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      },
    },
    Menu: {
      screen: MenuScreen,
    },
    Form: {
      screen: FormScreen
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'MadLibz',
      headerStyle: {
        backgroundColor: '#f66783',
      },
      headerTintColor: '#522d80'
    }
  },
)

export default createAppContainer(navigator)