import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { Button, Portal, Dialog } from 'react-native-paper'

const SolutionDialog = ({ visible, hideDialog, template, values }) => {
  return (
    <Portal>
      <Dialog
        style={styles.dialogView}
        visible={visible}
        onDismiss={hideDialog}
      >
        <Dialog.Title style={styles.text}>{template.title}</Dialog.Title>
        <Dialog.Content>
          <Text style={styles.storyText}>
            {template.value.length > 0 && template.value.map((string, index) => {
              if (string !== 0 && values[index]){
              return string + values[index]
              } else if (!string && values[index]){
                return values[index]
              } else if (string !== 0) {
                return string
              }
            })}
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog} labelStyle={styles.text}>
            Cancel
          </Button>
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
    color: '#522d80',
  },
  storyText: {
    fontSize: 16,
    color: '#522d80',
    lineHeight: 40,
  },
})

export default SolutionDialog;