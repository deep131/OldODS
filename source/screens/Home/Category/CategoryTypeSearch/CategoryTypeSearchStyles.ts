import { StyleSheet } from 'react-native';

import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical
} from '../../../../styles/variables';

const styles = StyleSheet.create({
  searchicon: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    marginLeft: marginHorizontal.extraSmall,
  },

  verticleLine: {
    height: responsiveHeight(3),
    width: responsiveWidth(0.2),
    backgroundColor: colors.gray10,
  },

  searchbarview: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderWidth: 2,
    width: responsiveWidth(90),
    borderColor: colors.bordercolor,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.XLarge,
    marginTop: spaceVertical.small,
    position: 'absolute',
  },

  search: {
    height: responsiveHeight(6),
    width: responsiveWidth(75),
    paddingStart:20,
    fontFamily: fontFamily.medium,
    alignSelf:'center'
  },

  categoryselectview: {
    flexDirection: 'row',
    marginTop: spaceVertical.extraLarge,
    justifyContent: 'space-evenly',  
  },

  topbtnview: {
    height: responsiveHeight(4),
    width: responsiveWidth(45),
    borderWidth: 1,
    borderRadius: borderRadius.normal,
    justifyContent: 'center',
  },

  btntext: {
    textAlign: 'center',
    alignSelf:'center',
    fontFamily: fontFamily.semiBold,
    fontSize:fontSize.small
  },

  flatlistinnerview: {
    marginLeft: marginHorizontal.semiSmall,
    flexDirection: 'row',
  },

  image: {
    height: responsiveHeight(7),
    width: responsiveWidth(15),
    marginTop: spaceVertical.extraSmall,
    borderRadius:borderRadius.normal
  },

  line: {
    borderWidth: 0.2,
    marginLeft:marginHorizontal.semiSmall,
    marginTop: spaceVertical.extraSmall,
    width: responsiveWidth(85),
    borderColor:colors.grayline,
  },

  nametext:{
    fontSize:fontSize.small,
    color:colors.black,
    fontFamily:fontFamily.semiBold
  },

  discounttext:{
    fontSize:fontSize.extraSmall,
    color:colors.gray10,
    fontFamily:fontFamily.regular
  },

  greentext :{
    fontSize:fontSize.extraSmall,
    color:colors.projectgreen,
    fontFamily:fontFamily.regular
  },
});

export { styles };

