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
  iclocation1: {
    height: responsiveHeight(2.4),
    width: responsiveWidth(4.5),
    position:'absolute',
    left:10,top:10
    
  },
  cross:{

    position:'absolute',
   right:10,
    top:10,
    
  },
  searchicon: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    marginLeft: marginHorizontal.extraSmall,
  },

  calendarIcon: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
  },

  locationIcons: {
    height: responsiveWidth(8),
    width: responsiveWidth(8),

    alignSelf:'center'
    
  },

  verticleLine: {
    height: '50%',
    width: 1,
    backgroundColor: colors.gray10,
  },

  searchbarview: {
    backgroundColor: colors.white,
    borderWidth: 2,
    width: responsiveWidth(90),
    paddingStart: 10,
    borderColor: colors.bordercolor,
    alignSelf: 'center',
    borderRadius: borderRadius.normal,
    marginTop: spaceVertical.extraSmall,
    alignItems:'center'
  },

  body: {
    flex: 1,
    borderTopLeftRadius: borderRadius.bigboxradius,
    borderTopRightRadius: borderRadius.bigboxradius,
    backgroundColor: colors.white,
    elevation: 2
  },

  search: {
    height: responsiveHeight(6),
    width: responsiveWidth(75),
    fontFamily: fontFamily.medium
  },

  selectlocationView: {
    flexDirection: 'row',
    marginLeft: marginHorizontal.semiSmall,
    marginTop: spaceVertical.extraSmall,
    alignItems: 'center'
  },

  selectlocationTitle: {
    marginLeft: marginHorizontal.small,
    fontFamily: fontFamily.medium,
    color: colors.black,
    fontSize: fontSize.medium
  },
  addreview: {
    flexDirection: 'row',
    marginLeft: marginHorizontal.semiSmall,
    marginVertical: spaceVertical.tiny
  },
  addressimage: {
    height: responsiveWidth(7.8),
    width: responsiveWidth(7),
  },
  homeaddress: {
    color: colors.locationtext,
    fontFamily: fontFamily.medium,
  },
  address: {
    color: colors.graytext,
    fontSize: fontSize.extraSmall,
    fontFamily: fontFamily.medium,
  }


});

export { styles };
