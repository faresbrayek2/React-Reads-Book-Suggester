import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Icon } from "@rneui/themed";
import { auth } from "../firebase";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [author, setAuthor] = useState([]);
  const [link, setLink] = useState([]);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const random = getRandomInt(1000);

  const getABook = () => {
    fetch("https://www.goodreads.com/book/show/" + random)
      .then((response) => response.text())
      .then((text) => {
        setData(text);
        console.log(data);
        const info = data.match(/<title>(.*)by (.*) /);
        console.log(info);
        setAuthor(info[2]);
        setTitle(info[1]);
        console.log(title);
        console.log(author);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });

    setLink("https://www.goodreads.com/book/show/" + random);
  };
  if (isLoading) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.topb}>
          <TouchableOpacity onPress={handleSignOut}>
            <Icon
              name="unlock"
              type="evilicon"
              color="#fff"
              style={styles.test}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/ktob.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.pagetext}>Wait lemme think..</Text>
        <TouchableOpacity
          onPress={getABook}
          style={[styles.button, styles.buttonstyle1]}
        >
          <Text style={styles.buttonText}>Get a Book</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topb}>
        <TouchableOpacity onPress={handleSignOut}>
          <Icon
            name="unlock"
            type="evilicon"
            color="#fff"
            size={60}
            style={styles.test}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/ktob.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={getABook}
          style={[styles.button, styles.buttonstyle1]}
        >
          <Text style={styles.buttonText}>Get a Book</Text>
        </TouchableOpacity>
      </View>
      <Text>Book title :</Text>
      <Text>{title}</Text>
      <Text>By :</Text>
      <Text>{author}</Text>
      <Text>review and more information here :</Text>
      <Text>{link}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    paddingBottom: "80%",
  },

  image: {
    width: 200,
    height: 153,
    marginBottom: 15,
  },

  buttonContainer: {
    height: 36,
    width: 286,
    marginTop: 1,
    marginBottom: 30,
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
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 12,
    minHeight: 15,
  },
  topb: {
    alignSelf: "stretch",
    height: 42,
    flexDirection: "row", // row
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 25,
    marginBottom: 100,
  },
  test: {
    marginTop: 90,
    height: 60,
    marginLeft: 300,
  },
  pagetext: {
    color: "white",
  },
});
