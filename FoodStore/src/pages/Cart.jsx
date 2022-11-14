import { View, Text } from "react-native";
import { FlatList, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";

export const Cart = () => {
  const data = useSelector((state) => state.cart);
  const color=useSelector((state)=>state.theme);
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Image source={{ uri: item.image, height: 90, width: 90 }} />
              <Text style={{ paddingLeft: 10, color: color, fontSize: 19 }}>
                {item.name}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
    elevation: 5,
   // if you need
  
    overflow: "hidden",
    shadowColor: "red",
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  text: {
    paddingLeft: 10,
    color: "#ff1a75",
    fontSize: 19,
  },
});
