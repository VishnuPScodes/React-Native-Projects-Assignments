import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { TodoInput } from "./src/TodoInput";
import { store } from "./src/redux/store";
import { TodoList } from "./src/TodoList";
export default function App() {
  return (
    <Provider store={store} >
      <TodoInput />
      <TodoList/>
    </Provider>
  );
}

const styles = StyleSheet.create({});
