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
} from '../../../styles/variables';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.headerbgColor,
    flexDirection: 'row',
    height:responsiveHeight(7),
    alignItems:'center',
  },

  searchicon: {
    height: responsiveHeight(2.5),
    width: responsiveWidth(5),
    marginLeft: marginHorizontal.extraSmall,
  },
  categoryname: {
    marginTop: spaceVertical.extraSmall,
    fontFamily: fontFamily.semiBold,
    color: 'black',
    alignSelf: 'center',
  },
  categoryimage: {
    height: responsiveWidth(23),
    width: responsiveWidth(23),
    alignSelf: 'center',
  },
  categoriesview: {
    height: responsiveHeight(18),
    width: responsiveWidth(32),

    borderWidth: 1,
    borderColor: colors.white,
    justifyContent: 'center',

    backgroundColor: 'white',
    borderRadius: borderRadius.semiLarge,
    shadowOpacity: 2,
    marginTop: spaceVertical.extraSmall,
    elevation: 5,
    marginVertical: spaceVertical.extraSmall,
  },
  topratedview: {
    height: responsiveHeight(21),
    width: responsiveWidth(32),
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.white,
    borderRadius: borderRadius.semiLarge,
    shadowOpacity: 2,
    marginTop: spaceVertical.extraSmall,
    elevation: 5,
    marginVertical: spaceVertical.extraSmall,
  },
  topratedname: {
    marginTop: spaceVertical.tiny,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.semiSmall,
    color: colors.black,
    marginHorizontal:responsiveWidth(2)
    // textAlign:'center',
  },
  topratedimage: {
    height: responsiveHeight(11),
    width: responsiveWidth(32),
    borderRadius: borderRadius.otpradius,
    alignSelf: 'center',
  },
  swiper: {
    height: responsiveHeight(20),
    width: responsiveWidth(88),
    borderRadius: borderRadius.semiLarge,
    alignSelf: 'center',
    marginTop: spaceVertical.small,
  },
  verticleLine: {
    height: '50%',
    width: 1,
    backgroundColor: colors.nocolor,
  },
  headername: {
    fontSize: fontSize.sizeGuideTxt,
    fontFamily: fontFamily.bold,
    color: colors.black,
    marginLeft: marginHorizontal.semiSmall,
    marginTop: spaceVertical.small,
  },
  searchbarview: {
    flexDirection: 'row',
    borderWidth: 2,
    width: responsiveWidth(88),
    paddingStart:10,
    borderColor: "#bbb",
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: spaceVertical.small,
    borderRadius: borderRadius.normal,
  },
  body: {
    flex: 12,
    borderTopLeftRadius: borderRadius.bigboxradius,
    borderTopRightRadius: borderRadius.bigboxradius,
    backgroundColor: colors.white,
  },
  logotext: {
    height: responsiveHeight(5),
    width: responsiveWidth(20),
    alignSelf: 'center',
    marginLeft: marginHorizontal.small,
  },
  headerRightIcons :{
    position:'absolute',
    right:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  icbell: {
    height: responsiveWidth(7),
    width: responsiveWidth(7),
  },
  profileicon: {
    height: responsiveWidth(8),
    width: responsiveWidth(8),
    marginLeft:responsiveWidth(3)
  },
  iclocation: {
    height: responsiveHeight(2),
    width: responsiveWidth(4),
  },
  locationview: {
    marginLeft: marginHorizontal.semiSmall,
    flexDirection: 'row',
    marginTop: spaceVertical.extraSmall,
    alignItems:'center'
  },

  locationtext: {
    marginLeft: marginHorizontal.extraSmall,
    color: colors.locationtext,
    fontFamily: fontFamily.medium,
    width:responsiveWidth(88)
  },
});

export { styles };

