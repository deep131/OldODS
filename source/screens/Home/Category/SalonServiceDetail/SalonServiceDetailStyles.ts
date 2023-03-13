import { StyleSheet } from 'react-native';
import { borderRadius, colors, fontFamily, fontSize, marginHorizontal, responsiveHeight, responsiveWidth } from '../../../../styles/variables';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightpurple,
  },
  header: {
    height: responsiveHeight(8),
    backgroundColor: colors.lightpurple,
  },
  searchicon: {
    height: responsiveWidth(5),             
    width: responsiveWidth(5),
    marginLeft: marginHorizontal.extraSmall,
  },
  searchtext: {
    height: responsiveHeight(6),
    width: responsiveWidth(75),
    fontFamily: fontFamily.medium,
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
    flex: 1,
    borderTopLeftRadius: borderRadius.bigboxradius,
    borderTopRightRadius: borderRadius.bigboxradius,
    backgroundColor: colors.white,
  },
  bodyhead: {
    flexDirection: 'row',

    marginVertical: responsiveHeight(3),
    left: marginHorizontal.semiSmall,
    width: responsiveWidth(95),
    height: responsiveHeight(3),
  },
  acimage: {
    height: responsiveHeight(4),
    width: responsiveWidth(8),
  },
  actext: {
    fontSize: fontSize.normal,
    color: colors.locationtext,
    fontFamily: fontFamily.medium,
    marginLeft: marginHorizontal.toosmall,
  },
  acrepairimage: {
    height: responsiveHeight(14),
    width: responsiveWidth(28),
    borderRadius: borderRadius.medium,
  },
  titletext: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.medium,
    color: colors.locationtext,
  },
  starimage: {
    height: responsiveHeight(2),
    width: responsiveWidth(4),
    top: 2,
  },
  ratingtext: {
    color: colors.darkGray,
    fontFamily: fontFamily.regular,
    marginLeft: marginHorizontal.smallest,
  },
  pricetext: {
    color: colors.darkGray,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.semismall,
  },
  viewdetails: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.small,
    top: 3,
  },
  icon: {
    top: 5,
  },
});

export { styles };

