import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { WebView } from "react-native-webview";
// import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [name, setName] = useState("John Obansa");
  // Set loading state
  const [showGithub, setShowGithub] = useState(false);
  const handlePress = () => {
    setShowGithub(true);
  };
  const url = "https://github.com/ozo-vehe";
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      {showGithub ? (
        <View style={{ width: "100%", height: "100%" }}>          
          <View style={{width: 200, marginBottom: 10, paddingVertical: 5, borderWidth: 1, backgroundColor: "green", borderRadius: 5}}>
            <Button
              title="Back to Profile"
              onPress={() => setShowGithub(false)}
              color="green"
            />
          </View>
          <WebView source={{ uri: url }} onLoad={console.log("Loaded")} />
        </View>
      ) : (
        <View style={styles.profile}>
          <Image
            source={require("./assets/profile.jpg")}
            style={styles.image}
          />
          <Text style={styles.name}>{name}</Text>
          <View style={{width: "100%", marginTop: 30, paddingVertical: 5, borderWidth: 1, backgroundColor: "green", borderRadius: 5}}>
            <Button
              title="Open GitHub"
              onPress={() => setShowGithub(true)}
              color="green"
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
  profile: {
    width: "100%",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "start",
  },
  name: {
    fontSize: 50,
    fontWeight: "bold",
    marginVertical: 10,
  },
  image: {
    width: 200, 
    height: 200, 
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
  },
});
