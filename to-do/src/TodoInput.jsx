import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
} from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/action";
export const TodoInput = () => {
  const [id, setId] = useState(1);
  const [text, setText] = useState(null);
  const dispatch = useDispatch();
  const handlePress = () => {
    if (text == null) {
      Alert.alert("Please add something...");
    } else {
      setId((p) => p + 1);
      var date_time = new Date().toLocaleString();

      let obj = {
        todo: text,
        status: false,
        id: id,
        date: date_time,
      };
      dispatch(addTodo(obj));
     // setText(null)
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          height: 45,
          borderColor: "gray",
          borderWidth: 1,
          placeholderTextColor: "gray",
          borderRadius: 16,
          color: "grey",
        }}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Add a task"
      />

      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.text}>Add to todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "grey",
    color: "white",
    fontSize: 20,
    marginTop: 25,
    height: 50,
    textAlign: "center",
    borderRadius: 16,
  },
  container: {
    paddingTop: 100,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    paddingTop: 12,
  },
});
