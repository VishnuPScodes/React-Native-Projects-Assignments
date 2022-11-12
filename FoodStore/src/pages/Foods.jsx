import axios from "axios";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changePath } from "../redux/action";
export default function Foods({ navigation }) {
  const [data, setData] = useState([]);
     const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((e) => {
        setData(e.data.meals);
      });
  }, []);

  return (
    <View>
      <Text>Welcome to food store</Text>

      <FlatList
        keyExtractor={(item) => item.idMeal}
        data={data}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  dispatch(changePath("Foods"));
                  navigation.navigate("Details", {
                    image: item.strMealThumb,
                    name: item.strMeal,
                    path: "Foods",
                  });
                }}
                style={styles.content}
              >
                <Image
                  source={{ uri: item.strMealThumb }}
                  style={{ width: 390, height: 335 }}
                />
                <Text>{item.strMeal}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <Text>Yes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    marginVertical: 50,
  },
  content: {
    width: "100%",
    height: 400,
    backgroundColor: "#ff1a75",
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 29,
      height: 25,
    },
    shadowOpacity: 0.55,
    shadowRadius: 2.84,

    elevation: 100,
  },
});
