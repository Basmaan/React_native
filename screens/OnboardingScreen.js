import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import COLORS from '../consts/colors';

export default function OnboardingScreen({ navigation }) {

    const DotButton = ({ selected }) => {
        let backgroundColor
        let width
        backgroundColor = selected ? '#f23b52' : '#ccc';
        width = selected ? 10 : 5;
        return (
            <View style={{ width, height: 5, marginHorizontal: 3, backgroundColor, borderRadius: 5 }} />
        );
    }

    const OnboardingList = [
        {
            backgroundColor: '#fff',
            image: <Image
                resizeMode='cover'
                style={{ width: 400, height: 400 }}
                source={{ uri: 'https://i.pinimg.com/564x/41/96/6b/41966bc41b18051e80398781bed49f33.jpg' }} />,
            title: 'Location',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            backgroundColor: '#fff',
            image: <Image
                resizeMode='cover'
                style={{ width: 400, height: 400 }}
                source={{ uri: 'https://i.pinimg.com/564x/8c/11/4e/8c114ef2759b895083f4cd2886deb57f.jpg' }} />,
            title: 'Get routes',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            backgroundColor: '#fff',
            image: <Image
                resizeMode='cover'
                style={{ width: 400, height: 400 }}
                source={{ uri: 'https://i.pinimg.com/564x/d1/c6/fb/d1c6fb30a9792c3bafe99ce1a5ce1905.jpg' }} />,
            title: 'Departure',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            backgroundColor: '#fff',
            image: <Image
                resizeMode='cover'
                style={{ width: 400, height: 400 }}
                source={{ uri: 'https://i.pinimg.com/564x/14/64/c9/1464c98b31ac730817d99b812a349699.jpg' }} />,
            title: 'Easy booking',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            backgroundColor: '#fff',
            image: <Image
                resizeMode='cover'
                style={{ width: 400, height: 400 }}
                source={{ uri: 'https://i.pinimg.com/564x/46/20/64/462064d974dc2bd74f10920dc944c0d2.jpg' }} />,
            title: 'Travel',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            backgroundColor: '#fff',
            image: <Image
                resizeMode='cover'
                style={{ width: 400, height: 400 }}
                source={{ uri: 'https://i.pinimg.com/564x/70/3d/7f/703d7f3da4d8370ca137fc7292659b8e.jpg' }} />,
            title: 'Chat',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            backgroundColor: '#fff',
            image: <Image
                resizeMode='cover'
                style={{ width: 400, height: 400 }}
                source={{ uri: 'https://i.pinimg.com/564x/fd/ed/f8/fdedf880e4e93aa2eb3c3ba5659c948e.jpg' }} />,
            title: 'World tour',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            backgroundColor: '#fff',
            image: <Image
                resizeMode='cover'
                style={{ width: 400, height: 400 }}
                source={{ uri: 'https://i.pinimg.com/564x/07/11/0d/07110d49cfe756169a985a4c7ff379a9.jpg' }} />,
            title: 'Book your cab',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            backgroundColor: '#fff',
            image: <Image
                resizeMode='cover'
                style={{ width: 400, height: 400 }}
                source={{ uri: 'https://i.pinimg.com/564x/5b/8d/d5/5b8dd57f921dad885467365abf4e2969.jpg' }} />,
            title: 'Easy payment',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            backgroundColor: '#fff',
            image: <Image
                resizeMode='cover'
                style={{ width: 400, height: 400 }}
                source={{ uri: 'https://i.pinimg.com/564x/9a/62/b7/9a62b77b6c815dd1274a32f0742a5c00.jpg' }} />,
            title: 'Card / UPI payment',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ]

    return (
        <View style={{ flex: 1 }}>
            <Onboarding
                DotComponent={DotButton}
                onDone={() => navigation.navigate('Login')}
                onSkip={() => navigation.navigate('Login')}
                titleStyles={styles.titleStyle}
                subTitleStyles={styles.subtitleStyle}
                controlStatusBar={false}
                bottomBarColor="#fff"
                pages={OnboardingList}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontFamily: 'Nunito_600SemiBold',
        color: COLORS.primary
    },
    subtitleStyle: {
        fontFamily: 'nunito'
    },
})
