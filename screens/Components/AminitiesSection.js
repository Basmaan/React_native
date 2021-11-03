import React from 'react'
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import RadioForm from 'react-native-simple-radio-button';
import aminities from '../../consts/aminities';
import COLORS from '../../consts/colors';
import { styles } from '../../styles/styles';

var radio_props = [
    { label: 'Share', value: 0 },
    { label: 'Single', value: 1 },
];


function AminitiesSection({ navigation }) {

    const renderItem = ({ item, index }) => (
        <View key={index} style={{ backgroundColor: COLORS.secondary, justifyContent: 'center', alignItems: 'center', margin: 5, height: 80, width: 80, borderRadius: 15 }}>
            <View style={{ paddingBottom: 5 }}>{item.icon}</View>
            <Text style={{ fontFamily: 'nunito' }}>{item.name}</Text>
        </View>
    );

    return (
      
            <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 20, fontFamily: "Nunito_800ExtraBold", marginBottom: 10 }}>Aminities</Text>
                <FlatList
                    horizontal
                    data={aminities}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={{ fontSize: 20, fontFamily: "Nunito_800ExtraBold", marginBottom: 10, marginTop: 15 }}>Room Type</Text>
                <View>
                    <RadioForm
                        style={{ marginTop: 5 }}
                        radio_props={radio_props}
                        formHorizontal={true}
                        labelHorizontal={true}
                        buttonColor={'#333'}
                        animation={false}
                        selectedButtonColor={COLORS.primary}
                        selectedLabelColor={COLORS.primary}
                        buttonSize={10}
                        labelStyle={{ fontSize: 17, paddingHorizontal: 15, fontFamily: 'nunito', }}
                        onPress={() => { }}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('GlassmorphismScreen')}>
                    <View>
                        <Text style={{ color: COLORS.grey, fontSize: 15 }}>
                            Glassmorphism
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
    )
}

export default AminitiesSection

