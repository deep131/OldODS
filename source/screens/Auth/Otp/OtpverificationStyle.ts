import { StyleSheet } from "react-native";
import { 
    borderRadius, 
    colors, 
    fontFamily, 
    fontSize, 
    marginHorizontal, 
    responsiveHeight, 
    responsiveWidth, 
    spaceVertical } from "../../../styles/variables";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.white
    },

    otpnumber: {
        fontSize: fontSize.extraLarge0,
        fontFamily: fontFamily.bold,
        textAlign: 'center',
        top:responsiveHeight(0.5),
        height:responsiveHeight(8),
        color:colors.black
    },

    innertextview: {
        borderColor: colors.otpcolor,
        borderWidth: 1,
        borderRadius: borderRadius.semiLarge,
        top: responsiveHeight(26),
        alignItems: 'center',
        justifyContent: 'center',
        height: responsiveHeight(8),
        width: responsiveWidth(12),
        marginHorizontal: responsiveWidth(1)
    }, 

    textinputview: {
        flexDirection: 'row', 
        alignItems: 'center', 
        alignSelf: 'center', 
        justifyContent: 'center'
    },
    
    lowertextview: {
        flexDirection: 'row',
        marginTop:spaceVertical.normal,
        alignSelf:'center'
    },

    lowertext: {
        fontSize: fontSize.small, 
        fontFamily:fontFamily.semiBold,
        alignItems:'center',
        color:colors.black
    },

    lowertext2: {
        fontSize: fontSize.small, 
        color: '#05CE62',
        fontFamily:fontFamily.semiBold,
        textDecorationLine:'underline',
        textDecorationColor:colors.black
    },

    inputotp: {
        borderRadius: borderRadius.otpradius, 
        borderWidth: 20
    },

    img: {
        width: responsiveWidth(100),
        height: responsiveHeight(60),
    },

    OtpverificationText: {
        alignSelf:'center',
        fontFamily: fontFamily.bold,
        color: colors.black,
        fontSize: fontSize.medium,
    },

    headertext: {
        flexDirection: 'row',
        alignSelf:'center',
        width:responsiveWidth(100),
        justifyContent:'space-between',
        marginTop: marginHorizontal.small,
    },

    AuthenticationtText: {
        color: 'grey',
        fontSize: fontSize.small,
        fontFamily: fontFamily.regular,
        position: 'absolute',
        alignSelf: 'center',
        top: responsiveHeight(15),
    },

    otptextcontainer: {
        top: responsiveHeight(30),
        height: responsiveHeight(7),
        width: responsiveWidth(10),
        borderRadius: (8),
        borderWidth: 1,
        left: responsiveWidth(15),
        borderColor: '#D9D9D9'
    },
    
    phonenumberText: {
        color: colors.black,
        fontSize: fontSize.small,
        fontFamily: fontFamily.bold,
        alignSelf:'center',
        top: responsiveHeight(20),
    },

    field: {
        width: responsiveWidth(80),
        paddingTop: responsiveHeight(1),
        paddingBottom: responsiveHeight(1),
    },

    inputText: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOpacity: 1,
        elevation: 10,
        borderRadius: borderRadius.semiLarge,
        marginTop: spaceVertical.extraSmall
    },

    label: {
        color: colors.label,
        fontSize: fontSize.extraSmall,
        fontFamily: fontFamily.semiBold,
        marginTop: marginHorizontal.extraSmall
    },

    flag: {
        resizeMode: 'cover',
        height: responsiveHeight(2.5),
        width: responsiveWidth(5),
        borderRadius: borderRadius.circle,
        marginLeft: marginHorizontal.extraSmall,
        alignSelf: 'center',
        bottom: responsiveHeight(0.2)
    },

    flagView: {
        marginTop: marginHorizontal.extraSmall,
        height: responsiveHeight(4),
        width: responsiveWidth(11),
        borderColor: colors.lightGray,
    },

    box: {
        fontFamily: fontFamily.semiBold,
        fontSize: fontSize.extraSmall,
        color: colors.black,
        marginLeft: marginHorizontal.XXS,
        alignItems: 'center',
        justifyContent: 'center'
    },

    separator: {
        height: responsiveHeight(4),
        width: 2,
        alignSelf: 'center',
        backgroundColor: colors.separator,
        marginLeft: marginHorizontal.extraSmall,
    },

    icon: {
        fontSize: fontSize.large,
        color: colors.black,
        marginLeft:marginHorizontal.small
    },

    input: {
        fontFamily: fontFamily.regular,
        minWidth: responsiveWidth(80),
        fontSize: fontSize.extraSmall,
        color: colors.black,
        paddingVertical: 0,
    },
})

export { styles };