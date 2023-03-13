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
  header: {
    height: responsiveHeight(8),
  },
  icon: {
    fontSize: fontSize.large,
    color: colors.black,
    marginLeft: marginHorizontal.normal,
    marginTop: spaceVertical.tiny
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
  headername: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.bold,
    color: colors.black,
    marginLeft: marginHorizontal.large,
    marginTop: spaceVertical.tiny,
  },
  categoryname: {
    fontSize: fontSize.XXsmall,
    marginVertical: spaceVertical.extraSmall,
    marginLeft:responsiveWidth(1),
    fontFamily: fontFamily.regular,
    color: colors.black,
    textAlign: 'center'
  },
  categoryimage: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
    alignSelf: "center",
    marginTop: spaceVertical.small
  },
  categoriesview: {
    height: responsiveHeight(14),
    width: responsiveWidth(18),
    marginTop:spaceVertical.small,
    borderTopLeftRadius: borderRadius.medium,
    borderTopRightRadius: borderRadius.medium,
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
    flex: 1,
    borderTopLeftRadius: borderRadius.bigboxradius,
    borderTopRightRadius: borderRadius.bigboxradius,
    backgroundColor: colors.white,
    elevation: 2
  },

  icbell: {
    height: responsiveWidth(7),
    width: responsiveWidth(7),
    marginTop: spaceVertical.tiny,
    marginLeft: marginHorizontal.large
  },

  types: {
    marginHorizontal: responsiveWidth(3),
  },

  icclean: {
    height: responsiveHeight(7.7),
    width: responsiveWidth(14),
  },
  bodytopview: {
    marginLeft: marginHorizontal.semiSmall,
    flexDirection: 'row',
    marginTop: spaceVertical.semiSmall,
    paddingBottom: 5,
  },

  cleantext: {
    marginLeft: marginHorizontal.extraSmall,
    color: colors.locationtext,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.extraLarge
  },

  cleandetail: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    alignSelf: 'center',
    marginTop: spaceVertical.extraSmall,
    color: colors.detailtext,
    marginLeft: marginHorizontal.semiSmall,
    width: responsiveWidth(90)
  },

  cleandetail2: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    color: colors.detailtext,
    marginTop: spaceVertical.tiny1
  },
  mainimage: {
    width: responsiveWidth(88),
    height: responsiveHeight(20),
  }
});

export { styles };

