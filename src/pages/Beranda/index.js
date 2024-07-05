import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Beranda = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../../../gambar/5622723_88ffde35-05b0-49a7-9ba9-284fcad4ab3c_2048_2048.jpg")} />
        <Text style={styles.imageText}>Item 1</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../../../gambar/iphone_11_pro.jpg")} />
        <Text style={styles.imageText}>Item 2</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../../../gambar/main-list-image-c0207bb7-ddab-4921-947f-c3975d1231e2-3.jpg")} />
        <Text style={styles.imageText}>Item 3</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../../../gambar/Infinix-Hot-40-Pro.jpg")} />
        <Text style={styles.imageText}>Item 4</Text>
      </View>
      <Text style={styles.indexText}>Index</Text>
    </ScrollView>
  )
}

export default Beranda;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  imageContainer: {
    width: '45%',
    marginVertical: 10,
    backgroundColor: '#fff',
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
  indexText: {
    width: '100%',
    textAlign: 'center',
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
  }
});
