import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  marginHorizontal,
  spaceVertical
} from '../../styles/variables';

const CategoryText = ({name, onPress, color}: any) => {
  return (
    <View style={styles.view}>
      <View style={styles.verticleLine}></View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.locationtext,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.normal,
    marginLeft: marginHorizontal.extraSmall,
  },
  view: {
    flexDirection: 'row',
    marginLeft: marginHorizontal.semiSmall,
    marginTop: spaceVertical.extraSmall,
  },
  verticleLine: {
    height: '90%',
    width: 2,
    backgroundColor: colors.primary,
  },
});
export default CategoryText;
