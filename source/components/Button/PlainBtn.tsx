import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../styles/variables';

const PlainBtn = ({name, onPress, color, needLoading, bottom, position,bordercolor,borderwidth}: any) => {
  return (
    <TouchableOpacity
      style={{
        top:25,
   
        borderWidth:borderwidth,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color,
        height: responsiveHeight(6),
        width: responsiveWidth(80),
        borderRadius: borderRadius.semiLarge,
        bottom: bottom,
        position: position,
        borderColor:bordercolor
        
      }}
      activeOpacity={0.5}
      onPress={onPress}>
      {needLoading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Text style={styles.text}>{name}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
  },
});
export default PlainBtn;
