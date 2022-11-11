import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Beef from "./pages/Categories/Beef";
import Chicken from "./pages/Categories/Chicken";
import Dessert from "./pages/Categories/Dessert";
import Starter from "./pages/Categories/Starter";
import { Details } from "./pages/Details";
import Foods from "./pages/Foods";
export const AuthStack = createNativeStackNavigator();

export const AuthStackComponent = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen
        name="Foods"
        component={Foods}
        options={{ title: "Foods" }}
      />
      <AuthStack.Screen
        name="Beef1"
        component={Beef}
        options={{ title: "Beef" }}
      />
      <AuthStack.Screen
        name="Chicken"
        component={Chicken}
        options={{ title: "Chicken" }}
      />
      <AuthStack.Screen
        name="Dessert"
        component={Dessert}
        options={{ title: "Desserts" }}
      />

      <AuthStack.Screen
        name="Starter"
        component={Starter}
        options={{ title: "Starter" }}
      />
      <AuthStack.Screen
        name="Details"
        component={Details}
        options={{ title: "Food Details" }}
      />
    </AuthStack.Navigator>
  );
};
