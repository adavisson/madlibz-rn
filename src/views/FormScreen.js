import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Item } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const FormScreen = ({ navigation }) => {
  const [template, setTemplate] = useState({ blanks: [] })
  const [values, setValues] = useState({})

  useEffect(() => {
    const random = navigation.getParam('random')

    const fetchData = async () => {
      const result = await fetch('https://madlibz.herokuapp.com/api/random')
      const data = await result.json()
      setTemplate(data)
    }

    if (random) {
      fetchData()
    } else {
      console.log('not random')
    }
  }, [])

  return (
    <View style={styles.formView}>
      <Text style={styles.header}>{template.title}</Text>
      <FlatList 
        data={template.blanks}
        renderItem={({ item }) => {
          return (
            <TextInput mode='flat' style={styles.input} underlineColor='#f66783' label={item} />
          )
        }}
        keyExtractor={(blank, index) => index}/>
      <Button
        style={styles.button}
        mode='contained'
        color='#f66783'
        labelStyle={{ color: '#522d80' }}
        onPress={() => navigation.navigate('Solution', { template: template, values: values})}
      >
        Submit
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  formView: {
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
  input: {
    alignSelf: 'center',
    width: '75%',
    backgroundColor: 'transparent',
    margin: 5,
  },
  button: {
    width: '50%',
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 15,
  }
})

export default FormScreen
