import { View, Image, StyleSheet, ScrollView, Text } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Локальне зображення</Text>

      <Image
        source={require('./assets/logo.png')}
        style={styles.localImage}
        resizeMode="contain"
      />

      <Text style={styles.title}>Мережеве зображення</Text>

      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.networkImage}
        resizeMode="cover"
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2'
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10
  },

  localImage: {
    width: 180,
    height: 180,
    marginBottom: 30,
    borderRadius: 15
  },

  networkImage: {
    width: 180,
    height: 180,
    borderRadius: 25
  }

});