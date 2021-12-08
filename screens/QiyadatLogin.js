import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import qiyadatColors from '../consts/qiyadatColor'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const initial = { email: "", password: "" }

const QiyadatLogin = ({ navigation }) => {

    const [value, setValue] = useState(initial);

    const onSubmit = async () => {
        try {
            const response = await axios.post('https://10.200.2.116:4431/api/Account/Login', {
                email: value.email,
                password: value.password
            })
            await AsyncStorage.setItem(
                'userData', JSON.stringify(response)
            );
            navigation.navigate('ProfileScreen')
        } catch (error) {
            console.log("Something went wrong", error);
        }
    }

    return (
        <View style={{ marginVertical: 50, marginHorizontal: 30, flex: 1 }}>
            <Text style={{ fontFamily: 'Nunito_800ExtraBold', fontSize: 25, color: `${qiyadatColors.primary}`, marginVertical: 30 }}>Welcome to Qiyadat</Text>
            <TextInput
                style={{ height: 50, borderWidth: 1, padding: 10, borderColor: '#e7e7e7', borderRadius: 5 }}
                placeholder="Email"
                placeholderTextColor="#7a7f7e"
                value={value.email}
                onChangeText={(text) => setValue({ ...value, email: text })}
            />
            <View style={{ alignItems: 'flex-end', paddingVertical: 5 }}>
                <Text style={{ color: qiyadatColors.primary, fontFamily: 'nunito', fontWeight: 'bold' }}>Forgot email?</Text>
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
    )
}

export default QiyadatLogin
