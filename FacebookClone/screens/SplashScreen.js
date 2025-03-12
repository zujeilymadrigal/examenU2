import React, { useEffect, useRef } from "react";
import { View, Image, StyleSheet, Animated } from "react-native";

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

   
    const timer = setTimeout(() => {
      navigation.replace("FeedScreen");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" }} 
        style={[styles.logo, { opacity: fadeAnim }]}
      />
      <Image source={require("../assets/facebook-text.png")} style={styles.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    width: 120,
    height: 20,
    marginTop: 10,
  },
});

export default SplashScreen;
