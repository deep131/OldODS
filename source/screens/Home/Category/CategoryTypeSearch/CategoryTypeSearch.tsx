import React, { useState } from 'react';
import {
  FlatList, Image, Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import {
  colors,
  marginHorizontal,
  responsiveHeight,
  spaceVertical
} from '../../../../styles/variables';
import { styles } from './CategoryTypeSearchStyles';
const Services = [
  {
    id: '1',
    image: require('../../../../assets/Images/toprated1.png'),
    name: 'Air Conditioner',

    discount: 'Category Up to 30% Off',
    bookings: '466.5k bookings',
    bookings2: 'in last one month',
  },
  {
    id: '2',
    image: require('../../../../assets/Images/toprated2.png'),
    name: 'Salon at home for Women',
    discount: 'Category Up to 30% Off',
    bookings: '466.5k bookings',
    bookings2: 'in last one month',
  },
  {
    id: '3',
    image: require('../../../../assets/Images/trending2.png'),
    name: 'Home Cleaning',
    discount: 'Category Up to 30% Off',
    bookings: '466.5k bookings',
    bookings2: 'in last one month',
  },
  {
    id: '4',
    image: require('../../../../assets/Images/toprated3.png'),
    name: 'Salon for Men',
    discount: 'Category Up to 30% Off',
    bookings: '466.5k bookings',
    bookings2: 'in last one month',
  },

  {
    id: '5',
    image: require('../../../../assets/Images/trending1.png'),
    name: 'Air Conditioner',
    discount: 'Category Up to 30% Off',
    bookings: '466.5k bookings',
    bookings2: 'in last one month',
  },
  {
    id: '6',
    image: require('../../../../assets/Images/trending2.png'),
    name: 'Salon at home for Women',
    discount: 'Category Up to 30% Off',
    bookings: '466.5k bookings',
    bookings2: 'in last one month',
  },
  {
    id: '7',
    image: require('../../../../assets/Images/trending3.png'),
    name: 'Home Cleaning',
    discount: 'Category Up to 30% Off',
    bookings: '466.5k bookings',
    bookings2: 'in last one month',
  },
  {
    id: '8',
    image: require('../../../../assets/Images/toprated3.png'),
    name: 'Salon for Men',
    discount: 'Category Up to 30% Off',
    bookings: '466.5k bookings',
    bookings2: 'in last one month',
  },
  {
    id: '9',
    image: require('../../../../assets/Images/toprated2.png'),
    name: 'Air Conditioner',
    discount: 'Category Up to 30% Off',
    bookings: '466.5k bookings',
    bookings2: 'in last one month',
  },
  {
    id: '10',
    image: require('../../../../assets/Images/toprated1.png'),
    name: 'Salon at home for Women',
    discount: 'Category Up to 30% Off',
    bookings: '466.5k bookings',
    bookings2: 'in last one month',
  },
];

const CategoryTypeSearch = ({navigation, index}: any) => {
  const [pressed, setPressed] = useState(true);

  const ItemRender = ({item,index}: any) => (
    <View style={{justifyContent: 'center'}}>
      <View style={styles.flatlistinnerview}>
        <Image style={styles.image} source={item.image} />
        <View
          style={{
            marginLeft: marginHorizontal.toosmall,
            marginTop: spaceVertical.extraSmall,
          }}>
          <Text style={styles.nametext}>{item.name}</Text>
          <Text style={styles.discounttext}>{item.discount}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.greentext}>{item.bookings} </Text>
            <Text style={styles.discounttext}>{item.bookings2}</Text>
          </View>
        </View>
      </View>
      <View style={styles.line}></View>
    </View>
  );

  return (
    <View
      style={{
        backgroundColor: colors.white,
        marginBottom: responsiveHeight(15),
      }}>
      {/* Flex header */}

      {/* Searchbar */}
      <View style={styles.searchbarview}>
        <TextInput
          style={styles.search}
          placeholder="Search for services and packages"
          placeholderTextColor={colors.darkGray}></TextInput>
        <View style={styles.verticleLine}></View>
        {/* searchicon */}
        <Image
          style={styles.searchicon}
          resizeMode="contain"
          source={require('../../../../assets/Images/serachicon.png')}></Image>
      </View>
      {/* Buttons */}

      <View style={styles.categoryselectview}>
        <TouchableOpacity
          onPress={() => {
            setPressed(true);
          }}
          style={{
            ...styles.topbtnview,
            backgroundColor: pressed ? colors.black : colors.white,
          }} activeOpacity={0.7}>
          <View>
            <Text
              style={{...styles.btntext, color: pressed ? colors.white : colors.black}}>
              Best Seller
            </Text>
          </View>
        </TouchableOpacity>
        {}
        <TouchableOpacity
          onPress={() => {
            setPressed(false);
          }}
          style={{
            ...styles.topbtnview,
            backgroundColor: pressed ? colors.white : colors.black,
          }} activeOpacity={0.7}>
          <View style={{alignSelf: 'center', justifyContent: 'center'}}>
            <Text
              style={{...styles.btntext, color: pressed ? colors.black : colors.white}}>
              Top Offers
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Flatlist */}
      <FlatList
        data={Services}
        renderItem={ItemRender}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: spaceVertical.semiSmall}}
        showsHorizontalScrollIndicator={false}
        style={{paddingTop: spaceVertical.small}}
      />
    </View>
  );
};

export default CategoryTypeSearch;
