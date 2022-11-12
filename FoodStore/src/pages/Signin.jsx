import { View ,Text,StyleSheet,Button,Alert} from "react-native"
import { TextInput } from "react-native"
import {useState} from 'react'
import { TouchableOpacity } from "react-native"
import { useDispatch } from "react-redux"
import { authLogIn } from "../redux/action"


export const Signin=()=>{
    const dispatch=useDispatch();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=()=>{
        console.log(email,password);
        if(email=="psvishnu131@gmail.com" && password=="12345" ){
            Alert.alert("successful")
            dispatch(authLogIn());
        }
        else{
            Alert.alert("Wrong credentials please try again");
        }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.sign}>Please Sign In </Text>

        <TextInput
          style={{
            height: 50,
            borderColor: "#ff1a75",
            borderWidth: 2.5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 0,
          }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Your email address"
        />

        <TextInput
          style={{
            height: 50,
            borderColor: "#ff1a75",
            borderWidth: 2.5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 0,
            marginTop: 40,
          }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Your password"
        />

       <TouchableOpacity onPress={handleSubmit} >
        <Text style={styles.button}>Sign in</Text>
       </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  sign: {
    color: "#ff1a75",
    fontSize: 45,
    alignSelf: "center",
    paddingBottom: 25,
    fontWeight: "700",
  },
  container: {
    marginTop: 180,
  },
  input: {
    marginTop: 40,
  },
  button: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    marginTop: 40,
    backgroundColor:"#ff1a75",
    height:45,
    textAlign:'center',
    color:"white",
    fontSize:23,
    paddingTop:7
  },
});