import React from "react";
import { View, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"; // 👈 Nuevo import

const posts = [
  {
    id: "1",
    user: "Juan Pérez",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    time: "2h",
    content: "Disfrutando el día en la playa 🌊☀️",
    image: "https://source.unsplash.com/random/400x300",
  },
  {
    id: "2",
    user: "Maria López",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    time: "5h",
    content: "Increíble atardecer en la ciudad 🌇",
    image: "https://source.unsplash.com/random/400x301",
  },
];

const FeedScreen = () => {
  const navigation = useNavigation(); // 👈 Necesario para navegación

  return (
    <View style={styles.container}>
      {/* Barra superior */}
      <View style={styles.header}>
        <Text style={styles.logo}>facebook</Text>
        <View style={styles.icons}>
          <Icon name="search" type="feather" size={24} color="#000" />
          <Icon name="message-circle" type="feather" size={24} color="#000" style={styles.icon} />
          
          {/* Icono de Perfil */}
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Icon name="user" type="feather" size={24} color="#000" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Caja de texto */}
      <View style={styles.postInput}>
        <Avatar rounded source={{ uri: "https://randomuser.me/api/portraits/men/3.jpg" }} />
        <TextInput placeholder="What's on your mind?" style={styles.input} />
      </View>

      {/* Lista de posts */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <Avatar rounded source={{ uri: item.avatar }} />
              <View style={styles.postInfo}>
                <Text style={styles.user}>{item.user}</Text>
                <Text style={styles.time}>{item.time} ago</Text>
              </View>
            </View>
            <Text style={styles.content}>{item.content}</Text>
            <Image source={{ uri: item.image }} style={styles.postImage} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1877F2",
  },
  icons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 15,
  },
  postInput: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  input: {
    marginLeft: 10,
    flex: 1,
    backgroundColor: "#f0f2f5",
    borderRadius: 20,
    padding: 10,
  },
  post: {
    backgroundColor: "#fff",
    marginVertical: 5,
    padding: 10,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  postInfo: {
    marginLeft: 10,
  },
  user: {
    fontWeight: "bold",
  },
  time: {
    color: "gray",
    fontSize: 12,
  },
  content: {
    marginVertical: 5,
  },
  postImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
});

export default FeedScreen;
