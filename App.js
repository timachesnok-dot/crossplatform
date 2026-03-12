import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function App() {

  const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const subscription = Accelerometer.addListener(setData);
    Accelerometer.setUpdateInterval(100);
    return () => subscription.remove();
  }, []);

  const textColor = x > 0.5 ? 'red' : 'green';

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: textColor }]}>
        Нахил по X: {x.toFixed(2)}
      </Text>
      <Text>Нахил по Y: {y.toFixed(2)}</Text>
      <Text>Нахил по Z: {z.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold' },
});