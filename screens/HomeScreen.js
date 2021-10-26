import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import COLORS from '../consts/colors'
import Header from './Components/Header'
import Hotel from './Components/Hotel'
import Input from './Components/Input'

function HomeScreen({ navigation }) {
    return (
        <>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Input />
                <Hotel />
                <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
                    <Text style={{fontWeight: 'bold'}}>Details</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default HomeScreen


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
  
    loginText: {
      color: "white",
      fontWeight: "bold"
    },
   
    loginBtn: {
      width: "50%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.primary,
    },
  });