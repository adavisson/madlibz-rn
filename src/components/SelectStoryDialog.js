import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Button, Portal, Dialog, List } from 'react-native-paper'

const SelectStoryDialog = ({ navigation, visible, hideDialog }) => {

  return (
    <Portal>
      <Dialog style={styles.dialogView} visible={visible} onDismiss={hideDialog}>
        <Dialog.Title style={styles.text}>Select a Story</Dialog.Title>
        <Dialog.Content>
          <List.Item title='Story 1' titleStyle={styles.text} onPress={() => {
            hideDialog()
            navigation.navigate('Form', { random: false })
          }} />
          <List.Item title='Story 2' titleStyle={styles.text} onPress={() => {
            hideDialog()
            navigation.navigate('Form', { random: false })
          }} />
          <List.Item title='Story 3' titleStyle={styles.text} onPress={() => {
            hideDialog()
            navigation.navigate('Form', { random: false })
          }} />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog} labelStyle={styles.text}>Cancel</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  dialogView: {
    backgroundColor: '#f66783',
  },
  text: {
    color: '#522d80'
  },
})
 
export default SelectStoryDialog;