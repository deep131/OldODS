import { StyleSheet } from 'react-native';
import { borderRadius, colors, fontFamily, fontSize, marginHorizontal, responsiveHeight, responsiveWidth, spaceVertical } from '../../../styles/variables';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  topTitle:{
    fontFamily: fontFamily.medium,
    color: colors.black,
    fontSize: fontSize.normal,
    marginVertical: responsiveHeight(2)
  },
  emojiPotionReguler:{
    top: responsiveHeight(0.75),
    left: 10,
  },
  emojiPositionChecked:{
    position:'absolute',
    top: responsiveHeight(0.75),
    right:10
  },
  bodyView:{
    alignSelf: 'flex-start',
    marginLeft: responsiveWidth(4),
    marginTop: spaceVertical.normal
  },
  bodyText:{
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.semiLarge
  },
  optionText:{
    marginLeft: marginHorizontal.small,
    color: colors.black,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal
  },
  prevButtonView:{
    borderWidth: 1,
    borderColor: colors.darkPrimary,
    borderRadius: borderRadius.boxRadius,
    width: responsiveWidth(24),
    padding: 5
  },
  prevButtonText:{
    textAlign: 'center',
    color: colors.darkPrimary,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal
  },
  nextButtonView:{
    borderWidth: 1,
    borderColor: colors.darkPrimary,
    borderRadius: borderRadius.boxRadius,
    width: responsiveWidth(24),
    backgroundColor: colors.darkPrimary,
    marginLeft: 10,
    padding: 5
  },
  nextButtonText:{
    textAlign: 'center',
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal
  },
  submitButtonView:{
    borderWidth: 1,
    borderColor: colors.darkPrimary,
    borderRadius: borderRadius.boxRadius,
    width: responsiveWidth(24),
    height:responsiveHeight(5),
    backgroundColor: colors.darkPrimary,
    marginLeft: 10,
    padding: 5
  },
  submitButtonText:{
    textAlign: 'center',
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
    top:responsiveHeight(0.4)
  }

});

export { styles };
