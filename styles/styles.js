import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../consts/colors";

const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;

export const styles = StyleSheet.create({
    card: {
        height: 280,
        width: cardWidth,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        elevation: 5,
        marginRight: 25,
    },
    cardImage: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    priceTag: {
        height: 60,
        width: 80,
        backgroundColor: COLORS.primary,
        zIndex: 1,
        position: 'absolute',
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    cardDetail: {
        backgroundColor: COLORS.white,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 100,
        borderRadius: 15,
        padding: 15,
    },
    topHotelCard: {
        height: 150,
        width: 120,
        backgroundColor: COLORS.white,
        elevation: 5,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    topHotelCardImage: {
        height: 100,
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
})