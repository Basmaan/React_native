import React from 'react'
import { View, Text } from 'react-native'
import COLORS from '../../consts/colors'

export default function Task({task}) {
    return (
        <View style={{ backgroundColor: COLORS.secondary, marginHorizontal: 20, borderRadius: 10, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <View style={{ backgroundColor: COLORS.primary, height: 20, width: 20, borderRadius: 5, marginRight: 10 }}></View>
                <Text style={{ maxWidth: '85%' }}>{task}</Text>
            </View>
            <View style={{ borderColor: COLORS.primary, height: 12, width: 12, borderRadius: 5, borderWidth: 2 }}></View>
        </View>
    )
}
