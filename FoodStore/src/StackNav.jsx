import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details } from "./pages/Details";
import Foods from "./pages/Foods";
export const AuthStack = createNativeStackNavigator();

export const AuthStackComponent = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Foods"
        component={Foods}
        options={{ title: "Foods" }}
      />
      <AuthStack.Screen
        name="Details"
        component={Details}
        options={{ title: "Food Details" }}
      />
    </AuthStack.Navigator>
  );
};
