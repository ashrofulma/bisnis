import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Kontak = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profil</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: '../../../gambar/samsung.jpg' }} // Replace with actual image URI
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraIconContainer}>
          <Image
            source={{ uri: 'https://example.com/camera-icon.png' }} // Replace with actual icon URI
            style={styles.cameraIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Nama</Text>
          <TextInput style={styles.infoText} value="ASHROF" editable={false} />
          <TouchableOpacity style={styles.editIconContainer}>
            <Image
              source={{ uri: 'https://example.com/edit-icon.png' }} // Replace with actual icon URI
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.subText}>Silahkan Hubungi Nomer Ini</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Info</Text>
          <TextInput style={styles.infoText} value="TERIMAKASIH" editable={false} />
          <TouchableOpacity style={styles.editIconContainer}>
            <Image
              source={{ uri: 'https://example.com/edit-icon.png' }} // Replace with actual icon URI
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Telepon</Text>
          <TextInput style={styles.infoText} value="+62 815-1534-9169" editable={false} />
          <TouchableOpacity style={styles.editIconContainer}>
            <Image
              source={{ uri: 'https://example.com/edit-icon.png' }} // Replace with actual icon URI
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Kontak

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121b22',
    padding: 16,
  },
  header: {
    padding: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#075e54',
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 120 / 4, // Adjust this value as needed
  },
  cameraIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#25d366',
    padding: 5,
  },
  infoContainer: {
    backgroundColor: '#1c262b',
    borderRadius: 10,
    padding: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    color: '#868f94',
    fontSize: 14,
    width: 70,
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  editIconContainer: {
    marginLeft: 10,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  subText: {
    color: '#868f94',
    fontSize: 12,
    marginBottom: 20,
  },
})
