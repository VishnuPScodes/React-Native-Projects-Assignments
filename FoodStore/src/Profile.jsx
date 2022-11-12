import { View ,Text,TouchableOpacity ,StyleSheet} from "react-native"
import { useDispatch } from "react-redux"
import { authLogOut } from "./redux/action";




export const Profile=()=>{
    const disparch=useDispatch();
    const handleSign=()=>{
        disparch(authLogOut());
    }
    return <View>
        <Text style={styles.text}>Welcome</Text>
        <TouchableOpacity onPress={handleSign}>
            <Text style={styles.button} >Sign Out</Text>
        </TouchableOpacity>
    </View>
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff1a75",
    height: 40,
    marginTop: 50,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    color:"white",
    textAlign:"center",
    fontSize:23
  },
  text: {
    color: "#ff1a75",
    textAlign: "center",
    fontSize: 55,
  },
});