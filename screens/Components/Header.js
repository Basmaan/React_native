import { FontAwesome5 } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../../consts/colors'

function Header() {
    return (
        <View style={styles.header}>  
            <View>
                <Text style={{ fontSize: 30, fontFamily:"Nunito_800ExtraBold"}}>FIND YOUR HOTEL</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 30, fontFamily:"Nunito_800ExtraBold"}}>IN </Text>
                    <Text style={{ fontSize: 30, fontFamily:"Audiowide_400Regular", color: COLORS.primary }}>PARIS</Text>
                </View>
            </View>  
            <FontAwesome5 style={{padding: 10}} name="user" size={28} color={COLORS.grey} />
        </View>
    )
}

export default Header  

const styles = StyleSheet.create({
    header: {
        padding: 10,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
})