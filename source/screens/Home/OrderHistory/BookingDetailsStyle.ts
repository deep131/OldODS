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
} from '../../../styles/variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successtext: {
    fontFamily: fontFamily.semiBold,
    color: colors.black,
    fontSize: fontSize.medium,
    alignSelf:'center'
  },
  main: {
    flexGrow:1,
    backgroundColor: colors.lightgreen,
  
  },
  correct: {
    height: responsiveWidth(20),
    width: responsiveWidth(20),
    alignSelf: 'center',
  },
  header: {
    height: responsiveHeight(8),
    backgroundColor: colors.lightgreen,
  },
  iclocation1: {
    height: responsiveHeight(2.6),
    width: responsiveWidth(4.7),
    
  },
  servicebtn:{
    backgroundColor:colors.projectblue,
    borderRadius:borderRadius.normal,
    width:responsiveWidth(22),top:4
    
  },
  text:{
    color:colors.white,
    fontFamily:fontFamily.regular,
    fontSize:fontSize.extraSmall,textAlign:'center'
  },
  details: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xmedium,
    width:'95%',

 
    alignSelf:'center',marginTop:spaceVertical.semiSmall
  },
  footercomponent:{
    backgroundColor: colors.white,
    borderRadius: borderRadius.boxRadius,
   paddingBottom:spaceVertical.extraLarge,
   marginTop:spaceVertical.semiSmall,
   width:'92%',alignSelf:'center',
  
  },
  acrepairimage: {
    height: responsiveHeight(14),
    width: responsiveWidth(28),
    borderRadius: borderRadius.medium,
  },
  locationName: {
    height: responsiveHeight(12),
    marginTop: spaceVertical.extraSmall,
    backgroundColor: colors.white,
    justifyContent: 'center',
    marginHorizontal: responsiveWidth(1),
    elevation: 3,
  },

  titleText: {
  
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.small,
  },
  headertext: {
  
    color: colors.black,
    fontFamily: fontFamily.bold,
    alignSelf:'center',
    fontSize: fontSize.medium,
  },
  smalltext:{
  
    color: colors.gray10,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.extraSmall,
  },
  starimage: {
    height: responsiveHeight(2),
    width: responsiveWidth(4),
    top:8,
  },
  graystar:{
height:responsiveHeight(5),
width:responsiveWidth(10.2),

},
  ratingtext: {
    color: colors.gray10,
    fontFamily: fontFamily.regular,
    marginLeft: marginHorizontal.smallest,
    
  },
  pricetext: {
    color: colors.darkGray,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.small,
  },

  orderNo: {
    color: colors.black,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
  },

  typeText: {
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.normal,
  },

  price: {
    position: 'absolute',
    right: responsiveWidth(16),
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.normal,
  },

  childTitle: {
    justifyContent: 'center',
  },

  subView: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: borderRadius.boxRadius,
    borderBottomRightRadius: borderRadius.boxRadius,
    elevation: 2,
    marginHorizontal: responsiveWidth(1),
    borderTopWidth: 1,
    borderColor: colors.lightGray,
  },

  categoryimage: {
    height: responsiveWidth(14),
    width: responsiveWidth(14),
    alignItems: 'center',
  },

  paymentModeimage: {
    alignItems: 'center',
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    bottom: responsiveHeight(1),
    marginLeft: responsiveWidth(1),
  },

  itemQty: {
    fontFamily: fontFamily.semiBold,
    color: colors.black,
    fontSize: fontSize.normal,
    width: responsiveWidth(12),
  },

  itemName: {
    fontFamily: fontFamily.regular,
    color: colors.black,
    width: responsiveWidth(20),
  },

  orderItems: {
    flexDirection: 'row',
    marginTop: spaceVertical.extraSmall,
    marginBottom: spaceVertical.semiSmall,
    justifyContent: 'center',
    marginHorizontal: marginHorizontal.extraSmall,
  },

  serviceStatus: {
    alignItems: 'center',
    fontFamily: fontFamily.medium,
    backgroundColor: colors.darkPrimary,
    color: colors.white,
    padding: 5,
    marginLeft: marginHorizontal.extraSmall,
    borderRadius: borderRadius.semiLarge,
  },

  paymentMethod: {
    alignItems: 'center',
    fontFamily: fontFamily.medium,
    backgroundColor: colors.lightgreen,
    color: colors.darkPrimary,
    padding: 5,
    marginLeft: marginHorizontal.extraSmall,
    borderRadius: borderRadius.semiLarge,
    // borderWidth:0.5,
    // borderColor:colors.darkPrimary
  },
  modaltext:{
    fontSize: fontSize.normal,
    color: colors.black,
    fontFamily: fontFamily.semiBold,
  },
  successimg:{
    height: responsiveWidth(20),
    width: responsiveWidth(20),
  },
  modalview:{
    alignSelf: 'center',
    height: responsiveHeight(40),
    width: responsiveWidth(80),
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 2,
    justifyContent: 'center',
    marginTop: spaceVertical.XXlarge,
    borderRadius: borderRadius.xmedium,
  },
  cmnttext:{
    fontFamily:fontFamily.regular,
    marginLeft:marginHorizontal.semiSmall,
    marginTop:spaceVertical.small

  },
  commentste:{
    height:responsiveHeight(18),
    width:responsiveWidth(75),
    borderWidth:1,borderColor:colors.gray10,
    alignSelf:'center',
    borderRadius:borderRadius.otpradius,

  },rating: {
    fontFamily: fontFamily.semiBold,
    alignSelf: 'center',
    color: colors.black,
    fontSize: fontSize.medium,
    marginTop: spaceVertical.semiSmall,
  },
  servicetext:{
    fontSize: fontSize.extraSmall,
    fontFamily: fontFamily.bold,
    color: colors.black,
  }

});

export {styles};
