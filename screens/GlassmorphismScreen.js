
import React from 'react'
import {ImageBackground, Text, View } from 'react-native'

function GlassmorphismScreen() {

    const img = { uri: 'https://external-preview.redd.it/1gAdZ4KyM_PuuSyzvFcgSbrb5GWGkBStvhnOmsCL1zc.jpg?auto=webp&s=e7eeaca044a2eadd6854fface767c3a64d9e2d8f' }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={img} resizeMode='cover' style={{ justifyContent: 'center', flex: 1 }}>
                <View style={{ width: 350, height: 500, alignSelf: 'center', borderRadius: 30 }}>
                    <ImageBackground
                        source={{ uri: "https://pbs.twimg.com/profile_images/664177544292401152/zTQ6Q_EF.jpg" }}
                        style={{ width: "100%", flex: 1, borderRadius: 30 }}
                        blurRadius={2}
                        resizeMode="cover"
                        borderRadius={30}
                    >
                        <Text style={{ textAlign: 'center' }}>
                            <Text style={{ color: "black", fontSize: 50, fontFamily: 'shrikhand', }}>GOLF</Text>
                        </Text>
                    </ImageBackground>
                </View>
            </ImageBackground>
        </View>
    )
}

export default GlassmorphismScreen
