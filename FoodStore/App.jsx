import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";
import { store } from "./src/redux/store";
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
import TabScreens from "./src/TabScreen";
import { Signin } from "./src/pages/Signin";
import { AuthStackSignIn } from "./src/AuthStack";

const rootStack = createNativeStackNavigator();

const RootApplication = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <rootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {auth ? (
        <rootStack.Screen name="foods" component={TabScreens} />
      ) : (
       <rootStack.Screen name="Signin" component={Signin} />
      )}
    </rootStack.Navigator>
  );
};

export default function App() {
  const [data, setData] = useState([]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootApplication />
        {/* <Signin/> */}
      </NavigationContainer>
    </Provider>
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
