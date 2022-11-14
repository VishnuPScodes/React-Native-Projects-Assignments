import { View ,Text,TouchableOpacity ,StyleSheet} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { authLogOut } from "./redux/action";




export const Profile=()=>{
    const disparch=useDispatch();
    const color=useSelector((state)=>state.theme);
    const handleSign=()=>{
        disparch(authLogOut());
    }
    return (
      <View>
        <Text
          style={{
            color: color,
            textAlign: "center",
            fontSize: 55,
          }}
        >
          Welcome
        </Text>
        <TouchableOpacity onPress={handleSign}>
          <Text
            style={{
              backgroundColor: color,
              height: 40,
              marginTop: 50,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 0,
              color: "white",
              textAlign: "center",
              fontSize: 23,
            }}
          >
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({
 
});