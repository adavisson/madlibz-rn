import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider as PaperProvider } from 'react-native-paper'
import HomeScreen from './src/views/HomeScreen'
import MenuScreen from './src/views/MenuScreen'
import FormScreen from './src/views/FormScreen'
import SolutionScreen from './src/views/SolutionScreen'

const navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Menu: {
      screen: MenuScreen,
    },
    Form: {
      screen: FormScreen,
    },
    Solution: {
      screen: SolutionScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'MadLibz',
      headerStyle: {
        backgroundColor: '#f66783',
      },
      headerTintColor: '#522d80',
    },
  }
)

const Navigator = createAppContainer(navigator)

export default function App() {
  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  )
}
