import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import COLORS from './colors';

export const WifiIcon = (<FontAwesome name="wifi" size={24} color={COLORS.primary} />);
export const Breakfast = (<MaterialIcons name="free-breakfast" size={24} color={COLORS.primary} />);
export const AirConditioner = (<MaterialCommunityIcons name="air-conditioner" size={24} color={COLORS.primary} />);
export const Gym = (<MaterialCommunityIcons name="dumbbell" size={24} color={COLORS.primary} />);
export const HotWater = (<Ionicons name="water" size={24} color={COLORS.primary} />);
export const Medkit = (<FontAwesome name="medkit" size={24} color={COLORS.primary} />);
export const Bar = (<MaterialIcons name="local-bar" size={24} color={COLORS.primary} />);
export const Currency = (<MaterialCommunityIcons name="currency-usd" size={24} color={COLORS.primary} />);
export const Laundry = (<MaterialIcons name="local-laundry-service" size={24} color={COLORS.primary} />);


const aminities = [
    { icon: WifiIcon, name: 'Wifi' },
    { icon: Breakfast, name: 'Breakfast' },
    { icon: AirConditioner, name: 'AC' },
    { icon: HotWater, name: 'Hot water' },
    { icon: Gym, name: 'Gym' },
    { icon: Medkit, name: 'Medkit' },
    { icon: Bar, name: 'Bar' },
    { icon: Currency, name: 'Currency' },
    { icon: Laundry, name: 'Laundry' },
];

export default aminities;