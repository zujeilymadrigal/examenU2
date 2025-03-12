import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Avatar, Button, Card, Divider } from 'react-native-elements';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Imagen de portada */}
      <View style={styles.coverPhoto}></View>

      {/* Avatar de perfil */}
      <View style={styles.avatarContainer}>
        <Avatar
          rounded
          size="xlarge"
          source={{ uri: 'https://placehold.co/200x200' }}
          containerStyle={styles.avatar}
        />
      </View>

      {/* Nombre y botón */}
      <View style={styles.profileInfo}>
        <Text style={styles.name}>Lorem Ipsum</Text>
        <Button
  title="Agregar a Historia"
  type="outline"
  buttonStyle={styles.storyButton}
  titleStyle={{ color: '#1877F2' }}
/>
      </View>

      {/* Datos del perfil */}
      <Card>
        <Card.Title>Información</Card.Title>
        <Card.Divider />
        <Text>📍 Vive en: Ciudad Ejemplo</Text>
        <Text>👥 Amigos: 250</Text>
        <Text>💼 Trabajo: Empresa XYZ</Text>
        <Button title="Editar perfil" containerStyle={{ marginTop: 15 }} />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coverPhoto: {
    height: 200,
    backgroundColor: '#d3d3d3',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -60,
  },
  avatar: {
    borderWidth: 4,
    borderColor: '#fff',
  },
  profileInfo: {
    alignItems: 'center',
    marginVertical: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  storyButton: {
    marginTop: 10,
    borderColor: '#1877F2',
  },
});

export default ProfileScreen;

