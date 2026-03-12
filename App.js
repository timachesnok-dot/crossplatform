import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [userData, setUserData] = useState(null);

  const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const handleSubmit = () => {

    if (!name || !email || !phone) {
      setError('Будь ласка, заповніть усі поля');
      return;
    }

    if (!validateEmail(email)) {
      setError('Невірний формат Email');
      return;
    }

    setError('');

    const data = {
      name,
      email,
      phone
    };

    console.log('Дані користувача:', data);

    setUserData(data);

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Форма користувача</Text>

      <TextInput
        style={styles.input}
        placeholder="Ім'я"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Електронна пошта"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Телефон"
        keyboardType="numeric"
        value={phone}
        onChangeText={setPhone}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Надіслати</Text>
      </Pressable>

      {userData && (
        <View style={styles.result}>
          <Text style={styles.resultTitle}>Введені дані:</Text>
          <Text>Ім'я: {userData.name}</Text>
          <Text>Email: {userData.email}</Text>
          <Text>Телефон: {userData.phone}</Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center'
  },

  input: {
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
    alignItems: 'center',
    marginBottom: 20
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },

  error: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center'
  },

  result: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8
  },

  resultTitle: {
    fontWeight: 'bold',
    marginBottom: 10
  }

});