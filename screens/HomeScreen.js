import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles/styles'
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

