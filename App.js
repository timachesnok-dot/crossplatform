import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// HomeScreen
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Головний екран</Text>
      <Button
        title="Перейти на деталі"
        onPress={() =>
          navigation.navigate('Details', {
            message: 'Привіт з головного екрану!',
          })
        }
      />
    </View>
  );
}

// DetailsScreen
function DetailsScreen({ route }) {
  const { message } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Екран деталей</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

// Головний компонент
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Стилі
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 18,
    color: 'gray',
    marginTop: 10,
  },
});
