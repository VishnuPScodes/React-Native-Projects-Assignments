import { useFocusEffect } from "@react-navigation/native";
import { Text, Alert } from "react-native";
import { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  Image,
  BackHandler,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/action";
var color = "#ff1a75";
export const Details = ({ route, navigation }) => {
  const reduxPath = useSelector((state) => state.path);
  const dispatch = useDispatch();
  color = useSelector((state) => state.theme);
  const [click, setClick] = useState(false);
  const { image, name, path } = route.params;
  console.log("coloris", color);
  useFocusEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", onBackPress2);
  });
  const onBackPress2 = async () => {
    navigation.navigate(reduxPath);
  };
  const handleSubmit = () => {
    let obj = {
      image: image,
      name: name,
    };

    dispatch(addToCart(obj));
    setClick(true);
  };
  return (
    <ScrollView>
      <Text style={{ color: color, fontSize: 25 }}>{name}</Text>
      <Image style={{ height: 530, width: 380 }} source={{ uri: image }} />
      <TouchableOpacity onPress={handleSubmit}>
        <Text
          style={{
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 0,
            marginTop: 40,
            backgroundColor: color,
            height: 45,
            textAlign: "center",
            color: "white",
            fontSize: 23,
            paddingTop: 7,
          }}
        >
          Add to Cart
        </Text>
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
    backgroundColor: color,
    height: 45,
    textAlign: "center",
    color: "white",
    fontSize: 23,
    paddingTop: 7,
  },
  font: {
    color: color,
    fontSize: 25,
  },
});
