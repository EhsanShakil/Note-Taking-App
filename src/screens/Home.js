import { View, Text, StatusBar, StyleSheet, Platform } from "react-native";
import React from "react";
import Card from "../components/Card";
import AddButton from "../components/AddButton";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.heading}>Note-Taking App</Text>
      <Card />
      <View style={styles.addButton}>
        <AddButton />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    marginTop: Platform.OS === "ios" ? 50 : 20,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
