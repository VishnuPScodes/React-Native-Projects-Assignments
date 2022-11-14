
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
import { changePath } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
export default function Chicken({ navigation }) {
  const [data, setData] = useState([]);
  const dispatch=useDispatch();
  const color=useSelector((state)=>state.theme);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken")
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
                  dispatch(changePath("Chicken"));
                  navigation.navigate("Details", {
                    image: item.strMealThumb,
                    name: item.strMeal,
                    path: "Chicken",
                  });
                }}
                style={{
                  width: "100%",
                  height: 400,
                  backgroundColor: color,
                  marginTop: 40,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 29,
                    height: 25,
                  },
                  shadowOpacity: 0.55,
                  shadowRadius: 2.84,

                  elevation: 100,
                }}
              >
                <Image
                  source={{ uri: item.strMealThumb }}
                  style={{ width: 410, height: 335 }}
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
