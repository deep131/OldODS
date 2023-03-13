import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import MapView from 'react-native-maps';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Bottomsheet from '../../../../components/BottomSheet/Bottomsheet';
import Button from '../../../../components/Button/Button';
import CategoryTypeHeader from '../../../../components/CategoryTypeHeader/CategoryTypeHeader';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../../../styles/variables';
import {GOOGLE_API_KEY} from '../../../../utils/commonUtils';
import {styles} from './CategoryTypeSelectLocationStyles';

const CategoryTypeSelectLocation = ({navigation, route}: any) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isaddvisible, setAddvisible] = useState(true);
  const [isMapDrag, setIsMapDrag] = useState(false);
  const [addtype, setAddtype] = useState(null);
  const [isCheck, setIsCheck] = useState(1);

  const [latitude, setlatitude] = useState(22.33644);
  const [longitude, setlongitude] = useState(70.76797);
  const [formattedAddress, setformattedAddress] = useState('');

  const params = route?.params;
  const primaryColor = params?.color;
  const headerTitle = params?.headerTitle;
  const primaryDarkColor = params?.darkColor;
  const id=params?.id;

  const handleCallback = (childData: any) => {
    setModalVisible(false);
  };

  const selectedadd = (item: any) => {
    setIsCheck(item.id);
    setAddtype(item.id);
    if (item.id == 1) {
      setAddvisible(true);
      console.log(isCheck);
    }
    if (item.id == 4) {
      setModalVisible(true);
    }

    if (item.id == 3) {
      setAddvisible(!isaddvisible);
    }
    if (item.id == 2) {
      setAddvisible(true);
    }
  };
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

  const onRegionChange = (region: any) => {
    if (isMapDrag) {
      setregion(region);
      getPostalAddress(region.latitude, region.longitude);
      setIsMapDrag(false);
    }
  };

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

  const userLocations: any = [
    {
      id: 1,
      name: 'Home',
      image: require('../../../../assets/Images/home.png'),
      greenimage: require('../../../../assets/Images/greenhome.png'),
    },
    {
      id: 2,
      name: 'Office',
      image: require('../../../../assets/Images/office.png'),
      greenimage: require('../../../../assets/Images/greenoffice.png'),
    },
    {
      id: 3,
      name: 'Other',
      image: require('../../../../assets/Images/other.png'),
      greenimage: require('../../../../assets/Images/greenother.png'),
    },
    {
      id: 4,
      name: 'Add New',
      image: require('../../../../assets/Images/addNew.png'),
      greenimage: require('../../../../assets/Images/addNew.png'),
    },
  ];
  const address: any = [
    {id: 1, number: 'Home 1', address: '03 Home Name, Street Name, Landmark'},
    {id: 2, number: 'Home 2', address: '03 Home Name, Street Name, Landmark'},
    {id: 3, number: 'Home 3', address: '03 Home Name, Street Name, Landmark'},
    {id: 4, number: 'Home 4', address: '03 Home Name, Street Name, Landmark'},
    {id: 5, number: 'Home 5', address: '03 Home Name, Street Name, Landmark'},
    {id: 6, number: 'Home 6', address: '03 Home Name, Street Name, Landmark'},
    {id: 7, number: 'Home 7', address: '03 Home Name, Street Name, Landmark'},
    {id: 8, number: 'Home 8', address: '03 Home Name, Street Name, Landmark'},
    {id: 9, number: 'Home 9', address: '03 Home Name, Street Name, Landmark'},
  ];

  const goToConfirmDetail = () => {
    navigation.navigate('CategoryTypeConfirmDetails', {
      latitude: latitude!,
      longitude: longitude!,
      formattedAddress: formattedAddress!,
      color: primaryColor,
      darkColor: primaryDarkColor,
      headerTitle: headerTitle,
      id:id
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: primaryColor}}>
      {/* Flex header */}
      <View style={[styles.header, {backgroundColor: primaryColor}]}>
        <CategoryTypeHeader
          name={headerTitle}
          back={true}
          notification={true}
          cart={false}
          navigation={navigation}
          bgColor={primaryColor}
        />
      </View>
      {/* Body */}
      <View style={styles.body}>
        {/* Title */}
        <View style={styles.selectlocationView}>
          <IonIcon
            size={25}
            name="location-outline"
            color={primaryDarkColor}></IonIcon>
          <Text style={styles.selectlocationTitle}>Select Location</Text>
        </View>
        {/* searchbar */}
        <View style={styles.searchbarview}>
        <Image style={styles.iclocation1} source={
             id=== 1
             ? require('../../../../assets/Images/location_g.png')
             : id === 2
                ? require('../../../../assets/Images/location_b.png')
                : id === 3
                ? require('../../../../assets/Images/location_p.png')
                : require('../../../../assets/Images/location_g.png')
            }/>
              <IonIcon name="close-circle" size={20} color={colors.gray10} style={[styles.cross]}></IonIcon>
          <TextInput
            style={{
              height: responsiveHeight(6),
              width: responsiveWidth(75),
              fontFamily: fontFamily.regular,
              fontSize:fontSize.extraSmall,
              borderRadius: borderRadius.semiLarge,
            }}
            placeholder="03 Home Name, Street Name, Landmark"
            placeholderTextColor={'gray'}>



            </TextInput>
        </View>
        {/* Google Map */}
        <View
          style={{
            flex: 1,
            marginTop: spaceVertical.extraSmall,
            backgroundColor: colors.white,
          }}>
          <Image
            style={{
              zIndex: 3,
              position: 'absolute',
              top: '30%',
              alignSelf: 'center',
              height: responsiveHeight(10),
            }}
            resizeMode="contain"
            source={
              id ===1
                ? require('../../../../assets/Images/marker.png')
                : id === 2
                ? require('../../../../assets/Images/bluemarker.png')
                : id === 3
                ? require('../../../../assets/Images/purplemarker.png')
                : require('../../../../assets/Images/marker.png')

            }></Image>

          <MapView
            style={[
              StyleSheet.absoluteFillObject,
              {height: responsiveHeight(100)},
            ]}
            region={region}
            onPanDrag={() => {
              setIsMapDrag(true);
            }}
            onRegionChangeComplete={onRegionChange}></MapView>
        </View>
      </View>
      {/* Bottom Sheet */}
      <View
        style={{
          backgroundColor: colors.white,
          height:
            isaddvisible === false
              ? responsiveHeight(55)
              : responsiveHeight(32),
          borderTopLeftRadius: borderRadius.bigboxradius,
          borderTopRightRadius: borderRadius.bigboxradius,
          elevation: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: responsiveWidth(80),
            alignSelf: 'center',
            marginTop: responsiveHeight(5),
          }}>
          {userLocations.map((item: any, index: any) => (
            <View style={{alignItems: 'center'}} key={index}>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.bggray,
                  borderRadius: 50,
                  height: responsiveWidth(14),
                  width: responsiveWidth(14),
                  justifyContent: 'center',
                }}
                key={index}
                onPress={() => selectedadd(item)}>
                <Image
                  style={[
                    styles.locationIcons,
                    {
                      tintColor:
                        item.id == isCheck ? primaryDarkColor : colors.black,
                    },
                  ]}
                  resizeMode="contain"
                  source={item.image}></Image>
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: spaceVertical.extraSmall,
                  color: colors.black,
                  fontFamily: fontFamily.medium,
                }}>
                {item.name}
              </Text>
            </View>
          ))}
        </View>
        {isaddvisible === true ? (
          false
        ) : (
          <View style={{height: responsiveHeight(30)}}>
            <ScrollView style={{marginVertical: responsiveHeight(2.5)}}>
              {address.map((item: any, index: any) => (
                <View style={styles.addreview} key={index}>
                  <Image
                    style={styles.addressimage}
                    source={require('../../../../assets/Images/smallhomeicon.png')}></Image>
                  <View style={{left: 10}}>
                    <Text style={styles.homeaddress}>{item.number}</Text>
                    <Text style={styles.address}>{item.address}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        )}

        <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            bottom: responsiveHeight(3),
          }}>
          <Button
            name={'Proceed'}
            color={primaryDarkColor}
            onPress={goToConfirmDetail}
          />
        </View>
      </View>
      <Bottomsheet
        headertext={'Add New Address'}
        isVisible={isModalVisible}
        setIsVisible={() => setModalVisible(false)}
        parentCallback={handleCallback}
        squareImage={false}
        btntext={'Add'}
        inputtext={'03 Home Name, Street Name, Landmark'}
      />
    </View>
  );
};

export default CategoryTypeSelectLocation;
