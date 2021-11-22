import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import { View, Text, Dimensions, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import COLORS from '../consts/colors';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

const ProfileDetailScreen = ({ navigation }) => {
    return (
        <View>
            <ImageBackground
                source={{ uri: 'https://data.whicdn.com/images/316833156/original.jpg' }}
                resizeMode='cover'
                style={{ height: 0.5 * h }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 60, marginHorizontal: 20, alignItems: 'center' }}>
                    <View>
                        <Ionicons name="chevron-back" size={24} color={COLORS.white} onPress={navigation.goBack} />
                    </View>
                    <View>
                        <MaterialCommunityIcons name="filter-outline" size={24} color={COLORS.white} />
                    </View>
                </View>
                <View style={{ alignItems: 'center', alignSelf: 'center', marginTop: 0.1 * h }}>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 40 }}
                        source={{ uri: "https://media.istockphoto.com/photos/brown-eyed-woman-is-looking-tenderly-at-viewer-make-up-hairdressing-picture-id1280410981?b=1&k=20&m=1280410981&s=170667a&w=0&h=Q8wh4aBkJ1eBwKHIE0Mhszc8MVdrMxCweQdPr3ijnHI=" }}
                    />
                    <Text style={{ fontFamily: 'Nunito_800ExtraBold', paddingTop: 10, fontSize: 20, color: `${COLORS.white}` }}>Alexio Moreles</Text>
                    <Text style={{ color: `${COLORS.white}`, fontFamily: 'nunito' }}>128K Followers</Text>
                </View>
            </ImageBackground>
            <View style={{ marginTop: -50, backgroundColor: '#fff', borderRadius: 50, alignItems: 'center' }}>
                <Text style={{ marginTop: 30, fontFamily: 'Nunito_800ExtraBold', textTransform: 'uppercase', color: "#333" }}>Photos and videos</Text>
                <Text style={{ color: "#b2b2b2", fontFamily: 'nunito' }}>269 shots</Text>
                <View style={{ marginTop: 20, flexDirection: 'row' }}>
                    <Image
                        source={{ uri: "https://www.mymove.com/wp-content/uploads/2014/08/GettyImages-533463890-scaled.jpg" }}
                        style={{
                            height: 0.5 * h,
                            width: 0.4 * w,
                            borderTopLeftRadius: 40,
                            marginRight: 16,
                            borderBottomLeftRadius: 40,
                        }}
                    />
                    <View>
                        <Image

                            source={{ uri: 'https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?k=20&m=1165384568&s=612x612&w=0&h=CAnAr3uJtmkr0IQ2EPgm0IBoo8oCm-FEYEtyor8X_9I=' }}
                            style={{
                                borderTopRightRadius: 40,
                                height: 0.24 * h,
                                width: 0.4 * w,
                            }}
                        />
                        <Image
                            source={{uri:'https://www.scottishconstructionnow.com/uploads/Ann%20Nisbet%20Studio_Blackpark_David%20Barber_012.jpg'}}
                            style={{
                                marginTop: 16, borderBottomRightRadius: 40, height: 0.24 * h,
                                width: 0.4 * w,
                            }}
                        />
                    </View>
                </View>
            </View>

        </View>
    )
}

export default ProfileDetailScreen
