import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const SolutionScreen = ({ navigation }) => {
  const template = navigation.getParam('template')
  const values = navigation.getParam('values')

  return (
    <View style={styles.solutionView}>
      <Text style={styles.header}>{template.title}</Text>
      <FlatList
        data={template.blanks}
        renderItem={({ item }) => {
          return <Text>{item}</Text>
        }}
        keyExtractor={(blank, index) => index}
      />
      <FlatList
        data={values}
        renderItem={({ item }) => {
          return <Text>{item}</Text>
        }}
        keyExtractor={(value, index) => index}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  solutionView: {
    flex: 1,
    backgroundColor: '#522d80',
    alignItems: 'stretch',
  },
  header: {
    width: '75%',
    alignSelf: 'center',
    marginTop: '10%',
    fontSize: 36,
    color: '#f66783',
  },
})

export default SolutionScreen
