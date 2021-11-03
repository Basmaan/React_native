import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as Animatable from 'react-native-animatable';
import { styles } from "../styles/styles";

const initialValue = { email: "", password: "" }

function LoginScreen({ navigation }) {

  const [value, setValue] = useState(initialValue);

  const login = () => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: value.email,
        password: value.password
      })
    }

    const Api = fetch("https://reqres.in/api/login", options)
    return Api;
  }

  const handleSubmit = () => {
    const response = login();
    response.then(res => res.json()).then(data => {
      if (data.token) {
        setValue(initialValue);
        navigation.navigate('HomeScreen')
      }
      else {
        alert(data.error);
        setValue(initialValue);
      }
    })
    // alert("Email is " + value.email + "\n" + 'Password is ' + value.password);
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <Animatable.View style={styles.loginContainer} animation="fadeInUp" duration={500} easing="linear">
        <StatusBar style="auto" />
        <Image source={{ uri: 'https://t3.ftcdn.net/jpg/02/30/59/84/360_F_230598496_QqLc4bd0K2zmkVvUQDUBVBPy8y9ILhXc.jpg' }}
          style={{ width: 300, height: 300 }}
        />

        <View style={styles.loginInput}>
          <TextInput
            value={value.email}
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setValue({ ...value, email: text })}
          />
        </View>

        <View style={styles.loginInput}>
          <TextInput
            value={value.password}
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(text) => setValue({ ...value, password: text })}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity animation="fadeInUpBig" style={styles.loginBtn} onPress={handleSubmit}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </Animatable.View>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen


