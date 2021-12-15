import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native'
import qiyadatColors from '../consts/qiyadatColor'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const initial = { username: "", password: "" }
const image = { uri: "https://reactjs.org/logo-og.png" };

const QiyadatLogin = ({ navigation }) => {

    const [value, setValue] = useState(initial);

    const onSubmit = async () => {
        try {
            const response = await axios.post('https://10.200.2.116:4431/api/Account/Login', {
                username: value.username,
                password: value.password
            })
            if (response && response.data.token) {
                let user = {
                    token: response.data.token,
                    expireMinutes: response.data.expireMinutes
                }
                await AsyncStorage.setItem(
                    'user', JSON.stringify(user)
                );
                navigation.navigate('ProfileScreen')
            } else {
                alert('Email or password is incorrect')
            }

        } catch (error) {
            console.log("Something went wrong", error);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../assets/loginBG_page-0001.jpg')} resizeMode='cover'>
                <View style={{ marginVertical: 70, marginHorizontal: 20 }}>
                    <Image source={require('../assets/logo_page-0001.png')} style={{ height: 80, width: 130 }} />
                    <Text style={{ fontFamily: 'Nunito_800ExtraBold', fontSize: 25, color: `${qiyadatColors.primary}`, marginVertical: 30,marginTop:50 }}>Welcome to Qiyadat</Text>
                <TextInput
                    style={{ height: 50, borderWidth: 1, padding: 10, borderColor: '#e7e7e7', borderRadius: 5 }}
                    placeholder="username"
                    placeholderTextColor="#7a7f7e"
                    value={value.username}
                    onChangeText={(text) => setValue({ ...value, username: text })}
                />
                <View style={{ alignItems: 'flex-end', paddingVertical: 5 }}>
                    <Text style={{ color: qiyadatColors.primary, fontFamily: 'nunito', fontWeight: 'bold' }}>Forgot username?</Text>
                </View>
                <View>
                    <TextInput
                        style={{ height: 50, borderWidth: 1, padding: 10, borderColor: '#e7e7e7', borderRadius: 5, marginTop: 20 }}
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="#7a7f7e"
                        value={value.password}
                        onChangeText={(text) => setValue({ ...value, password: text })}
                    />
                </View>
                <View style={{ alignItems: 'flex-end', paddingVertical: 5 }}>
                    <Text style={{ color: qiyadatColors.primary, fontFamily: 'nunito', fontWeight: 'bold' }}>Forgot password?</Text>
                </View>
                <TouchableOpacity onPress={onSubmit} style={{ backgroundColor: `${qiyadatColors.secondary}`, marginVertical: 20, padding: 15, alignItems: 'center', borderRadius: 50 }}>
                    <Text style={{ color: qiyadatColors.white, fontFamily: 'Nunito_800ExtraBold', fontSize: 15 }}>SIGN IN</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                    <Text style={{ color: '#333', fontFamily: 'nunito' }}>New member? </Text>
                    <Text style={{ color: qiyadatColors.primary, fontFamily: 'Nunito_600SemiBold' }}> SIGN UP</Text>
                </View>
                </View>
                
            </ImageBackground>
        </View>
    )
}

export default QiyadatLogin
