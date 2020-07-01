import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Button, Portal, Dialog } from 'react-native-paper'

const SelectStoryDialog = ({ visible, hideDialog }) => {

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Select a Story</Dialog.Title>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({})
 
export default SelectStoryDialog;