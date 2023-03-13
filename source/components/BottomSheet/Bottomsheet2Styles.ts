import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../styles/variables';

const styles = StyleSheet.create({
  headertext: {
    fontFamily: fontFamily.medium,
    color: colors.locationtext,
    fontSize: fontSize.medium,
  },
  ionicons: {
    fontSize: fontSize.large,
  },
  faqtext: {
    width: responsiveWidth(78),
    marginTop: spaceVertical.small,
    fontSize: fontSize.small,
    color: colors.locationtext,
    fontFamily: fontFamily.medium,
  },
  box: {
    color: colors.locationtext,
    alignSelf: 'center',
    fontFamily: fontFamily.medium,
    width: responsiveWidth(30),
  },
  close: {
    position: 'absolute',
    right: responsiveWidth(8),
    top: responsiveHeight(2),
    backgroundColor: 'white',
  },

  bottomsheetview: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: borderRadius.bigboxradius,
    borderTopLeftRadius: borderRadius.bigboxradius,
    top: spaceVertical.XXlarge,
  },

  innermainview: {
    flexGrow: 1,

    backgroundColor: colors.white,
  },

  bstext: {
    top: responsiveHeight(0.5),
    color: colors.graytext,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.extraSmall,
  },
  blackstar: {
    height: responsiveHeight(1),
    width: responsiveWidth(2),
  },

  button: {
    backgroundColor: colors.projectgreen,
    alignSelf: 'center',
    width: responsiveWidth(40),
    borderRadius: borderRadius.normal,
    height: responsiveHeight(5),
    justifyContent: 'center',
    marginBottom: spaceVertical.normal,
  },
  rowview: {
    alignSelf: 'center',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spaceVertical.large,
  },
  boldletters: {
    fontFamily: fontFamily.medium,
    color: colors.locationtext,
    fontSize: fontSize.normal,
  },
  starimage: {
    height: responsiveHeight(2),
    width: responsiveWidth(4),
    top: 2,
  },
  ratingtext: {
    color: colors.gray10,
    fontFamily: fontFamily.regular,
    marginLeft: marginHorizontal.smallest,
    fontSize: fontSize.semismalls,
  },
  line: {
    // height: 1,
    borderWidth: 0.8,

    marginTop: spaceVertical.extraSmall,
    width: responsiveWidth(75),
    borderColor: colors.gray10,

    // backgroundColor:colors.gray10
  },
  pricetext: {
    color: colors.darkGray,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.extraSmall,
  },
  desc: {
    fontSize: fontSize.extraSmall,
    fontFamily: fontFamily.regular,
    marginTop: responsiveHeight(1),
    color: colors.gray10,
    width: responsiveWidth(60),
  },
  icon: {
    fontSize: 24, 
    height: responsiveWidth(8),
    width: responsiveWidth(8),
  },
  horizontallist: {
    marginLeft: responsiveHeight(2),

    justifyContent: 'center',
    height: responsiveHeight(10),
    width: responsiveWidth(40),
    borderRadius: borderRadius.otpradius,
  },
  userimage: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
  },
  username: {
    fontSize: fontSize.small,
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  months: {
    fontSize: fontSize.extraSmall,
    color: colors.graytext,
    fontFamily: fontFamily.regular,
    width: responsiveWidth(70),
  },
  innerreview: {
    flexDirection: 'row',
    position: 'absolute',
    left: responsiveWidth(70),
    top: responsiveHeight(0.7),
  },
  reviewview: {
    flexDirection: 'row',

    top: responsiveHeight(6),
  },
});

export {styles};
