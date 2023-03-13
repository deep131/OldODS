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
  container: {
    backgroundColor: colors.skyblue,
    borderTopRightRadius: borderRadius.medium,
    borderBottomRightRadius: borderRadius.medium,
    borderBottomLeftRadius: borderRadius.medium,
    // marginTop: spaceVertical.small,
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginBottom: responsiveHeight(3),
  },

  text: {
    alignSelf: 'center',
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.normal,
    color: colors.locationtext,
    marginVertical: spaceVertical.small,
  },

  imagestyle: {
    height: responsiveHeight(4.5),
    width: responsiveWidth(8.5),
    alignSelf: 'center',
  },

  innertext: {
    alignSelf: 'center',
    fontFamily: fontFamily.medium,
    color: colors.locationtext,
    fontSize: fontSize.semismall,
    top: 2,

  },

  itemview: {
    height: responsiveHeight(9),
    width: responsiveWidth(26),
    backgroundColor: colors.white,
    borderRadius: borderRadius.semiLarge,
    marginLeft: responsiveWidth(3),
    marginBottom: spaceVertical.extraSmall,
    justifyContent: 'center',
    padding:0,
alignSelf:'center'
  },
});

export {styles};
