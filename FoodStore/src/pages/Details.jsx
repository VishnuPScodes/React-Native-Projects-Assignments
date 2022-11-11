import { useFocusEffect } from "@react-navigation/native";
import { Text } from "react-native";
import { useEffect, useState, useLayoutEffect } from "react";
import { View, Image, BackHandler } from "react-native";
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

  return (
    <View>
      <Text>{name}</Text>
      <Image style={{ height: 530, width: 380 }} source={{ uri: image }} />
    </View>
  );
};
