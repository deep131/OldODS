import { Platform, StyleSheet } from "react-native";
import { borderRadius, colors, fontFamily, fontSize, marginHorizontal, responsiveHeight, responsiveWidth, spaceVertical } from "../../styles/variables";

const styles = StyleSheet.create({

    headerView: {
        height: Platform.OS === 'ios' ? responsiveHeight(7) : responsiveHeight(8),
        width: '100%',
        marginTop: Platform.OS === 'ios' ? spaceVertical.extraSmall + 18 : 0,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: responsiveWidth(90),
        alignSelf: 'center',
        marginTop: marginHorizontal.small,
    },

    text: {
        color: colors.black,
        fontSize: fontSize.medium,
        fontFamily: fontFamily.bold,
        alignSelf:'center'
    },

    icon: {
        color: colors.secondary,
        fontSize: fontSize.large,
        backgroundColor:colors.HARD_WHITE,
        borderRadius: borderRadius.normal,
    },

    icon1: {
        fontSize: fontSize.large,
        borderRadius: borderRadius.normal,
    },

    backIcon: {
        color: colors.black,
        fontSize: fontSize.extraLarge0,
        borderRadius: borderRadius.normal,
    },

    notification: {
        width: responsiveWidth(1.5),
        height: responsiveHeight(0.75),
        borderRadius: borderRadius.normal,
        backgroundColor: colors.primary,
        zIndex: 1,
        position: 'absolute',
        marginLeft: marginHorizontal.small + 4,
        top : -2
        
    },
    cart: {
        width: responsiveWidth(1.5),
        height: responsiveHeight(0.75),
        borderRadius: borderRadius.normal,
        backgroundColor: colors.secondary,
        zIndex: 1,
        position: 'absolute',
        marginLeft: marginHorizontal.extraSmall + 10,    
    },

});

export { styles };
