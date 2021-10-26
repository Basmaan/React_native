import React from 'react';
import { FlatList, Text, View } from 'react-native';
import COLORS from '../../consts/colors';
import hotels from '../../consts/hotels';
import HotelCard from './HotelCard';
import TopHotels from './TopHotels';

function Hotel() {
    return (
        <View>
            <FlatList
                horizontal
                data={hotels}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingVertical: 30,
                    paddingLeft: 25,
                }}
                renderItem={({ item, index }) => <HotelCard hotels={item} index={index} />}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 30, paddingRight: 30 }}>
                <View><Text style={{color:'black', fontWeight: 'bold'}}>Top hotels</Text></View>
                <View><Text style={{color:COLORS.grey}}>Show all</Text></View>
            </View>
            <FlatList
                horizontal
                data={hotels}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingLeft: 20,
                    marginTop: 20,
                    paddingBottom: 30,
                }}
                renderItem={({ item, index }) => <TopHotels hotels={item} index={index} />}
            />
        </View>
    )
}

export default Hotel


