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
      height: responsiveWidth(6),
      width: responsiveWidth(6),
    //   alignSelf: 'center'
    },
    
    minus: {
      position: 'absolute',
      height: responsiveWidth(5),
      width: responsiveWidth(5),
      alignSelf: 'center',
      marginLeft: marginHorizontal.XXL
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
      flexDirection: 'row',
      height: responsiveHeight(10),
      width: responsiveWidth(42),
      backgroundColor: colors.white,
      borderRadius: borderRadius.semiLarge,
      marginLeft:responsiveWidth(2),
      marginBottom:spaceVertical.extraSmall
    },
  });

export { styles };
