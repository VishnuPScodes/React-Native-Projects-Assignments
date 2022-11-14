import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { changeTheme } from "../redux/action";
export const Explore = () => {
     const data = [
       { label: "Magenta", value: "#ff1a75" },
       { label: "Green", value: "#2ECC40" },
       { label: "Yellow", value: "#FFDC00" },
       { label: "Black", value: "#111111" },
       { label: "Purple", value: "#B10DC9" },
       { label: "Blue", value: "#5007F8" },
       { label: "Red", value: "#F8072C" },
       { label: "Cyan", value: "#07E2F8" },
     ];
      const [value, setValue] = useState(null);
      const [isFocus, setIsFocus] = useState(false);
      const dispatch=useDispatch();
      const renderLabel = () => {
        if (value || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: "blue" }]}>
             Select your theme
            </Text>
          );
        }
        return null;
      };
  return (
    <View>
      <Text style={styles.text}>Change Theme</Text>
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select item" : "..."}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
            dispatch(changeTheme(item.value))
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? "blue" : "black"}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    </View>
  );
};

 const styles = StyleSheet.create({
   container: {
     backgroundColor: "white",
     padding: 16,
   },
   dropdown: {
     height: 50,
     borderColor: "gray",
     borderWidth: 0.5,
     borderRadius: 8,
     paddingHorizontal: 8,
   },
   icon: {
     marginRight: 5,
   },
   label: {
     position: "absolute",
     backgroundColor: "white",
     left: 22,
     top: 8,
     zIndex: 999,
     paddingHorizontal: 8,
     fontSize: 14,
   },
   placeholderStyle: {
     fontSize: 16,
   },
   selectedTextStyle: {
     fontSize: 16,
   },
   iconStyle: {
     width: 20,
     height: 20,
   },
   inputSearchStyle: {
     height: 40,
     fontSize: 16,
   },
   text:{
    marginBottom:10
   }
 });