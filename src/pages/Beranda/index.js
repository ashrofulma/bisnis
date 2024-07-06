import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin();
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginTitle}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const Beranda = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.imageContainer} onPress={() => handlePress({
        id: 1,
        source: require("../../../gambar/5622723_88ffde35-05b0-49a7-9ba9-284fcad4ab3c_2048_2048.jpg"),
        text: 'Item 1'
      })}>
        <Image style={styles.image} source={require("../../../gambar/5622723_88ffde35-05b0-49a7-9ba9-284fcad4ab3c_2048_2048.jpg")} />
        <Text style={styles.imageText}>VIVO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer} onPress={() => handlePress({
        id: 2,
        source: require("../../../gambar/iphone_11_pro.jpg"),
        text: 'Item 2'
      })}>
        <Image style={styles.image} source={require("../../../gambar/iphone_11_pro.jpg")} />
        <Text style={styles.imageText}>IPONE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer} onPress={() => handlePress({
        id: 3,
        source: require("../../../gambar/main-list-image-c0207bb7-ddab-4921-947f-c3975d1231e2-3.jpg"),
        text: 'Item 3'
      })}>
        <Image style={styles.image} source={require("../../../gambar/main-list-image-c0207bb7-ddab-4921-947f-c3975d1231e2-3.jpg")} />
        <Text style={styles.imageText}>IPONE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer} onPress={() => handlePress({
        id: 4,
        source: require("../../../gambar/Infinix-Hot-40-Pro.jpg"),
        text: 'Item 4'
      })}>
        <Image style={styles.image} source={require("../../../gambar/Infinix-Hot-40-Pro.jpg")} />
        <Text style={styles.imageText}>INFINIK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer} onPress={() => handlePress({
        id: 5,
        source: require("../../../gambar/HP.jpg"),
        text: 'Item 5'
      })}>
        <Image style={styles.image} source={require("../../../gambar/HP.jpg")} />
        <Text style={styles.imageText}>SAMSUNG</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer} onPress={() => handlePress({
        id: 6,
        source: require("../../../gambar/Galaxy-A20.jpg"),
        text: 'Item 6'
      })}>
        <Image style={styles.image} source={require("../../../gambar/Galaxy-A20.jpg")} />
        <Text style={styles.imageText}>SAMSUNG</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer} onPress={() => handlePress({
        id: 7,
        source: require("../../../gambar/merek.jpg"),
        text: 'Item 7'
      })}>
        <Image style={styles.image} source={require("../../../gambar/merek.jpg")} />
        <Text style={styles.imageText}>REDMI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer} onPress={() => handlePress({
        id: 8,
        source: require("../../../gambar/note.jpg"),
        text: 'Item 8'
      })}>
        <Image style={styles.image} source={require("../../../gambar/note.jpg")} />
        <Text style={styles.imageText}>REDMI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer} onPress={() => handlePress({
        id: 9,
        source: require("../../../gambar/poto.jpg"),
        text: 'Item 9'
      })}>
        <Image style={styles.image} source={require("../../../gambar/poto.jpg")} />
        <Text style={styles.imageText}>REDMI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer} onPress={() => handlePress({
        id: 10,
        source: require("../../../gambar/Redmi-NOte-8.jpg"),
        text: 'Item 10'
      })}>
        <Image style={styles.image} source={require("../../../gambar/Redmi-NOte-8.jpg")} />
        <Text style={styles.imageText}>REDMI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer} onPress={() => handlePress({
        id: 11,
        source: require("../../../gambar/samsung.jpg"),
        text: 'Item 11'
      })}>
        <Image style={styles.image} source={require("../../../gambar/samsung.jpg")} />
        <Text style={styles.imageText}>SAMSUNG</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer} onPress={() => handlePress({
        id: 12,
        source: require("../../../gambar/Xiaomi.jpg"),
        text: 'Item 12'
      })}>
        <Image style={styles.image} source={require("../../../gambar/Xiaomi.jpg")} />
        <Text style={styles.imageText}>REDMI</Text>
      </TouchableOpacity>

      <Text style={styles.indexText}>Index</Text>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {selectedItem && (
              <Image style={styles.modalImage} source={selectedItem.source} />
            )}
            <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  loginTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  imageContainer: {
    width: '45%',
    marginVertical: 10,
    backgroundColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  imageText: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
