import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={styles.homeView}>
      <Text>MadLibz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    backgroundColor: 'orange',
  }
})
 
export default HomeScreen;