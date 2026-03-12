import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [name, setName] = useState('');
  const [storedName, setStoredName] = useState('');

  useEffect(() => {
    loadName();
  }, []);

  const loadName = async () => {
    try {
      const value = await AsyncStorage.getItem('userName');
      if (value !== null) {
        setStoredName(value);
      }
    } catch (error) {
      console.log('Помилка завантаження:', error);
    }
  };

  const saveName = async () => {
    try {
      await AsyncStorage.setItem('userName', name);
      setStoredName(name);
      setName('');
    } catch (error) {
      console.log('Помилка збереження:', error);
    }
  };

  const clearName = async () => {
    try {
      await AsyncStorage.removeItem('userName');
      setStoredName('');
    } catch (error) {
      console.log('Помилка очищення:', error);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Збережене ім'я</Text>

      <Text style={styles.savedName}>
        {storedName ? storedName : "Немає збережених даних"}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Введіть ім'я"
        value={name}
        onChangeText={setName}
      />

      <Pressable style={styles.button} onPress={saveName}>
        <Text style={styles.buttonText}>Зберегти</Text>
      </Pressable>

      <Pressable style={styles.clearButton} onPress={clearName}>
        <Text style={styles.buttonText}>Очистити</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },

  savedName: {
    fontSize: 20,
    marginBottom: 25,
    color: '#2e86de'
  },

  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: 'white'
  },

  button: {
    backgroundColor: '#2e86de',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10
  },

  clearButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center'
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }

});