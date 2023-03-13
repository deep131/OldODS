import { StyleSheet } from "react-native";
import { borderRadius, colors, fontFamily, fontSize, marginHorizontal, responsiveHeight, responsiveWidth, spaceVertical } from "../../styles/variables";

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.skyblue,
      borderTopRightRadius: borderRadius.medium,
      borderBottomRightRadius: borderRadius.medium,
      borderBottomLeftRadius: borderRadius.medium,
      // marginTop: spaceVertical.small,
      width:responsiveWidth(90),
      alignSelf:'center',
      marginBottom:responsiveHeight(3)
    },
    
    text: {
      alignSelf: 'center',
      fontFamily: fontFamily.semiBold,
      fontSize: fontSize.normal,
      color: colors.locationtext,
      marginVertical: spaceVertical.small,
    },
  
    imagestyle: {
      height: responsiveHeight(4),
      width: responsiveWidth(8),
      alignSelf: 'center',
      marginLeft: marginHorizontal.smallest
    },
  
    plus: {
      height: responsiveWidth(1.5),
      width: responsiveWidth(1.5),
      marginHorizontal:marginHorizontal.extraSmall
    },

    lastCompImage:{
      height: responsiveWidth(6),
      width: responsiveWidth(6),
    },
  
    innertext: {
      alignSelf: 'center',
      fontFamily: fontFamily.medium,
      color: colors.locationtext,
      fontSize: fontSize.small
    },

    countText:{
        alignItems:'center',
        justifyContent:'center',
        color:colors.black,
        marginHorizontal:marginHorizontal.toosmall,
        fontSize:fontSize.normal
    },
    
    itemview: {
      height: responsiveHeight(12),
      width: responsiveWidth(42),
      backgroundColor: colors.white,
      borderRadius: borderRadius.semiLarge,
      marginLeft:responsiveWidth(2),
      marginTop:responsiveHeight(1)
    },
  });

export { styles };
