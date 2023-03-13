import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  PermissionsAndroid,
  Pressable,
  Text,
  View,
} from 'react-native';

import {styles} from './CategoryTypeStyles';

import {ScrollView} from 'react-native-gesture-handler';

import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import Buildings from '../../../../components/Buildings/Buildings';
import Button from '../../../../components/Button/Button';
import CategoryTypeHeader from '../../../../components/CategoryTypeHeader/CategoryTypeHeader';
import SalonServices from '../../../../components/SaloonServices/SalonServices';
import {
  borderRadius,
  colors,
  fontFamily,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../../../styles/variables';
import {GOOGLE_API_KEY, showToast} from '../../../../utils/commonUtils';

const Categories = [
  {
    id: '1',
    image: require('../../../../assets/Images/apartment.png'),
    name: 'Apartment',
  },
  {
    id: '2',
    image: require('../../../../assets/Images/bunglow.png'),
    name: 'Bunglow',
  },
  {
    id: '3',
    image: require('../../../../assets/Images/shoppingmall.png'),
    name: 'Commercial',
  },
  {
    id: '4',
    image: require('../../../../assets/Images/shoppingmall.png'),
    name: 'Shopping Mall',
  },
];

const AppliancesCategories = [
  {
    id: '1',
    image: require('../../../../assets/Images/acimage.png'),
    name: 'Air Conditioner',
  },
  {
    id: '2',
    image: require('../../../../assets/Images/washingMachine.png'),
    name: 'Washing Machine',
  },
  {
    id: '3',
    image: require('../../../../assets/Images/refrigerator.png'),
    name: 'Refrigerator',
  },
  {
    id: '4',
    image: require('../../../../assets/Images/ledTV.png'),
    name: 'LED TV',
  },
  {
    id: '5',
    image: require('../../../../assets/Images/securityCamera.png'),
    name: 'Security Camera',
  },
  {
    id: '6',
    image: require('../../../../assets/Images/smartLock.png'),
    name: 'Smart Lock',
  },
  {
    id: '7',
    image: require('../../../../assets/Images/vacuumCleaner.png'),
    name: 'Vacuum Cleaner',
  },
  {
    id: '8',
    image: require('../../../../assets/Images/microWave.png'),
    name: 'Microwave Oven',
  },
];

const Salon = [
  {
    id: '1',
    image: require('../../../../assets/Images/Womensaloon.png'),
    name: 'Salon For Women',
  },
  {
    id: '2',
    image: require('../../../../assets/Images/Spa.png'),
    name: 'Spa For Women',
  },
  {
    id: '3',
    image: require('../../../../assets/Images/Massage.png'),
    name: 'Massage For Men',
  },
  {
    id: '4',
    image: require('../../../../assets/Images/Mensaloon.png'),
    name: 'Salon For Men',
  },
];
const CategoryType = ({navigation, route}: any) => {
  const [shouldShow, setShouldShow] = useState(true);
  const [selectedItem, setselectedItem] = useState(1);
  const [selectedService, setselectedService] = useState(1);
  const [selectedItemAppliances, setselectedItemAppliances] = useState(null);
  const [latitude, setlatitude] = useState(22.33644);
  const [longitude, setlongitude] = useState(70.76797);
  const [formattedAddress, setformattedAddress] = useState('');
  
  const params = route?.params;
  const itemID = params.itemId ? params.itemId : 1;
  console.log("category",itemID)
  const primaryColor = params?.color;
  const headerTitle = params?.headerTitle;
  const primaryDarkColor = params?.darkColor;

  const latitudeDelta = 0.025;
  const longitudeDelta = 0.025;

  const [region, setregion] = useState({
    latitudeDelta,
    longitudeDelta,
    latitude: 22.33644,
    longitude: 70.76797,
  });

  useEffect(() => {
    locateCurrentPosition();
    getPostalAddress(region.latitude, region.longitude);
  }, []);

  const locateCurrentPosition = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'On Demand Service',
          message: 'ODS App needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        Alert.alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }

    Geolocation.getCurrentPosition(
      position => {
        setlatitude(position.coords.latitude);
        setlongitude(position.coords.longitude);
        setregion({
          ...region,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        if (position.coords.latitude && position.coords.longitude) {
          getPostalAddress(position.coords.latitude, position.coords.longitude);
        }
      },
      error => {
        Alert.alert(error.message.toString());
      },
    );
  };

  async function getPostalAddress(lat: any, long: any) {
    await Geocoder.init(GOOGLE_API_KEY);
    Geocoder.from(lat, long)
      .then(async json => {
        // console.log("Address=",json.results[0].formatted_address);
        setformattedAddress(json.results[0].formatted_address);
      })
      .catch(error => {
        console.warn(error);
        console.log('getPostalAddress error', error);
      });
  }

  const ItemRender = ({item, index}: any) => (
    <View
      style={[
        styles.types,
        index === 0 ? {marginLeft: responsiveWidth(5)} : null,
      ]}>
      <Pressable
        style={[
          styles.categoriesview,
          item.id == selectedItem
            ? {backgroundColor: colors.skyblue, elevation: 2}
            : {backgroundColor: colors.white},
        ]}
        onPress={() => itemClick(item)}>
        <Image
          style={styles.categoryimage}
          source={item.image}
          resizeMode="contain"
        />
        <Text style={styles.categoryname}>{item.name}</Text>
      </Pressable>
    </View>
  );
  const SalonRender = ({item, index}: any) => (
    <View
      style={[
        styles.types,
        index === 0 ? {marginLeft: responsiveWidth(5)} : null,
      ]}>
      <Pressable
        style={[
          styles.categoriesview,
          item.id == selectedService
            ? {backgroundColor: colors.lightpurple, elevation: 2}
            : {backgroundColor: colors.white},
        ]}
        onPress={() => itemclicksalon(item)}>
        <Image
          style={styles.categoryimage}
          source={item.image}
          resizeMode="contain"
        />
        <Text style={styles.categoryname}>{item.name}</Text>
      </Pressable>
    </View>
  );

  const ItemRender1 = ({item, index}: any) => (
    <View style={[styles.types]}>
      <Pressable
        style={[styles.categoriesview]}
        onPress={() => itemClickAppliances(item)}>
        <View
          style={{
            backgroundColor:
              item.id == selectedItemAppliances ? colors.skyblue : colors.white,
            borderRadius: borderRadius.semiLarge,
            elevation: item.id == selectedItemAppliances ? 2 : 0,
            height: responsiveWidth(20),
          }}>
          <Image
            style={styles.categoryimage}
            source={item.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.categoryname} numberOfLines={2}>
          {item.name}
        </Text>
      </Pressable>
    </View>
  );

  const itemClick = (item: any) => {
    
    setselectedItem(item.id);

    if (item.id == selectedItem) {
      setShouldShow(true);
    }
  };


  const itemClickAppliances = (item: any) => {
    setselectedItemAppliances(item.id);
  };

  const itemclicksalon = (item: any) => {
    setselectedService(item.id);
    
  };

  const goToAppliance = () => {
    if (selectedItemAppliances != null) {
      navigation.navigate('CategoryTypeDetail', {
        itemID:2,
        color: primaryColor,
        darkColor: colors.darkSecondary,
        headerTitle: headerTitle,
        selectedAppliance: 'Air Conditioner',
      });
    } else {
      showToast('Please Select any appliances');
    }
  };
  const goTosalon = () => {
  
    navigation.navigate('CategoryTypeDetail', {
      itemID:3,
      color: colors.lightpurple,
      darkColor: colors.puruple,
      headerTitle: headerTitle,
      selectedAppliance: 'waxing',
    });

  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: primaryColor}}>
        {/* Flex header */}
        <View style={styles.header}>
          <CategoryTypeHeader
            name={headerTitle}
            back={true}
            notification={false}
            cart={true}
            navigation={navigation}
            bgColor={primaryColor}
            darkColor={primaryDarkColor}
            latitude={latitude}
            longitude={longitude}
            formattedAddress={formattedAddress}
          />
        </View>

        {/* Flex Body */}
        <View style={styles.body}>
          <View style={styles.bodytopview}>
            <Image
              style={styles.icclean}
              source={
                itemID == 1
                  ? require('../../../../assets/Images/cleaningproduct.png')
                  : itemID == 2
                  ? require('../../../../assets/Images/acimage.png')
                  : itemID == 3
                  ? require('../../../../assets/Images/saloon.png')
                  : null
              }
              resizeMode="contain"></Image>
            <Text style={styles.cleantext}>
              {itemID == 1
                ? 'Cleaning'
                : itemID == 2
                ? 'Appliances'
                : itemID == 3
                ? 'Salon'
                : null}
            </Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.cleandetail}>
              {itemID == 1
                ? 'Select your house rooms and kitchen in order to measure estimated cleaning costs.'
                : itemID == 2
                ? 'Select your home Appliances in order to measure estimated services costs.'
                : itemID == 3
                ? 'Select your service and we will take care of the rest'
                : null}
            </Text>

            <View
              style={{
                width: responsiveWidth(90),
                height: responsiveHeight(22),
                borderRadius: borderRadius.boxRadius,
                overflow: 'hidden',
                alignSelf: 'center',
                marginLeft: responsiveWidth(2),
                marginTop: spaceVertical.extraSmall,
              }}>
              <Image
                resizeMode="contain"
                style={styles.mainimage}
                source={
                  params.itemId == 1
                    ? require('../../../../assets/Images/Cleaning.png')
                    : params.itemId == 2
                    ? require('../../../../assets/Images/Appliances.png')
                    : params.itemId == 3
                    ? require('../../../../assets/Images/saloonAD.png')
                    : null
                }></Image>
            </View>

            {params.itemId == 1 ? (
              <View>
                <FlatList
                  data={Categories}
                  renderItem={ItemRender}
                  keyExtractor={item => item.id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />

                {/* Buildings Component */}
                {shouldShow ? (
                  <Buildings type={selectedItem} navigation={navigation} />
                ) : null}
              </View>
            ) : params.itemId == 2 ? (
              <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  alignSelf: 'center',
                  marginLeft: responsiveWidth(2),
                }}>
                <FlatList
                  data={AppliancesCategories}
                  renderItem={ItemRender1}
                  keyExtractor={item => item.id}
                  numColumns={4}
                  horizontal={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{paddingBottom: responsiveHeight(5)}}
                />
              </ScrollView>
            ) : params.itemId == 3 ? (
              <View>
                <FlatList
                  data={Salon}
                  renderItem={SalonRender}
                  keyExtractor={item => item.id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />

                {shouldShow ? (
                  <SalonServices type={selectedService} navigation={navigation} />
                ) : null}
              </View>
            ) : null}
          </ScrollView>

          {params.itemId == 2 ? (
            <>
              <View style={{alignSelf: 'center', bottom: responsiveHeight(6)}}>
                <Text
                  style={{
                    color: colors.black,
                    fontFamily: fontFamily.medium,
                  }}>
                  View More
                </Text>
              </View>

              <View style={{marginVertical: spaceVertical.extraSmall}}>
                <Button
                  name={'Proceed'}
                  color={primaryDarkColor}
                  onPress={goToAppliance}
                  position={'absolute'}
                  bottom={responsiveHeight(1)}
                />
              </View>
            </>
          ) : null}
          {params.itemId == 3 ? (
            <>
              <View style={{marginVertical: spaceVertical.extraSmall}}>
                <Button
                  name={'Proceed'}
                  color={primaryDarkColor}
                  onPress={goTosalon}
                  position={'absolute'}
                  bottom={responsiveHeight(0)}
                />
              </View>
            </>
          ) : null}
        </View>
      </View>
    </>
  );
};
export default CategoryType;
