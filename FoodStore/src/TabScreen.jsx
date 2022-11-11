import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import DashbordDrawer from "./DrawerNav";
import { Explore } from "./pages/Explore";
import { Profile } from "./Profile";


const Tab = createBottomTabNavigator();

export default function TabScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 30, height: 20 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
                }}
              />
            );
          },
        }}
        name="HomePage"
        component={DashbordDrawer}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 60, height: 30 }}
                source={{
                  uri: "https://media.istockphoto.com/id/1196083861/vector/simple-man-head-icon-set.jpg?s=612x612&w=0&k=20&c=a8fwdX6UKUVCOedN_p0pPszu8B4f6sjarDmUGHngvdM=",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Explore}
        options={{
         
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 20, height: 20 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3524/3524659.png",
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
