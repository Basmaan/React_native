import { Feather } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import COLORS from '../../consts/colors'

function Input() {
    return (
        <View style={styles.inputContainer}>
            <Feather name="search" size={30} style={{ marginLeft: 20 }} />
            <TextInput
                placeholder="Search"
                style={{ fontSize: 20, paddingLeft: 10 }}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        height: 50,
        marginTop: 30,
        backgroundColor: COLORS.light,
        flexDirection: 'row',
        marginLeft: 20,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        alignItems: 'center',
    }
})
