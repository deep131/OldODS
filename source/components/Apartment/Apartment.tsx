import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { decrementItem, incremetItem } from "../../redux/Actions/CategoryTypeActions/CategoryTypeAction";
import { colors, fontFamily, marginHorizontal, responsiveWidth, spaceVertical } from "../../styles/variables";
import { styles } from "./ApartmentStyles";


const Apartment = ({ data }: any) => {
  const dispatch = useDispatch();
  const [totalPrice,setTotalPrice] = useState(0);
  const [totalTime,setTotalTime] = useState(0);

  useEffect(() => {
    getTotalPrice();
    getTotalTime();
  }, [data]);

  const getTotalPrice = () => {
    let a = data.reduce(function (sum: any, current: any) {
      return (sum + current.total);
    }, 0);
    setTotalPrice(a);
  }

  const getTotalTime = () => {
    let b = data.reduce(function (sum1: any, current1: any) {
      return (sum1 + current1.totaltime);
    }, 0);
    setTotalTime(b);
  }


  const renderItem = ({ item, index }: any) => (
    <>
      <View style={styles.itemview}>
        <Image
          style={styles.imagestyle}
          source={item.image} resizeMode='contain'></Image>

        <View style={{ justifyContent: 'center', marginLeft: responsiveWidth(5) }}>
          <Text style={styles.innertext}>{item.name}</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => {
              if (item.qty >= 0) {
                dispatch(decrementItem(item.id, index) as any)
              }
            }}>
              <Image
                style={styles.plus}
                source={require('../../assets/Images/minus.png')} resizeMode='contain'></Image>
            </TouchableOpacity>

            <Text style={styles.countText}>{item.qty}</Text>

            <TouchableOpacity activeOpacity={0.8} onPress={() => {
              if (item.qty >= 0) {
                dispatch(incremetItem(item.id, index) as any)
              }
            }}>

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
      <Text style={styles.text}>Apartment</Text><View style={{
        flexDirection: 'row',
      }}>
        <ScrollView horizontal={true}>
          <FlatList
            data={data.slice(0, 4)}
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
            $ {totalPrice}
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
            {totalTime} h
          </Text>
        </View>
      </View>
    </View>
  )

}
export default Apartment;