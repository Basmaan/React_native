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

function LoginScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <Animatable.View style={styles.loginContainer} animation="fadeInUp" duration={500} easing="linear">
        <StatusBar style="auto" />
        <Image source={{ uri: 'https://t3.ftcdn.net/jpg/02/30/59/84/360_F_230598496_QqLc4bd0K2zmkVvUQDUBVBPy8y9ILhXc.jpg' }}
          style={{ width: 300, height: 300 }}
        />

        <View style={styles.loginInput}>
          <TextInput
            style={styles.TextInput}  
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.loginInput}>
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


 