import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const StorySelectScreen = () => {
  return (
    <View style={styles.storySelectView}>
      <Text>Select a Story</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  storySelectView: {
    flex: 1,
    backgroundColor: '#522d80',
    alignItems: 'center',
  },
})
 
export default StorySelectScreen;