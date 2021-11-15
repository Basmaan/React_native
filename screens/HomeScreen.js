import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
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
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
                        <Text style={{fontWeight: 'bold',marginHorizontal:30 }}>Details</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default HomeScreen

