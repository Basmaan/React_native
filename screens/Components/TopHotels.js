import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { Image, Text, View } from 'react-native'
import COLORS from '../../consts/colors'
import { styles } from '../../styles/styles'

function TopHotels({hotels}) {
    return (
        <View style={styles.topHotelCard}>
            <View
                style={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    zIndex: 1,
                    flexDirection: 'row',
                }}>
                <Entypo name="star" size={15} color={COLORS.orange} />
                <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 15 }}>
                    5.0
                </Text>
            </View>
            <Image style={styles.topHotelCardImage} source={hotels.image} />
            <View style={{ paddingVertical: 5, paddingHorizontal: 10, marginTop: 5 }}>
                <Text style={{ fontSize: 11, fontWeight: 'bold' }}>{hotels.name}</Text>
                <Text style={{ fontSize: 7, fontWeight: 'bold', color: COLORS.grey }}>
                    {hotels.location}
                </Text>
            </View>
        </View>
    )
}

export default TopHotels
