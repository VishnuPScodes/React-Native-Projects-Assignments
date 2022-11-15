import { View, TextInput, TouchableOpacity ,StyleSheet ,Text} from "react-native";
import {useState} from 'react'
export const TodoInput = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          height: 45,
          borderColor: "gray",
          borderWidth: 1,
          placeholderTextColor: "gray",
          borderRadius: 16,
          color:"grey",
       
        }}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Add a task"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Submit</Text>
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
    borderRadius:16
  },
  container: {
    paddingTop: 100,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    paddingTop:12
  },
});
