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
import { changePath } from "../../redux/action";
export default function Beef({ navigation }) {
  const [data, setData] = useState([]);
  const dispatch=useDispatch();

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef")
      .then((e) => {
        setData(e.data.meals);
      });
  }, []);

  return (
    <View>
      <Text>Welcome to food store</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.idMeal}
        data={data}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => {
                   dispatch(changePath('Beef'))
                  navigation.navigate("Details", {
                    image: item.strMealThumb,
                    name: item.strMeal,
                    path: "Beef",
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
            </>
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
  content: {},
});
