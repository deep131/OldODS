import { StyleSheet } from "react-native";
import { borderRadius, colors, fontFamily, fontSize, marginHorizontal, responsiveHeight, responsiveWidth, spaceVertical } from "../../../styles/variables";

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:colors.white
    },
    img:{
        width:responsiveWidth(100),
        height:responsiveHeight(40)
    },
    welcomeText:{
        position:'absolute',
        top:responsiveHeight(10),
        left:responsiveWidth(10),
        fontFamily:fontFamily.bold,
        color:colors.black,
        fontSize:fontSize.Xlarge,
    },
    getStartedText:{
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: fontSize.semiLarge,
        fontFamily:fontFamily.regular,
        position:'absolute',
        left:responsiveWidth(10),
        top:responsiveHeight(20),
    },
    field: {
        width:responsiveWidth(80),
        paddingTop: responsiveHeight(1),
        paddingBottom: responsiveHeight(1),
    },
    inputText:{
        flexDirection: 'row', 
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOpacity: 1,
        elevation:10,
        borderRadius: borderRadius.semiLarge,
        marginTop:spaceVertical.extraSmall
    },

    label: {
        color: colors.label,
        fontSize: fontSize.small,
        fontFamily: fontFamily.semiBold,
        marginTop: marginHorizontal.extraSmall
    },
    flag: {
        resizeMode:'cover',
        height:responsiveHeight(3),
        width:responsiveWidth(5),
        borderRadius:borderRadius.circle,
        marginLeft:marginHorizontal.extraSmall,
        top:responsiveHeight(1)
    },

    flagView : {
        marginTop:marginHorizontal.extraSmall,
        height:responsiveHeight(4),
        width:responsiveWidth(11),
        borderColor : colors.lightGray,
        backgroundColor: '#ecf0f1',
    },
    box: {
        fontFamily: fontFamily.semiBold,
        fontSize: fontSize.extraSmall,
        color: colors.black,
        marginLeft:marginHorizontal.extraSmall,
    },
    separator : {
        height : responsiveHeight(4),
        width:2,
        alignSelf:'center',
        backgroundColor:colors.separator,
        marginLeft:marginHorizontal.extraSmall,
    },
    icon: {
        fontSize:fontSize.small,
        color:colors.black,
        alignSelf:'center',
        bottom:responsiveHeight(0.2)
    },
    input: {
        fontFamily: fontFamily.regular,
        minWidth: responsiveWidth(80),
        fontSize: fontSize.small,
        color: colors.black,
        paddingVertical: 0,
    },
    Error: {
        color: colors.red,
        textAlign: 'left',
        marginLeft: spaceVertical.small,
        fontFamily: fontFamily.regular,
        fontSize: fontSize.extraSmall,
        marginBottom: marginHorizontal.extraSmall
    },
})

export { styles };