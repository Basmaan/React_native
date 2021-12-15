import React, { useRef, useState, useEffect } from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import data from '../consts/OnboardingData';
import { COLORS, SIZES } from '../consts/OnboardingTheme';
import { AntDesign } from '@expo/vector-icons';


const CustomOnboardingScreen = () => {
    const flatlistRef = useRef();
    const [currentPage, setCurrentPage] = useState(0);
    const [viewableItems, setViewableItems] = useState([])

    const onViewableItemsChanged = ({ viewableItems, changed }) => {
        console.log("Visible items are", viewableItems);
        console.log("Changed in this iteration", changed);
    }


    const renderTopSection = () => {
        return (
            <SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.base * 2
                }}>
                    <TouchableOpacity
                        style={{
                            padding: SIZES.base
                        }}>
                        <AntDesign name="arrowleft" style={{
                            fontSize: 25,
                            color: COLORS.black,
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={{
                            fontSize: 18,
                            color: COLORS.black,
                        }}>Skip</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        )
    }

    const renderBottomSection = () => {
        return (
            <SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: SIZES.base * 2,
                    paddingVertical: SIZES.base * 2
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {
                            data.map((_, index) => (
                                <View
                                    key={index}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: 5,
                                        backgroundColor: COLORS.primary,
                                        marginRight: 8
                                    }} />
                            ))
                        }
                    </View>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: COLORS.primary
                        }}
                        activeOpacity={0.8}
                    >
                        <AntDesign name="arrowright"
                            style={{ fontSize: 18, color: COLORS.white, opacity: 0.3 }} />
                        <AntDesign
                            name="arrowright"
                            style={{ fontSize: 25, color: COLORS.white, marginLeft: -15 }}
                        />
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={{
                        paddingHorizontal: SIZES.base * 2,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: COLORS.primary,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: COLORS.white,
                            fontSize: 18,
                            marginLeft: SIZES.base
                        }}>Get Started</Text>
                        <AntDesign name="arrowright"
                            style={{ fontSize: 18, color: COLORS.white, opacity: 0.3, marginLeft: SIZES.base }} />
                        <AntDesign
                            name="arrowright"
                            style={{ fontSize: 25, color: COLORS.white, marginLeft: -15 }}
                        />
                    </TouchableOpacity> */}

                </View>
            </SafeAreaView>
        )
    }

    const renderFlatlistItem = ({ item }) => {
        return (
            <View style={{
                width: SIZES.width,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    alignItems: 'center',
                    marginVertical: SIZES.base * 2
                }}>
                    <ImageBackground
                        source={item.img}
                        style={{ width: 300, height: 300, resizeMode: 'contains' }}
                    />
                </View>
                <View style={{ paddingHorizontal: SIZES.base * 4, marginVertical: SIZES.base * 4 }}>
                    <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>
                        {item.title}
                    </Text>
                    <Text style={{
                        fontSize: 18,
                        opacity: 0.4,
                        textAlign: 'center',
                        marginTop: 15,
                        lineHeight: 28
                    }}>
                        {item.description}
                    </Text>
                </View>

            </View>
        )
    }



    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.background,
            justifyContent: 'center'
        }}>

            {/* TOP SECTION - Back & Skip button */}
            {renderTopSection()}

            {/* FLATLIST with pages */}
            <FlatList
                data={data}
                pagingEnabled={true} 
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item._id}
                renderItem={renderFlatlistItem}
                onViewableItemsChanged={onViewableItemsChanged}
                
            />

            {renderBottomSection()}
            {/* BOTTOM SECTION - pagination & next or GetStarted button */}

        </View>
    )
}

export default CustomOnboardingScreen
