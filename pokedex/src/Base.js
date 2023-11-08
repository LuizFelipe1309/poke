import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  SetImageAsset,
  Alert,
} from "react-native";


export default function Base() {
  
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Image style={styles.img} source={require("./images/pokeback.jpeg")} />

    <SafeAreaView style={styles.b}>
      <Text>L</Text>
    </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    position: "absolute",
  },
  b: {
    height: 700,
    top: -13,
    width: '100%',
  },

  viewbutton1: {
    flexDirection: "row",
    top: 120,
  },
  textbnt: {
    fontWeight: "bold",
    fontSize: 30,
    padding: 5,
  },
  button1: {
    right: 13,
    borderStyle: "solid",
    borderRadius: 15,
    borderWidth: 4,
    backgroundColor: "#ff0000",
  },
  button2: {
    left: 13,
    borderStyle: "solid",
    borderRadius: 15,
    borderWidth: 4,
    backgroundColor: "#ff0000",
  },

  mainview: {
    alignItems: "center",
  },
  mainimg: {
    width: 250,
    height: 250,
    top: -50,
  },

  poketype1: {
    height: 50,
    width: 130,
    right: 10,
  },
  poketype2: {
    height: 50,
    width: 130,
    left: 10,
  },

  cont: {
    flexDirection: "row",
  },
  maintext1: {
    top: 20,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "justify",
    paddingTop: 20,
  },
  maintext2: {
    top: 20,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "justify",
    paddingTop: 20,
    left: 20,
  },
});
