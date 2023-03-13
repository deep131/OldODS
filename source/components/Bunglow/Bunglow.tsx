import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors, fontFamily, marginHorizontal, responsiveWidth, spaceVertical } from "../../styles/variables";
import { styles } from "./BunglowStyles";


const Bunglow = ({ data }: any) => {

  const renderItem = ({ item }: any) => (
    <>
      <View style={styles.itemview}>
        <Image
          style={styles.imagestyle}
          source={item.image} resizeMode='contain'></Image>

        <View style={{ justifyContent: 'center', marginLeft: responsiveWidth(5) }}>
          <Text style={styles.innertext}>{item.name}</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity>
              <Image
                style={styles.plus}
                source={require('../../assets/Images/minus.png')} resizeMode='contain'></Image>
            </TouchableOpacity>

            <Text style={styles.countText}>{item.qty}</Text>

            <TouchableOpacity>
              <Image
                style={styles.plus}
                source={require('../../assets/Images/plus.png')} resizeMode='contain'></Image>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </>
  );

  return (
    <View>
      <Text style={styles.text}>Bunglow</Text><View style={{
        flexDirection: 'row',
      }}>
        <ScrollView horizontal={true}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </ScrollView>

      </View>

      <View style={{
        marginLeft: responsiveWidth(2),
        marginVertical: spaceVertical.small,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Image
          style={styles.plus}
          source={require('../../assets/Images/price.png')} resizeMode='contain'></Image>

        <View style={{ alignItems: 'center', marginLeft: marginHorizontal.small }}>
          <Text style={{ color: colors.darkGray, fontFamily: fontFamily.regular }}>
            Price
          </Text>
          <Text style={{ color: colors.darkPrimary, fontFamily: fontFamily.semiBold }}>
            $ 358
          </Text>
        </View>


        <Image
          style={[styles.plus, { marginLeft: responsiveWidth(10) }]}
          source={require('../../assets/Images/clock.png')} resizeMode='contain'></Image>

        <View style={{ alignItems: 'center', marginLeft: marginHorizontal.small }}>
          <Text style={{ color: colors.darkGray, fontFamily: fontFamily.regular }}>
            Hours
          </Text>
          <Text style={{ color: colors.darkPrimary, fontFamily: fontFamily.semiBold }}>
            3 hr 30 min
          </Text>
        </View>
      </View>
    </View>
  )

}
export default Bunglow;