import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { auth } from "../firebase";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const RegisterAccount = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("Registered successfully!");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image
        source={require("../assets/ktob.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.KtobText}>Suggest Me a Book!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={RegisterAccount}
          style={[styles.button, styles.buttonstyle1]}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={[styles.button, styles.buttonstyle2]}
        >
          <Text style={styles.buttonText2}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    height: 36,
    width: 286,
    marginTop: 15,
  },
  button: {
    backgroundColor: "#06cab5",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonstyle1: {
    height: 36,
    width: 286,
    marginTop: 15,
    backgroundColor: "#ffffff",
  },
  buttonstyle2: {
    height: 36,
    width: 286,
    marginTop: 15,
    backgroundColor: "rgba(55,55,55,1)",
  },
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 12,
    minHeight: 15,
  },
  buttonText2: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
    minHeight: 15,
  },
  image: {
    width: 200,
    height: 153,
    marginBottom: 15,
  },
  KtobText: {
    color: "#FFFFFF",
    fontSize: 24,
    textAlign: "center",
  },
  registertext: {
    color: "#121212",
    marginTop: 20,
    fontSize: 12,
    alignSelf: "center",
  },
  pagetext: {
    color: "white",
  },
});
