import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Portal, Dialog, List } from 'react-native-paper'
import { stories } from '../content/stories'

const SelectStoryDialog = ({ navigation, visible, hideDialog }) => {
  return (
    <Portal>
      <Dialog
        style={styles.dialogView}
        visible={visible}
        onDismiss={hideDialog}
      >
        <Dialog.Title style={styles.text}>Select a Story</Dialog.Title>
        <Dialog.Content>
          {stories.map((story) => {
            return (
              <List.Item
                title={story.title}
                titleStyle={styles.text}
                onPress={() => {
                  hideDialog()
                  navigation.navigate('Form', {
                    random: false,
                    template: story,
                  })
                }}
              />
            )
          })}
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog} labelStyle={styles.text}>
            Cancel
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

const styles = StyleSheet.create({
  dialogView: {
    backgroundColor: '#f66783',
  },
  text: {
    color: '#522d80',
  },
})

export default SelectStoryDialog
