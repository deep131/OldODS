import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import BottomSheet2 from '../../../../components/BottomSheet/BottomSheet2';
import Button from '../../../../components/Button/Button';
import CategoryTypeHeader from '../../../../components/CategoryTypeHeader/CategoryTypeHeader';
import {
  colors,
  fontSize,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../../../styles/variables';
import {styles} from './SalonServiceDetailStyles';

const salonservice: any = [
  {
    id: 1,
    image: require('../../../../assets/Images/halfleg.png'),
    title: 'Half Legs Waxing',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
  },
  {
    id: 2,
    image: require('../../../../assets/Images/halfarm.png'),
    title: 'Half Arms Waxing',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
  },
  {
    id: 3,
    image: require('../../../../assets/Images/backwax.png'),
    title: 'Back Waxing',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
  },
  {
    id: 4,
    image: require('../../../../assets/Images/stomache.png'),
    title: 'Stomach Waxing',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
  },
  {
    id: 5,
    image: require('../../../../assets/Images/backwax.png'),
    title: 'Full Waxing',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
  },
  {
    id: 6,
    image: require('../../../../assets/Images/stomache.png'),
    title: 'Stomach Waxing',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
  },
];
const SalonServiceDetail = ({navigation, route}: any) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const params = route.params;
  const primaryColor = params.color;
  const headerTitle = params.headerTitle;
  const primaryDarkColor = params.darkColor;
  const selectedTitle = params.selectedAppliance;

  const selectedArea = () => {
    setModalVisible(true);
  };

  const goToSelectDate = () => {
    navigation.navigate('CategoryTypeSelectDate', {
      color: colors.lightpurple,
      darkColor: colors.puruple,
      headerTitle: 'Salon Service',
    });
  };

  const ItemRender = ({item, index}: any) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: spaceVertical.extraSmall,
      }}>
      <Image style={styles.acrepairimage} source={item.image}></Image>

      <View style={{top: responsiveHeight(1), left: responsiveWidth(3)}}>
        <Text style={styles.titletext}>{item.title}</Text>

        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.starimage}
            source={require('../../../../assets/Images/star.png')}></Image>
          <Text style={styles.ratingtext}>{item.rating}</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: responsiveHeight(1)}}>
          <Text style={styles.pricetext}>{item.price}</Text>
          <Image
            style={{top: responsiveHeight(0.5), left: responsiveWidth(1.5)}}
            source={require('../../../../assets/Images/dots.png')}></Image>
          <Text
            style={[
              styles.ratingtext,
              {
                fontSize: fontSize.semismall,
                marginLeft: marginHorizontal.toosmall,
              },
            ]}>
            {item.time}
          </Text>
        </View>

        <TouchableOpacity>
          <Text style={[styles.viewdetails, {color: colors.puruple}]}>
            View details
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          position: 'absolute',
          right: responsiveWidth(5),
          bottom: responsiveHeight(10),
        }}>
        <IonIcon
          onPress={() => selectedArea()}
          style={styles.icon}
          name="add-circle-outline"
          color={colors.puruple}
          size={25}></IonIcon>
      </TouchableOpacity>
    </View>
  );
  return (
    <>
      <View style={styles.container}>
        {/* Flex header */}
        <View style={[styles.header]}>
          <CategoryTypeHeader
            name={headerTitle}
            back={true}
            notification={false}
            cart={false}
            navigation={navigation}
            bgColor={primaryColor}
            darkColor={primaryDarkColor}
          />
        </View>
        {/* Flex Body */}
        <View style={styles.body}>
          <View style={styles.bodyhead}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.acimage}
                source={require('../../../../assets/Images/waxing.png')}></Image>
              <Text style={styles.actext}>Waxing</Text>
            </View>
          </View>

          {/* Flatlist */}
          <FlatList
            style={{marginLeft: responsiveWidth(5)}}
            data={salonservice}
            renderItem={ItemRender}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: responsiveHeight(10)}}
          />
        </View>

        <Button
          name={'Next'}
          color={colors.puruple}
          bottom={responsiveHeight(2)}
          position="absolute"
          onPress={goToSelectDate}
        />
      </View>

      <BottomSheet2
        isVisible={isModalVisible}
        squareImage={true}
        header={"Half Leg Waxing"}
        setIsVisible={() => setModalVisible(false)}
        secondinput={true}
        ioncolor={'#7654D3'}
      />
    </>
  );
};
export default SalonServiceDetail;
