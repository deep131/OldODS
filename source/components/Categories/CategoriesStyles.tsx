import { StyleSheet } from "react-native";
import { borderRadius, colors, fontFamily, fontSize, responsiveHeight, responsiveWidth, spaceVertical } from "../../styles/variables";

const styles = StyleSheet.create({
    categoryname: {
        marginTop: spaceVertical.extraSmall,
        fontFamily: fontFamily.semiBold,
        fontSize:fontSize.extraSmall,
        color: 'black',
        alignSelf: 'center',
      },
      categoryimage: {
        height: responsiveWidth(23),
        width: responsiveWidth(23),
        alignSelf: 'center',
      },
      categoriesview: {
        height: responsiveHeight(18),
        width: responsiveWidth(32),
    
        borderWidth: 1,
        borderColor: colors.white,
        justifyContent: 'center',
    
        backgroundColor: 'white',
        borderRadius: borderRadius.semiLarge,
        shadowOpacity: 2,
        marginTop: spaceVertical.extraSmall,
        elevation: 5,
        marginVertical: spaceVertical.extraSmall,
      },
});

export { styles };
