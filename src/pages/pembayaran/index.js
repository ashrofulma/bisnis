import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const pembayaran = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../../../gambar/download-logo-bca-vector-7.jpg")} />
      <Image style={styles.image} source={require("../../../gambar/cms-package.jpg")} />
      <Text>Haaaaaaaaaaaaaaa</Text>
    </View>
  )
}

export default pembayaran

const styles = StyleSheet.create({
  image: {
    width: 422,
    height: 177,
  }
})