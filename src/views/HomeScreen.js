import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { vh } from 'react-native-expo-viewport-units'
import { Button } from 'react-native-paper'

const HomeScreen = () => {
  return (
    <View style={styles.homeView}>
      <LinearGradient
        colors={['#f66783', '#522d80']}
        style={styles.linearGradient}
      >
        <Text style={styles.header}>MadLibz</Text>
        <Button mode='contained' style={styles.button} color='#f66783' >Get Started</Button>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
  },
  linearGradient: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: vh(100),
  },
  header: {
    marginTop: '45%',
    fontSize: 48,
    letterSpacing: 10,
    color: '#522d80',
  },
  button: {
    marginBottom: '40%'
  }
})

export default HomeScreen
