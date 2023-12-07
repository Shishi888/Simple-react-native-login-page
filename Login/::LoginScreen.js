//LoginScreen.js
import {
  StyleSheet,View,TouchableOpacity,TextInput,Button,Text} 
  from "react-native";
import React,{useState} from "react";
import {StatusBar} from "expo-status-bar";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return ( 
    // I used a View to wrap each text input for easy styling

    <View style={styles.container}>
       
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#fff"
          onChangeText={(email) => setEmail(email)}
          //The setState method will update the state object with whatever information the user has entered
        /> 
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#fff"
          //secureTextEntry is set to true to hide the text for security purposes. 
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      
      <TouchableOpacity style={styles.loginBtn}> 
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
    </View> //I used a TouchableOpacity button, which changes opacity when pressed.
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09094F",
    alignItems: "center",
    justifyContent: "center",
  },
  
  inputView: {
    backgroundColor: "#A0A6D8",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 50,
    color: "#fff"
    


  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
});
