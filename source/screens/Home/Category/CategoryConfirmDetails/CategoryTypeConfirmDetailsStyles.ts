import { StyleSheet } from 'react-native';

import {
  borderRadius,
  colors, fontFamily, fontSize, marginHorizontal, responsiveHeight, responsiveWidth, spaceVertical
} from '../../../../styles/variables';

const styles = StyleSheet.create({
  header: {
    height: responsiveHeight(8)
  },

  spinnerTextStyle: {
    left:responsiveWidth(2),
    color: colors.white,
    fontFamily:fontFamily.regular
  },

  body: {
    flex:1,
    width:responsiveWidth(90),
    alignSelf:'center',
  },

  iclocation1: {
    height: responsiveHeight(2),
    width: responsiveWidth(4),
  },

  iclocation: {
    height: responsiveHeight(2),
    width: responsiveWidth(4),
  },
  locationview: {
    marginLeft: marginHorizontal.extraSmall,
    position:'absolute',
    flexDirection: 'row',
    bottom:10,
    alignItems:'center'
  },

  locationtext: {
    marginLeft: marginHorizontal.extraSmall,
    color: colors.locationtext,
    fontFamily: fontFamily.medium,
    width:responsiveWidth(80),
    height:responsiveHeight(5),
    top:5
  },

  mapView:{
    height: responsiveHeight(26),
    backgroundColor: colors.white,
    borderRadius: borderRadius.boxRadius,
    elevation: 1,
  },
  
  mapMarker:{
    zIndex: 3,
    position: 'absolute',
    top: '28%',
    alignSelf: 'center',
    height: responsiveHeight(8)
},

orderDetails:{
  backgroundColor: colors.white,
  borderRadius: borderRadius.boxRadius,
  marginVertical: spaceVertical.small,
  elevation:1
},

categoryimage: {
  height: responsiveWidth(14),
  width: responsiveWidth(14),
  alignItems:'center',
},

promoCodeRow:{
  marginVertical: spaceVertical.extraSmall,
  marginLeft: marginHorizontal.small,
  flexDirection: 'row',
  alignItems: 'center'
},

promoCodeView:{
  backgroundColor: colors.promocodeBg,
  marginLeft: marginHorizontal.extraSmall,
  padding: 5,
  borderRadius: borderRadius.semiLarge,
  flexDirection:'row',
  alignItems:'center'
},

promoCodeText:{
  color: colors.promocode,
  fontSize: fontSize.normal,
  fontFamily: fontFamily.medium,
  alignItems:'center',
  top:1
},

applyButton:{
  borderRadius: borderRadius.normal,
  position: 'absolute',
  right: 20,
  width: responsiveWidth(20),
},

applyText:{
  color: colors.white,
  fontFamily: fontFamily.medium,
  textAlign: 'center',
  padding: 5,
},

totalRow:{
  marginVertical: spaceVertical.extraSmall,
  marginLeft: marginHorizontal.small,
  flexDirection: 'row',
  alignItems: 'center'
},

estimatedCost:{
  fontFamily: fontFamily.regular,
  color: colors.darkGray,
  fontSize: fontSize.XXsmall,
  marginLeft: marginHorizontal.extraSmall
},

totalPrice:{
  fontFamily: fontFamily.semiBold,
  color: colors.darkPrimary,
  position: 'absolute',
  right: 20
},

paymentMethodView:{
  justifyContent: 'space-around',
  flexDirection: 'row',
  marginBottom: spaceVertical.extraSmall,
},

paymentMethodCard:{
  height: responsiveHeight(10),
  borderWidth: 1,
  borderColor: colors.lightGray,
  width: responsiveWidth(40),
  borderRadius: borderRadius.semiLarge,
},

paymentMethodSelected:{
  position: 'absolute',
  right: 10,
  borderWidth: 0.5,
  borderRadius: borderRadius.circle,
  height: responsiveWidth(4),
  width: responsiveWidth(4),
  top: 5,
},

paymentMethodUnselected:{
  position: 'absolute',
  right: 10,
  borderWidth: 0.5,
  borderRadius: borderRadius.circle,
  height: responsiveWidth(4),
  width: responsiveWidth(4),
  top: 5,
},

itemQty:{
  fontFamily: fontFamily.semiBold,
  color: colors.black,
  fontSize: fontSize.normal,
  width: responsiveWidth(12)
},

itemName:{
  fontFamily: fontFamily.regular,
  color: colors.darkGray,
  width: responsiveWidth(24),
},

orderDetailsTitleView:{
  marginVertical: spaceVertical.extraSmall,
  marginLeft: marginHorizontal.small,
  flexDirection: 'row',
  alignItems: 'center',
},

orderDetailsTitleText:{
  fontFamily: fontFamily.medium,
  color: colors.black,
  fontSize: fontSize.normal
},

orderItems:{
  flexDirection: 'row',
  marginTop: spaceVertical.extraSmall,
  marginBottom: spaceVertical.semiSmall,
  justifyContent: 'center',
  marginHorizontal: marginHorizontal.extraSmall
},

workingHoursView:{
  marginVertical: spaceVertical.extraSmall,
  marginLeft: marginHorizontal.small,
  flexDirection: 'row',
  alignItems: 'center'
},

workingHoursTime:{
  fontFamily: fontFamily.regular,
  color: colors.darkGray,
  fontSize: fontSize.XXsmall,
  marginLeft: marginHorizontal.extraSmall
},

workingHoursPrice:{
  fontFamily: fontFamily.semiBold,
  color: colors.black,
  position: 'absolute',
  right: 20
},

serviceChargeView:{
  marginVertical: spaceVertical.extraSmall,
  marginLeft: marginHorizontal.small,
  flexDirection: 'row',
  alignItems: 'center'
}



});

export { styles };

