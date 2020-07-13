import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Keyboard } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import SolutionDialog from '../components/SolutionDialog'

const FormScreen = ({ navigation }) => {
  const [template, setTemplate] = useState({value: [], title: '', blanks: []})
  const [values, setValues] = useState({})
  const [visible, setVisible] = useState(false)

  const showDialog = () => setVisible(true)
  const hideDialog = () => setVisible(false)

  useEffect(() => {
    const random = navigation.getParam('random')

    const fetchData = async () => {
      const result = await fetch('https://madlibz.herokuapp.com/api/random')
      const data = await result.json()
      setTemplate(data)
    }

    if (random) {
      try {
        fetchData()
      } catch(e) {
        console.log(e)
      }
    } else if (!random) {
      setTemplate(navigation.getParam('template'))
    }
  }, [])

  return (
    <View style={styles.formView}>
      <Text style={styles.header}>{template.title}</Text>
      <SolutionDialog visible={visible} hideDialog={hideDialog} template={template} values={Object.values(values)} />
      <FlatList
        data={template.blanks}
        renderItem={({ item, index }) => {
          return (
            <TextInput
              mode='flat'
              style={styles.input}
              underlineColor='#f66783'
              label={item}
              value={values[index]}
              onChangeText={(text) => setValues({ ...values, [index]: text })}
            />
          )
        }}
        keyExtractor={(blank, index) => index}
      />
      <Button
        style={styles.button}
        mode='contained'
        color='#f66783'
        labelStyle={{ color: '#522d80' }}
        onPress={() => {
          Keyboard.dismiss()
          showDialog()
          }
        }
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
  },
})

export default FormScreen
