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
    bookNowbtn: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 10,
    },

    price: {
        height: 50,
        alignItems: 'center',
        marginLeft: 40,
        paddingLeft: 20,
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
    },
    iconContainer: {
        position: 'absolute',
        height: 60,
        width: 60,
        backgroundColor: COLORS.primary,
        top: -30,
        right: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerImage: {
        height: 380,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        overflow: 'hidden',
    },
    loginContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    loginInput: {
        backgroundColor: "#FFEBEE",
        borderRadius: 30,
        width: "70%",
        height: 50,
        marginBottom: 20,
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
        fontFamily:"Nunito_800ExtraBold"
    },

    loginText: {
        color: "white",
        fontFamily: "Nunito_800ExtraBold",
    },

    loginBtn: {
        width: "70%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
    }
})