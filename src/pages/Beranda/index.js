import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Beranda = () => {
  return (
    <ScrollView>
      <Image source={require("../../../gambar/5622723_88ffde35-05b0-49a7-9ba9-284fcad4ab3c_2048_2048.jpg")} />
      <Image source={require("../../../gambar/iphone_11_pro.jpg")} />
      <Image source={require("../../../gambar/main-list-image-c0207bb7-ddab-4921-947f-c3975d1231e2-3.jpg")} />
      <Image source={require("../../../gambar/Infinix-Hot-40-Pro.jpg")} />
      <Text>index</Text>
    </ScrollView>
  )
}

export default Beranda

const styles = StyleSheet.create({})