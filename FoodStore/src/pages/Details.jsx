import { useFocusEffect } from "@react-navigation/native";
import { Text } from "react-native";
import { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  Image,
  BackHandler,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";

export const Details = ({ route, navigation }) => {
  const reduxPath = useSelector((state) => state.path);

  const { image, name, path } = route.params;

  useFocusEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", onBackPress2);
  });
  const onBackPress2 = async () => {
    navigation.navigate(reduxPath);
  };
  const handleSubmit=()=>{

  }
  return (
    <ScrollView>

      <Text style={styles.font} >{name}</Text>
      <Image style={{ height: 530, width: 380 }} source={{ uri: image }} />
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.button}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
 
  button: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    marginTop: 40,
    backgroundColor: "#ff1a75",
    height: 45,
    textAlign: "center",
    color: "white",
    fontSize: 23,
    paddingTop: 7,
  },
  font: {
    color: "#ff1a75",
    fontSize:25
  },
});