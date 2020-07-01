import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

const StorySelectScreen = () => {
  const data = [
    { label: 'apple', value: 'apple' },
    { label: 'orange', value: 'orange' },
    { label: 'banana', value: 'banana' },
  ]

  return (
    <View style={styles.storySelectView}>
      <Text style={styles.header}>Select a Story</Text>
      <View style={styles.dropdownContainer}>
        <RNPickerSelect
          style={styles.dropdown}
          items={data}
          onValueChange={(value) => console.log(value)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  storySelectView: {
    flex: 1,
    backgroundColor: '#522d80',
    alignItems: 'center',
  },
  header: {
    marginTop: '25%',
    fontSize: 36,
    color: '#f66783',
  },
  dropdownContainer: {
    marginTop: '35%',
    width: '65%',
  },
  dropdown: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'orange',
  }
})

export default StorySelectScreen
