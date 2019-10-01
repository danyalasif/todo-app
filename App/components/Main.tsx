import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Note from './Note';

export default function Main() {
  const [notes, changeNotes] = useState([{ date: `${new Date()}`, note: 'Test Note, Good Note, Yolo Note' }]);
  const [noteText, changeNoteText] = useState('');

  const addNote = () => {
    if (noteText) {
      let date = new Date();
      changeNotes([...notes, { date: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`, note: noteText }]);
      changeNoteText('');
    }
  };

  const deleteNote = key => {
    changeNotes(notes.splice(key, 1));
  };

  let renderedNotes = notes.map((val, key) => {
    return <Note key={key} keyval={key} note={val.note} date={val.date} deleteNote={() => deleteNote(key)} />;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo App</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>{renderedNotes}</ScrollView>

      <View style={styles.footer}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => changeNoteText(text)}
          value={noteText}
          placeholder='> add note'
          placeholderTextColor='white'
          underlineColorAndroid='transparent'
        ></TextInput>

        <TouchableOpacity onPress={addNote} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    backgroundColor: 'rgba(50, 100, 100, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd'
  },

  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26
  },

  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },

  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  },

  addButton: {
    position: 'absolute',
    top: 10,
    right: 5,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(100, 200, 100, 0.6)',
    width: 50,
    height: 50,
    borderRadius: 50
  },

  addButtonText: {
    color: '#fff',
    fontSize: 30
  }
});
