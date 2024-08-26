import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image} from "react-native";
import { useRouter } from "expo-router";
import Sections from "./Sections"; // Import the Sections component

import placeholderImage from './logo.png';
import House from './house.png';
import Die from './die.png';
import Chat from './chat.png';
import Host from './Host.png';
import Star from './star.png';
import Settings from './settings.png';

const App = () => {
  const router = useRouter(); // Initialize useRouter

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Image source={placeholderImage} style={styles.imagePlaceholder} /> {/* Image placeholder */}
        <View style={styles.sidebarContent}>
          <TouchableOpacity
            style={styles.sidebarButton}
            onPress={() => router.push("/")}
          >
            <Image source={House} style={styles.sidebarIcon} />
            <Text style={styles.sidebarButtonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarButton}
            onPress={() => router.push("/gamehub")}
          >
            <Image source={Die} style={styles.sidebarIcon} />
            <Text style={styles.sidebarButtonText}>Gamehub</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarButton}
            onPress={() => router.push("/chat")}
          >
            <Image source={Chat} style={styles.sidebarIcon} />
            <Text style={styles.sidebarButtonText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarButton}
            onPress={() => router.push("/host")}
          >
            <Image source={Host} style={styles.sidebarIcon} />
            <Text style={styles.sidebarButtonText}>Host</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarButton}
            onPress={() => router.push("/About")}
          >
            <Image source={Star} style={styles.sidebarIcon} />
            <Text style={styles.sidebarButtonText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarButton}
            onPress={() => router.push("/settings")}
          >
            <Image source={Settings} style={styles.sidebarIcon} />
            <Text style={styles.sidebarButtonText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Find and create the perfect game night
          </Text>
          <Text style={styles.headerSubText}>
            Play fun tabletop games with your friends and meet new people.
            Obtain new games and share yours with others!
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/Login")} // Add navigation to Login.js
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        {/* Render the Sections component */}
        <Sections />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: "100%",
  },
  sidebar: {
    width: 250,
    backgroundColor: "#ffffff",
    padding: 20,
    paddingTop: 30, // Adjust to bring buttons closer to the top
    alignItems: "flex-start",
  },
  imagePlaceholder: {
    width: 200,
    height: 137,
    backgroundColor: "#e0e0e0", // Light gray placeholder color
    borderRadius: 10,
    marginBottom: 15,
  },
  sidebarContent: {
    marginTop: 5, // Adjust to reduce space below image placeholder
  },
  sidebarButton: {
    flexDirection: "row", // Arrange icon and text in a row
    alignItems: "center", // Vertically align items to the center
    marginBottom: 40, // Add more space between buttons
  },
  sidebarIcon: {
    width: 30, // Adjust size as needed
    height: 30,
    marginLeft: 25,
    backgroundColor: "#e0e0e0",
  },
  sidebarButtonText: {
    color: "#C70039",
    fontSize: 18,
    paddingLeft: 15, // Adjust padding to position the text relative to the icon
  },
  content: {
    flexGrow: 1,
    padding: 10,
  },
  header: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#C70039",
  },
  headerSubText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#D32F2F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default App;
