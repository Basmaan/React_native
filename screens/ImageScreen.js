import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, View } from 'react-native'

function ImageScreen() {
    return (
        <View>
            <StatusBar style="auto" />
            <Image source={{uri:'https://gifimage.net/wp-content/uploads/2018/11/hiker-animated-gif-9.gif'}}
            style={{width: "100%",height:750}}
            resizeMode={'contain'}
            />
        </View>
    )
}

export default ImageScreen
