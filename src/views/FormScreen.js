import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'

const FormScreen = ({ navigation }) => {
  
  useEffect(() => {
    const random = navigation.getParam('random')

    if (random) {
      console.log('random')
    } else {
      console.log('not random')
    }
  },[])

  return (
    <View style={styles.formView}>
      <Text style={styles.header}>Form</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  formView: {
    flex: 1,
    backgroundColor: '#522d80',
    alignItems: 'center',
  },
  header: {
    marginTop: '10%',
    fontSize: 36,
    color: '#f66783',
  },
})
 
export default FormScreen;