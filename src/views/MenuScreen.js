import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import SelectStoryDialog from '../components/SelectStoryDialog'

const MenuScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false)

  const showDialog = () => setVisible(true)
  const hideDialog = () => setVisible(false)

  return (
    <View style={styles.menuView}>
      <Text style={styles.header}>Let's Get Started!</Text>
      <SelectStoryDialog navigation={navigation} visible={visible} hideDialog={hideDialog} />
      {/* <Button
        mode='contained'
        color='#f66783'
        style={{ ...styles.button, marginTop: '50%' }}
        labelStyle={{ color: '#522d80' }}
        onPress={showDialog}
      >
        Choose Story
      </Button> */}
      <Button
        mode='contained'
        color='#f66783'
        style={styles.button}
        labelStyle={{ color: '#522d80' }}
        onPress={() => navigation.navigate('Form', { random: true })}
      >
        {/* Random Story */}
        Get Story
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
    marginTop: '50%',
  },
})

export default MenuScreen
