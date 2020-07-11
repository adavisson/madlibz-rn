import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const SolutionScreen = ({ navigation }) => {
  const template = navigation.getParam('template')
  const values = navigation.getParam('values')

  return (
    <View style={styles.solutionView}>
      <Text style={styles.header}>{template.title}</Text>
      <ScrollView style={styles.storyView}>
        <Text style={styles.storyText}>
          {template.value.map((string, index) => {
            if (string !== 0 && values[index]){
              return string + values[index]
            } else if (!string && values[index]){
              return values[index]
            } else if (string !== 0) {
              return string
            }
          })}
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  solutionView: {
    flex: 1,
    backgroundColor: '#522d80',
    alignItems: 'stretch',
    padding: 25,
  },
  header: {
    width: '85%',
    alignSelf: 'center',
    marginTop: '10%',
    fontSize: 36,
    color: '#f66783',
  },
  storyView: {
    width: '90%',
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: '#f66783',
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  storyText: {
    fontSize: 16,
    color: '#522d80',
    lineHeight: 40,
  }
})

export default SolutionScreen
