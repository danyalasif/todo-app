import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';

export default function Note({ keyval, date, note, deleteNote }) {
  return (
    <View key={keyval} style={styles.note}>
      <Text style={styles.noteDate}>{date}</Text>
      <Text style={styles.noteText}>{note}</Text>
      <TouchableOpacity style={styles.delButton} onPress={deleteNote}>
        <Text style={styles.delText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  note: {
    padding: 10,
    backgroundColor: '#efefef',
    borderBottomWidth: 1,
    borderBottomColor: 'red'
  },
  noteDate: {
    alignSelf: 'flex-end',
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 10
  },
  noteText: {
    fontFamily: 'sans-serif',
    marginTop: 10
  },
  delButton: {
    backgroundColor: 'rgba(128, 20, 20, 0.3)',
    borderRadius: 50,
    height: 30,
    width: 30,
    paddingBottom: 5,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  delText: {
    fontSize: 40,
    color: 'rgba(128, 0, 0, 0.8)'
  }
});
