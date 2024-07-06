import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pembayaran = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../../gambar/download-logo-bca-vector-7.jpg")} />
      <Image style={styles.image} source={require("../../../gambar/cms-package.jpg")} />
      <Text style={styles.text}>SILAHKAN PILIH METODE PEMBAYARAN</Text>
    </View>
  )
}

export default Pembayaran

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
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
  }
})
