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
  titleText: {
  alignSelf:'center',
  
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.small,
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
    borderRadius: borderRadius.boxRadius,
   paddingBottom:spaceVertical.semiSmall,

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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchicon: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    marginLeft: marginHorizontal.extraSmall,
  },

  verticleLine: {
    height: responsiveHeight(3),
    width: responsiveWidth(0.2),
    backgroundColor: colors.gray10,
  },

  searchbarview: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderWidth: 2,
    width: responsiveWidth(90),
    borderColor: colors.bordercolor,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.XLarge,
    marginTop: spaceVertical.small,
    position: 'absolute',
  },

  search: {
    height: responsiveHeight(6),
    width: responsiveWidth(75),
    paddingStart: 20,
    fontFamily: fontFamily.medium,
    alignSelf: 'center',
  },
  categoryselectview: {
    flexDirection: 'row',
marginTop:20,
    justifyContent: 'space-evenly',  
  },

  topbtnview: {
    height: responsiveHeight(4),
    width: responsiveWidth(30),
    borderWidth: 1,
    borderRadius: borderRadius.normal,
    justifyContent: 'center',
  },
  btntext: {
    textAlign: 'center',
    alignSelf:'center',
    fontFamily: fontFamily.semiBold,
    fontSize:fontSize.small
  },
  btnbg:{
    width: responsiveWidth(28),
    height: responsiveWidth(8),
    alignItems:'center',
    marginLeft:spaceVertical.tiny,
    borderRadius:borderRadius.normal,
  
    justifyContent:'center',
  },

});

export {styles};
