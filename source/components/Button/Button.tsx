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
} from '../../styles/variables';

const Button = ({name, onPress, color, needLoading, bottom, position}: any) => {
  return (
    <TouchableOpacity
      style={{
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color,
        height: responsiveHeight(6),
        width: responsiveWidth(80),
        borderRadius: borderRadius.semiLarge,
        bottom: bottom,
        position: position,
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
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: fontSize.normal,
  },
});
export default Button;
