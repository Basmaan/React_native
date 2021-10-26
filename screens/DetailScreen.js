import React from 'react'
import { ImageBackground, View, StatusBar, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/styles'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';


function DetailScreen({ navigation }) {
    return (
        <View>
            <StatusBar
                barStyle="light-content"
                translucent={true}
                backgroundColor="transparent"
            />
            <ImageBackground source={{ uri: 'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg' }} style={styles.headerImage}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 60, paddingLeft: 20, paddingRight: 20 }}>
                    <View>
                        <Ionicons name="chevron-back" size={28} color={COLORS.white} onPress={navigation.goBack} />
                    </View>
                    <View>
                        <FontAwesome name="bookmark-o" size={28} color={COLORS.white} />
                    </View>
                </View>
            </ImageBackground>
            <View>
                <View style={styles.iconContainer}>
                    <Icon name="place" color={COLORS.white} size={28} />
                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Silver Hotel & SPA</Text>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: '400',
                            color: COLORS.grey,
                            marginTop: 5,
                        }}>
                        Green street,Central district
                    </Text>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="star" size={20} color={COLORS.orange} />
                                <Icon name="star" size={20} color={COLORS.orange} />
                                <Icon name="star" size={20} color={COLORS.orange} />
                                <Icon name="star" size={20} color={COLORS.orange} />
                                <Icon name="star" size={20} color={COLORS.grey} />
                            </View>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 5 }}>
                                4.0
                            </Text>
                        </View>
                        <Text style={{ fontSize: 13, color: COLORS.grey }}>365reviews</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ lineHeight: 20, color: COLORS.grey }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingLeft: 20,
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Price per night
                    </Text>
                    <View style={styles.price}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: COLORS.grey,
                                marginLeft: 5,
                            }}>
                            $ 120
                        </Text>
                        <Text
                            style={{
                                fontSize: 13,
                                fontWeight: 'bold',
                                color: COLORS.grey,
                                marginLeft: 5,
                            }}>
                            + breakfast
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ImageScreen')}>
                    <View style={styles.bookNowbtn}>
                        <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
                            Book Now
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DetailScreen