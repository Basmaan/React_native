import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import COLORS from "../consts/colors";
import * as Animatable from 'react-native-animatable';

function LoginScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <Animatable.View style={styles.container} animation="fadeInUp" duration={500} easing="linear">
        <StatusBar style="auto" />
        <Image source={{ uri: 'https://t3.ftcdn.net/jpg/02/30/59/84/360_F_230598496_QqLc4bd0K2zmkVvUQDUBVBPy8y9ILhXc.jpg' }}
          style={{ width: 300, height: 300 }}
        />

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}  
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity animation="fadeInUpBig" style={styles.loginBtn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </Animatable.View>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    backgroundColor: "#FFEBEE",
    borderRadius: 30,
    width: "70%",
    height: 50,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginText: {
    color: "white",
    fontWeight: "bold"
  },

  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
});
