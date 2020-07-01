import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Button, Portal, Dialog, List } from 'react-native-paper'

const SelectStoryDialog = ({ navigation, visible, hideDialog }) => {

  return (
    <Portal>
      <Dialog style={styles.dialogView} visible={visible} onDismiss={hideDialog}>
        <Dialog.Title style={styles.header}>Select a Story</Dialog.Title>
        <Dialog.Content>

        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={() => {
            hideDialog()
            navigation.navigate('Form')
          }}>Select</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  dialogView: {
    backgroundColor: '#f66783',
  },
  header: {
    color: '#522d80'
  }
})
 
export default SelectStoryDialog;