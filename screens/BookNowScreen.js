import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native-animatable'
import AminitiesSection from './Components/AminitiesSection'

function BookNowScreen({navigation}) {
    return (
        <View>
           <AminitiesSection navigation={navigation}/>
        </View>
    )
}

export default BookNowScreen
