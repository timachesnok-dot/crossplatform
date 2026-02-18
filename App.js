import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// 1. Створюємо контекст
const UserContext = React.createContext();

// 2. Провайдер глобального стану
function UserProvider({ children }) {
  const [userName, setUserName] = useState('Іван');

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Компонент HomeScreen
function HomeScreen() {
  const { userName } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Привіт, {userName}!</Text>
    </View>
  );
}

// 4. Компонент ProfileScreen
function ProfileScreen() {
  const { userName, setUserName } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text>Введіть нове ім'я користувача:</Text>
      <TextInput
        style={styles.input}
        value={userName}
        onChangeText={setUserName}
        placeholder="Ім'я користувача"
      />
    </View>
  );
}

// 5. Головний компонент
export default function App() {
  return (
    <UserProvider>
      <HomeScreen />
      <ProfileScreen />
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  text: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    borderRadius: 5
  }
});
