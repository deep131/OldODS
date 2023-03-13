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
} from '../../styles/variables';

const styles = StyleSheet.create({
  ionicons: {
    top: 10,
    fontSize: fontSize.large,
    position: 'absolute',
    color:colors.black
  },

  bottomsheetview: {
    flex: 1,
    width: responsiveWidth(100),
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  innermainview: {
    backgroundColor: colors.white,
    borderTopRightRadius: borderRadius.bigboxradius,
    borderTopLeftRadius: borderRadius.bigboxradius,
  },

  bsheadertext: {
    alignSelf: 'center',
    color: colors.locationtext,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.normal,
    textAlign: 'center',
    marginLeft:responsiveWidth(1)
  },
  bstext: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: colors.black,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.semiSmall,
  },
  bsimage: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
  },
  bsinputtext: {
    borderWidth: 1,
    alignSelf: 'center',
    width: responsiveWidth(80),
    borderColor: colors.darkGray,
    borderRadius: borderRadius.normal,
    color: colors.graytext,
    paddingLeft: marginHorizontal.semiSmall,
    fontFamily:fontFamily.regular
  },
  button: {
    backgroundColor: colors.projectgreen,
    alignSelf: 'center',
    width: responsiveWidth(40),
    borderRadius: borderRadius.semiLarge,
    height: responsiveHeight(5),
    justifyContent: 'center',
    marginTop:5,
    marginBottom: spaceVertical.normal,
  },
  rowview: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spaceVertical.large,
  },
  dropdown: {
    height: responsiveHeight(6),
    width:responsiveWidth(30),
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: borderRadius.semiLarge,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: fontSize.normal,
    fontFamily:fontFamily.medium,
    color:colors.black,
    textAlign:'center'
  },
  selectedTextStyle: {
    fontSize: fontSize.normal,
    fontFamily:fontFamily.medium,
    color:colors.black,
    textAlign: 'center'
  },
});

export { styles };

