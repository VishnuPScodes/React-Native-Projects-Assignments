import { createDrawerNavigator } from "@react-navigation/drawer";
import Beef from "./pages/Categories/Beef";
import Chicken from "./pages/Categories/Chicken";
import Dessert from "./pages/Categories/Dessert";
import Starter from "./pages/Categories/Starter";
import { Profile } from "./Profile";
import { AuthStackComponent } from "./StackNav";




const DashbordStack = createDrawerNavigator();
export default function DashbordDrawer() {
  return (
    <DashbordStack.Navigator
   
    >
      <DashbordStack.Screen name="Food" component={AuthStackComponent} />
      <DashbordStack.Screen name="Profile" component={Profile} />
      <DashbordStack.Screen name="Beef" component={Beef} />
      <DashbordStack.Screen name="Chicken" component={Chicken} />
      <DashbordStack.Screen name="Dessert" component={Dessert} />
      <DashbordStack.Screen name="Starter" component={Starter} />
    </DashbordStack.Navigator>
  );
}
