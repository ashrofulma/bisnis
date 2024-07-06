import { Image, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'

const Pembayaran = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImagePress = (imageSource) => {
    setSelectedImage(imageSource)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleImagePress(require("../../../gambar/download-logo-bca-vector-7.jpg"))}>
        <Image style={styles.image} source={require("../../../gambar/download-logo-bca-vector-7.jpg")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleImagePress(require("../../../gambar/cms-package.jpg"))}>
        <Image style={styles.image} source={require("../../../gambar/cms-package.jpg")} />
      </TouchableOpacity>
      <Text style={styles.text}>SILAHKAN PILIH METODE PEMBAYARAN</Text>

      {selectedImage && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Image style={styles.modalImage} source={selectedImage} />
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  )
}

export default Pembayaran

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 20,
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalImage: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  }
})
