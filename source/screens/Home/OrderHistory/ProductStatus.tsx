import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  LayoutAnimation,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button/Button';
import PlainBtn from '../../../components/Button/PlainBtn';
import CategoryText from '../../../components/CategoryText/CategoryText';
import TrendingComp from '../../../components/Trending/Trending';
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
import {styles} from './ProductStatusStyle';


const Trending = [
    {
      id: '1',
      image: require('../../../assets/Images/trending1.png'),
      name: 'Plumbing',
      rating: 5
    },
    {
      id: '2',
      image: require('../../../assets/Images/trending2.png'),
      name: 'AC Installation',
      rating: 3
    },
    {
      id: '3',
      image: require('../../../assets/Images/trending3.png'),
      name: 'Spa For Women',
      rating: 4
    },
    {
      id: '4',
      image: require('../../../assets/Images/trending1.png'),
      name: 'Plumbing',
      rating: 3
    },
    {
      id: '5',
      image: require('../../../assets/Images/trending2.png'),
      name: 'AC Installation',
      rating: 5
    },
    {
      id: '6',
      image: require('../../../assets/Images/trending3.png'),
      name: 'Spa For Woemen',
      rating: 4
    },
  ];
const ProductStatus = ({navigation}: any) => {

  return (
    <ScrollView style={styles.main}>
      <View style={{marginTop: spaceVertical.small,paddingBottom:50}}>
        <Image
          style={styles.correct}
          source={require('../../../assets/Images/Success.png')}></Image>
        <Text style={styles.successtext}>Success</Text>

        <View style={styles.details}>
          <View style={{flexDirection: 'row', padding: 20}}>
            <Image
              style={styles.acrepairimage}
              source={require('../../../assets/Images/acrepair.png')}
            />
            <View style={{marginLeft: responsiveWidth(3)}}>
              <Text style={styles.titleText}>AC Repair (window/Split)</Text>
              <Text style={styles.smalltext}>Less/ no cooling</Text>
              <View style={styles.servicebtn}>
                <Text style={styles.text}>Appliences</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.starimage}
                  source={require('.././../../assets/Images/star.png')}></Image>
                <Text style={[styles.ratingtext, {top: 6}]}>4.8 (87k)</Text>
              </View>

              <View
                style={{flexDirection: 'row', marginTop: responsiveHeight(1)}}>
                <Text style={styles.pricetext}>Total $159</Text>
                <Image
                  style={{
                    top: responsiveHeight(1),
                    left: responsiveWidth(1.5),
                  }}
                  source={require('.././../../assets/Images/dots.png')}></Image>
                <Text
                  style={[
                    styles.ratingtext,
                    {
                      fontSize: fontSize.small,
                      marginLeft: marginHorizontal.toosmall,
                    },
                  ]}>
                  35 Min
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.iclocation1}
                  source={require('../../../assets/Images/location_b.png')}
                />
                <Text
                  style={[
                    styles.titleText,
                    {fontFamily: fontFamily.medium, left: 3},
                  ]}>
                  3329 Joyce Stree, UAE
                </Text>
              </View>
              <View
                style={{
                  borderRadius: borderRadius.boxRadius,
                  borderColor: colors.projectblue,
                  width: responsiveWidth(25),
                  borderWidth: 1,
                  top:5
                }}>
                <Text
                  style={{
                    fontFamily: fontFamily.semiBold,
                    color: colors.black,
                    textAlign: 'center',
                  }}>
                  08:00 pm
                </Text>
              </View>
              
            </View>
          </View>
          <Button
          onPress={()=>navigation.navigate('OrderHistory')}
          color={colors.primary}
        name={"View Details"}
          />
        </View>

        <View style={styles.footercomponent}>
        <CategoryText name={'Trending'}></CategoryText>
            {/*Trending Flatlist */}
            <TrendingComp  
            data={Trending}  
            numColumn={Math.ceil(Trending.length / 2)}/>
            <PlainBtn
            onPress={()=>navigation.navigate('Home')}
        color={colors.white}
        name={"Back to Home"}
        borderwidth={1}
        bordercolor={colors.gray10}
    />
      
        </View>
     
      </View>
    </ScrollView>
  );

 
};

export default ProductStatus;
