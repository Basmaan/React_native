import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import RadioForm from 'react-native-simple-radio-button';
import aminities from '../../consts/aminities';
import COLORS from '../../consts/colors';
import { FontAwesome, Octicons } from '@expo/vector-icons';


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
                keyExtractor={(item, index) => index.toString()}
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
            <Text style={{ fontSize: 20, fontFamily: "Nunito_800ExtraBold", marginBottom: 10, marginTop: 15 }}>Screens</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                <TouchableOpacity onPress={() => navigation.navigate('TaskListScreen')}>
                    <View style={{ backgroundColor: COLORS.secondary, height: 100, width: 150, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
                        <View style={{ paddingBottom: 5 }}>
                            <FontAwesome name="tasks" size={24} color={COLORS.primary} />
                        </View>
                        <Text style={{ fontFamily: 'nunito' }}>TO DO APP</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('JobSearchScreen')}>
                    <View style={{ backgroundColor: COLORS.secondary, height: 100, width: 150, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
                        <View style={{ paddingBottom: 5 }}>
                            <FontAwesome name="briefcase" size={24} color={COLORS.primary} />
                        </View>
                        <Text>JOB APP</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AminitiesSection

