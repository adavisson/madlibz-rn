import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const SolutionScreen = ({ navigation }) => {
  const template = navigation.getParam('template')
  const values = navigation.getParam('values')

  return (
    <View style={styles.solutionView}>
      <Text style={styles.header}>{template.title}</Text>
      {/* <FlatList
        data={template.value}
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
      /> */}
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
  storyText: {
    fontSize: 18,
    color: '#f66783',
    marginTop: 30,
  }
})

export default SolutionScreen
