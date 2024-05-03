import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Beranda = () => {
  return (
    <ScrollView>
      <Image source={require("../../../gambar/5622723_88ffde35-05b0-49a7-9ba9-284fcad4ab3c_2048_2048.jpg")} />
      <Image source={require("../../../gambar/iphone_11_pro.jpg")} />
      <Text>index</Text>
    </ScrollView>
  )
}

export default Beranda

const styles = StyleSheet.create({})