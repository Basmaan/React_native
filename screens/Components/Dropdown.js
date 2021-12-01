import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { View, Text, CheckBox, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import COLORS from '../../consts/colors';

const Dropdown = () => {

    const countriesData = [
        { id: '1', name: 'India', isSelected: false },
        { id: '2', name: 'Europe', isSelected: false },
        { id: '3', name: 'England', isSelected: false },
        { id: '4', name: 'Switzerland', isSelected: false },
        { id: '5', name: 'Singapore', isSelected: false },
    ]

    const [countries, setCountries] = useState(countriesData);
    const [dropdown, setDropdown] = useState(false);
    const [submit, setSubmit] = useState(false);
    const InputFocus = () => setDropdown(true)
    const InputUnfocus = () => Keyboard.dismiss()
    const onSubmit = () => setSubmit(true)
    const onSave = () => setDropdown(false)

    const handleCountry = (val, item) => {
        setSubmit(false)
        setCountries(prevState => {
            return [...prevState.map(country => {
                if (country.id === item.id) {
                    return { ...country, isSelected: val }

                } else {
                    return { ...country }
                }
            })]
        })
    }

    const onDeleteCountry = (c) => {
        setCountries(prevState => {
            return [...prevState.map(country => {
                if (country.id === c.id) {
                    return { ...country, isSelected: false }
                } else {
                    return { ...country }
                }
            })]
        })
    }

    return (

        <View style={{ flex: 1, }}>
            <View style={{ marginHorizontal: 20, marginTop: 70, marginBottom: 30 }}>
                <TextInput
                    ref={InputUnfocus}
                    placeholder="Search"
                    style={{ fontSize: 15, paddingLeft: 10, borderColor: `${COLORS.primary}`, borderWidth: 1, height: 50, borderRadius: 20 }}
                    onFocus={InputFocus}
                />
                {dropdown &&
                    <View>
                        <View>
                            {countries.map((list, index) => {
                                return (
                                    <View key={index} style={{ flexDirection: "row" }}>
                                        <CheckBox
                                            onValueChange={(val) => handleCountry(val, list)}
                                            value={list.isSelected}
                                            style={{ alignSelf: "center" }}
                                            tintColors={{ true: `${COLORS.primary}`, false: 'black' }}
                                        />
                                        <Text style={{ margin: 8 }}>{list.name}</Text>
                                    </View>
                                )
                            })}
                        </View>
                        <TouchableOpacity
                            style={{ alignItems: 'center', marginTop: 15, marginBottom: 15 }}
                            onPress={onSave}
                        >
                            <Text style={{ color: COLORS.white, paddingVertical: 10, paddingHorizontal: 10, backgroundColor: `${COLORS.primary}`, borderRadius: 10, }}>
                                SAVE
                            </Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 20, }}>
                {countries.map(country => {
                    return country.isSelected ? <View key={country.id} style={{ alignItems: 'center', marginVertical: 5, marginRight: 5 }}>
                        <View style={{ flexDirection: 'row', backgroundColor: `${COLORS.secondary}`, padding: 10, justifyContent: 'center', alignItems: 'center', borderColor: `${COLORS.primary}`, borderWidth: 1, borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center' }}>{country.name}</Text>
                            <MaterialIcons onPress={() => onDeleteCountry(country)} name="cancel" size={24} color={COLORS.primary} style={{ marginLeft: 10 }} />
                        </View>
                    </View> : <View></View>
                })}
            </View>

            <TouchableOpacity onPress={onSubmit}>
                <View style={{
                    height: 55,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: `${COLORS.primary}`,
                    marginHorizontal: 20,
                    marginTop: 15,
                    marginBottom: 15,
                    borderRadius: 10,
                }}>
                    <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
                        SUBMIT
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={{ marginHorizontal: 20 }}>
                {submit && countries.map(country => {
                    return (
                        country.isSelected ?
                            <View key={country.id}>
                                <Text>{country.name}</Text>
                            </View>
                            : <View></View>
                    )
                })}
            </View>
        </View >
    )
}

export default Dropdown
