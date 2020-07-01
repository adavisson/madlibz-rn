import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.menuView}>
      <Text style={styles.header}>Let's Get Started!</Text>
      <Button
        mode='contained'
        color='#f66783'
        style={{ ...styles.button, marginTop: '50%' }}
        labelStyle={{ color: '#522d80' }}
        onPress={() => navigation.navigate('SelectStory')}
      >
        Choose Story
      </Button>
      <Button
        mode='contained'
        color='#f66783'
        style={styles.button}
        labelStyle={{ color: '#522d80' }}
      >
        Random Story
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  menuView: {
    flex: 1,
    backgroundColor: '#522d80',
    alignItems: 'center',
  },
  header: {
    marginTop: '25%',
    fontSize: 36,
    color: '#f66783',
  },
  button: {
    width: '50%',
    margin: 25,
  },
})

export default MenuScreen
