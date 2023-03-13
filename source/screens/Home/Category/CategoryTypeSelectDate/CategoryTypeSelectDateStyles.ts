import { StyleSheet } from 'react-native';

import {
  borderRadius,
  colors, fontFamily, fontSize, marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical
} from '../../../../styles/variables';

const styles = StyleSheet.create({
  header: {
    height: responsiveHeight(8),
  },

  searchicon: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    marginLeft: marginHorizontal.extraSmall,
  },



  verticleLine: {
    height: '50%',
    width: 1,
    backgroundColor: colors.gray10,
  },

  searchbarview: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderWidth: 2,
    width: responsiveWidth(90),
    paddingStart: 10,
    borderColor: colors.bordercolor,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.XLarge,
  },

  body: {
    flex:1,
    borderTopLeftRadius: borderRadius.bigboxradius,
    borderTopRightRadius: borderRadius.bigboxradius,
    backgroundColor: colors.white,
    elevation:2
  },

  search:{
    height: responsiveHeight(6), 
    width: responsiveWidth(75), 
    fontFamily: fontFamily.medium 
  },

  dateandtimeView:{
    flexDirection: 'row',
    marginLeft: marginHorizontal.semiSmall,
    marginTop: spaceVertical.extraSmall,
    alignItems: 'center'
  },

  dateandtimeTitle:{
    marginLeft: marginHorizontal.small,
    fontFamily: fontFamily.medium,
    color: colors.black,
    fontSize: fontSize.medium
  },

  pickTime:{
    fontFamily: fontFamily.medium,
    color: colors.black,
    fontSize: fontSize.medium
  },


});

export { styles };

