import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Лічильник: {count}</Text>

      <View style={styles.buttons}>
        <Pressable
          style={styles.button}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  counter: {
    fontSize: 30,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
