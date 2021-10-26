import React from 'react'
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { styles } from '../../styles/styles';
import COLORS from '../../consts/colors';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

function HotelCard({ hotels, navigation }) {

    const [addBookmark, setAddBookmark] = useState(false);

    const Bookmark = () => setAddBookmark(!addBookmark);

    return (
        <View style={styles.card}>
            <View style={styles.priceTag}>
                <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 18 }}>${hotels.price}</Text>
            </View>
            <Image source={hotels.image} style={styles.cardImage} />
            <View style={styles.cardDetail}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{hotels.name}</Text>
                        <Text style={{ fontSize: 12, color: COLORS.grey }}>{hotels.location}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => Bookmark()}>
                            {addBookmark ? <FontAwesome name="bookmark" size={26} color={COLORS.primary} /> : <FontAwesome name="bookmark-o" size={26} color={COLORS.primary} />}
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name="star" size={15} color={COLORS.orange} />
                        <Entypo name="star" size={15} color={COLORS.orange} />
                        <Entypo name="star" size={15} color={COLORS.orange} />
                        <Entypo name="star" size={15} color={COLORS.orange} />
                        <Entypo name="star" size={15} color={COLORS.grey} />
                        <Text style={{ paddingLeft: 8 }}>4.0</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 12, color: COLORS.grey }}>325 reviews</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HotelCard
