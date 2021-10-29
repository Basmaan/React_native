import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import aminities from '../../consts/aminities';
import COLORS from '../../consts/colors';

var radio_props = [
    { label: 'Share', value: 0 },
    { label: 'Single', value: 1 },
];


function AminitiesSection() {

    const [state, setState] = useState(initial)

    const initial = { value: null }

    const renderItem = ({ item, index }) => (
        <View key={index} style={{ backgroundColor: COLORS.secondary, justifyContent: 'center', alignItems: 'center', margin: 5, height: 80, width: 80, borderRadius: 15 }}>
            <View style={{ paddingBottom: 5 }}>{item.icon}</View>
            <Text style={{ fontFamily: 'nunito' }}>{item.name}</Text>
        </View>
    );

    const options = [
        {
            key: 'pay',
            text: 'Most High Pay',
        },
        {
            key: 'performance',
            text: 'Most Perfomance',
        },
        {
            key: 'aToZ',
            text: 'A - Z',
        },
        {
            key: 'zToA',
            text: 'Z - A',
        },
    ];


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
            <Text style={{ fontSize: 20, fontFamily: "Nunito_800ExtraBold", marginBottom: 10, marginTop: 15 }}>Tenants</Text>
            {options.map((item) => {
                return (
                    <View key={item.key} style={styles.buttonContainer}>
                        <Text>{item.text}</Text>
                        <TouchableOpacity
                            style={styles.circle}
                            onPress={() => setState({ state: key })}
                        >
                            {state === item.key &&
                                <View style={styles.checkedCircle} />
                            }
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    )
}

export default AminitiesSection

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#794F9B',
    },
})