import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  // Set loading state
  const [showGithub, setShowGithub] = useState(false);
  // GitHub profile URL
  const url = "https://github.com/ozo-vehe";

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {showGithub ? (
        // Show GitHub profile
        <View style={{ width: "100%", height: "100%" }}>          
          <View style={styles.buttonContainer}>
            <Text
              style={styles.button}
              onPress={() => setShowGithub(false)}
            >
              Back to profile
            </Text>
          </View>

          {/* Show GitHub profile in WebView */}
          <WebView source={{ uri: url }} />
        </View>
      ) : (
        // Show profile
        <View style={styles.profile}>
          <Image
            source={require("./assets/profile.jpg")}
            style={styles.image}
          />
          <Text style={styles.name}>John Obansa</Text>
          <View style={styles.buttonContainer}>
            {/* <Button
              title="Open GitHub"
              onPress={() => setShowGithub(true)}
              color="green"
            /> */}
            <Text
              style={styles.button}
              onPress={() => setShowGithub(true)}
            >
              Open GitHub
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 10,
    backgroundColor: "#f7f7f7",
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
  },
  buttonContainer: {
    width: 150,
    marginVertical: 10,
    paddingVertical: 15,
    backgroundColor: "#0293D6",
    borderRadius: 5
  },
  button: {
    color: "white",
    textAlign: "center",
    fontSize: 16
  },
});
