import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const kontak = () => {
  return (
    <View>
      <Text style={styles.nomer}>Hp 081572398</Text>
      <Text>index</Text>
    </View>
  )
}

export default kontak

const styles = StyleSheet.create({
  nomer:{
    color:'black',
  },
})