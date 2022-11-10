import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
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
import Foods from "./src/pages/Foods";
import { AuthStackComponent } from "./src/StackNav";
import DashbordDrawer from "./src/DrawerNav";

const rootStack = createNativeStackNavigator();

const RootApplication = () => {
  
  return (
    <rootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <rootStack.Screen name="foods" component={DashbordDrawer} />
    </rootStack.Navigator>
  );
};

export default function App() {
  const [data, setData] = useState([]);

  return (
    <NavigationContainer>
      <RootApplication />
     
    </NavigationContainer>
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
    alignSelf: "centre",
  },
});
