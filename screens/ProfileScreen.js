import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import { View, Text, Dimensions, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import COLORS from '../consts/colors';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

const ProfileScreen = ({ navigation }) => {

    const likes = [
        {
            title: 'Followers',
            number: '125',
        },
        {
            title: 'Following',
            number: '150',
        },
        {
            title: 'Likes',
            number: '321',
        },
    ]

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={{ uri: 'https://media.istockphoto.com/photos/young-brown-haired-woman-is-touching-softly-owne-hair-hair-care-picture-id1170764333?k=20&m=1170764333&s=612x612&w=0&h=M4oJPWuIq304P3RQ3bLm6qzupJPQvi61RuRRNHyrWr4=' }}
                style={{ height: 0.45 * h }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 60, marginHorizontal: 20, alignItems: 'center' }}>
                    <View>
                        <Ionicons name="chevron-back" size={24} color={COLORS.white} onPress={navigation.goBack} />
                    </View>
                    <View>
                        <MaterialCommunityIcons name="filter-outline" size={24} color={COLORS.white} />
                    </View>
                </View>
                <Text style={{ position: 'absolute', bottom: 20, color: `${COLORS.white}`, fontSize: 30, fontFamily: 'Audiowide_400Regular', textTransform: 'uppercase', alignSelf: "center" }}
                >
                    Ida Niska
                </Text>
            </ImageBackground>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 15 }}>
                {likes.map((data, index) => {
                    return (
                        <View key={index} style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Nunito_800ExtraBold', color: `${COLORS.primary}` }}>{data.number}</Text>
                            <Text style={{ fontFamily: 'Nunito_600SemiBold' }}>{data.title}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 15, marginVertical: 10, alignItems: 'center', backgroundColor: `${COLORS.secondary}`, borderRadius: 30, }}>
                <Text style={{ paddingLeft: 60, fontWeight: 'bold' }}>POPULAR</Text>
                <View style={{ backgroundColor: `${COLORS.primary}`, paddingHorizontal: 50, paddingVertical: 10, borderRadius: 30 }}>
                    <Text style={{ color: `${COLORS.white}`, fontWeight: 'bold' }}>RECENT</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    borderColor: `${COLORS.primary}`,
                    borderWidth: 1,
                    borderRadius: 30,
                    marginHorizontal: 15,
                    marginVertical: 10,
                    paddingVertical: 20,
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfileDetailScreen')}>
                        <View style={{ alignSelf: 'flex-end', flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ height: 40, width: 40, borderRadius: 20, marginRight: 10 }} resizeMode='cover' source={{ uri: 'https://images.assetsdelivery.com/compings_v2/sofiazhuravets/sofiazhuravets1807/sofiazhuravets180700013.jpg' }} />
                                <View>
                                    <Text style={{ fontFamily: 'Nunito_800ExtraBold', textTransform: 'uppercase', color: `${COLORS.primary}` }}>Ida Niska</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'nunito' }}>1 hour ago</Text>
                                </View>
                            </View>
                            <FontAwesome style={{ marginHorizontal: 70 }} name="angle-down" size={24} color={COLORS.primary} />
                        </View>
                        <Text style={{ fontSize: 13, fontFamily: 'Nunito_600SemiBold', textAlign: "center", paddingHorizontal: 20, paddingTop: 10 }}>We all deal with vulnerability, uncertainty, and failure. Some of us trust that if we move forward anyway, then we will figure it out. As I sit here on Thanksgiving, I’m thankful that I’m one of these people.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                                <Text style={{ paddingRight: 5 }}>100</Text>
                                <MaterialCommunityIcons name="message-outline" size={20} color={COLORS.primary} />
                            </View>
                            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                                <Text style={{ paddingRight: 5 }}>300</Text>
                                <AntDesign name="hearto" size={20} color={COLORS.primary} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{
                    backgroundColor: `${COLORS.secondary}`,
                    borderRadius: 30,
                    marginHorizontal: 15,
                    marginVertical: 10,
                    paddingVertical: 20,
                }}>
                    <TouchableOpacity>
                        <View style={{ alignSelf: 'flex-end', flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ height: 40, width: 40, borderRadius: 20, marginRight: 10 }} resizeMode='cover' source={{ uri: 'https://files.oyebesmartest.com/uploads/preview/indian-girl-model-photography-photoshoot-hd--(4)x2nnvj2keb.jpg' }} />
                                <View>
                                    <Text style={{ fontFamily: 'Nunito_800ExtraBold', textTransform: 'uppercase', color: `${COLORS.primary}` }}>Tedy</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'nunito' }}>2 hour ago</Text>
                                </View>
                            </View>
                            <FontAwesome style={{ marginHorizontal: 70 }} name="angle-down" size={24} color={COLORS.primary} />
                        </View>
                        <Text style={{ fontSize: 13, fontFamily: 'Nunito_600SemiBold', textAlign: "center", paddingHorizontal: 20, paddingTop: 10 }}>We all deal with vulnerability, uncertainty, and failure. Some of us trust that if we move forward anyway, then we will figure it out. As I sit here on Thanksgiving, I’m thankful that I’m one of these people.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                                <Text style={{ paddingRight: 5 }}>182</Text>
                                <MaterialCommunityIcons name="message-outline" size={20} color={COLORS.primary} />
                            </View>
                            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                                <Text style={{ paddingRight: 5 }}>470</Text>
                                <AntDesign name="hearto" size={20} color={COLORS.primary} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default ProfileScreen