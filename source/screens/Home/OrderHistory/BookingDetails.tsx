import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {
  Image,
  BackHandler,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

import Button from '../../../components/Button/Button';

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
import {styles} from './BookingDetailsStyle';

const BookingDetails = ({navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(0);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const yellowstar = require('../../../assets/Images/yellowstar.png');
  const starempty = require('../../../assets/Images/graystar.png');
  {
    console.log(defaultRating);
  }

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  };
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  return (
    <ScrollView style={styles.main}>
      <View
        style={{
          marginTop: spaceVertical.small,
          paddingBottom: spaceVertical.tiny1,
        }}>
        <Text style={styles.headertext}>Booking Details</Text>

        <View style={styles.details}>
          <View
            style={{
              flexDirection: 'row',
              top: responsiveHeight(18),
              position: 'absolute',
            }}>
            <Image
              style={{
                top: responsiveHeight(1),
                marginLeft: responsiveWidth(6.5),
                tintColor: colors.midorange,
              }}
              source={require('.././../../assets/Images/dots.png')}></Image>
            <Text
              style={{left: 5, color: colors.midorange, textAlign: 'center'}}>
              In Progress
            </Text>
          </View>
          <View style={{flexDirection: 'row', padding: responsiveHeight(3)}}>
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
                  top: 5,
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
          <View
            style={{
              width: responsiveWidth(100),
              borderWidth: 0.2,
              backgroundColor: colors.grayline,
              marginTop: spaceVertical.normal,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: spaceVertical.semiSmall,
            }}>
            <Text style={styles.servicetext}>workingHours</Text>
            <Text
              style={{
                fontSize: fontSize.semismall,
                fontFamily: fontFamily.medium,
                color: colors.grayline,
              }}>
              ( 1 Hour - 08 am to 09 am )
            </Text>
            <Text
              style={{
                fontSize: fontSize.extraSmall,
                fontFamily: fontFamily.medium,
                color: colors.gray10,
              }}>
              $ 128
            </Text>
          </View>
          <View
            style={{
              width: responsiveWidth(100),
              borderWidth: 0.2,
              backgroundColor: colors.grayline,
              marginTop: spaceVertical.semiSmall,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              left: 12,
              marginTop: spaceVertical.semiSmall,
            }}>
            <Text style={styles.servicetext}>Service Charge</Text>
            <Text
              style={{
                fontSize: fontSize.extraSmall,
                fontFamily: fontFamily.medium,
                color: colors.gray10,
                left: 200,
              }}>
              $31
            </Text>
          </View>
          <View
            style={{
              width: responsiveWidth(100),
              borderWidth: 0.2,
              backgroundColor: colors.grayline,
              marginTop: spaceVertical.semiSmall,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              left: 12,
              marginTop: spaceVertical.semiSmall,
            }}>
            <Text style={styles.servicetext}>Promo Code </Text>
            <Text
              style={{
                fontSize: fontSize.extraSmall,
                fontFamily: fontFamily.medium,
                color: colors.gray10,
                left: 200,
              }}>
              PRO356
            </Text>
          </View>
          <View
            style={{
              width: responsiveWidth(100),
              borderWidth: 0.2,
              backgroundColor: colors.grayline,
              marginTop: spaceVertical.semiSmall,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              left: 12,
              marginTop: spaceVertical.semiSmall,
              marginBottom: spaceVertical.normal,
            }}>
            <Text style={styles.servicetext}>Total</Text>
            <Text
              style={{
                fontSize: fontSize.semiSmall,
                fontFamily: fontFamily.medium,
                color: colors.gray10,
              }}>
              {' '}
              (Estimated Cost){' '}
            </Text>

            <Text
              style={{
                fontSize: fontSize.extraSmall,
                fontFamily: fontFamily.medium,
                color: colors.green,
                left: 130,
              }}>
              $ 128
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.details,
            {width: responsiveWidth(90), height: responsiveHeight(50)},
          ]}>
          <Text style={styles.rating}>Rating</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: spaceVertical.tiny,
            }}>
            {maxRating.map(item => {
              console.log('item', item);
              return (
                <TouchableOpacity
                  key={item}
                  onPress={() => setDefaultRating(item)}>
                  <Image
                    style={styles.graystar}
                    source={item <= defaultRating ? yellowstar : starempty}
                  />
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.cmnttext}>Comments</Text>
          <TextInput style={styles.commentste}></TextInput>
          <Modal animationType="slide" transparent visible={modalVisible}>
            <View style={styles.modalview}>
              <Image
                style={styles.successimg}
                source={require('../../../assets/Images/Success.png')}
              />
              <Text style={styles.modaltext}>Thank you for Rating</Text>
            </View>
          </Modal>
          <Button
            name={'submit now'}
            color={colors.primary}
            position="absolute"
            bottom={spaceVertical.normal}
            onPress={showModal}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default BookingDetails;
