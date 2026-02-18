
import { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable
} from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Pressable
        style={styles.openButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>
          Показати модальне вікно
        </Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Це модальне вікно!
            </Text>

            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>
                Закрити
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  openButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalView: {
    width: 300,
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
  },

  modalText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },

  closeButton: {
    backgroundColor: '#f44336',
    padding: 12,
    borderRadius: 8,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});