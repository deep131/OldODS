import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import BottomSheet2 from '../../../../components/BottomSheet/BottomSheet2';
import Button from '../../../../components/Button/Button';
import CategoryTypeHeader from '../../../../components/CategoryTypeHeader/CategoryTypeHeader';
import {
  colors,
  fontFamily,
  fontSize,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../../../styles/variables';
import {styles} from './CategoryTypeDetailStyles';
//acservicesdeials  array
const acservices: any = [
  {
    id: 1,
    image: require('../../../../assets/Images/acrepair.png'),
    title: 'AC Check-Up',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
  },
  {
    id: 2,
    image: require('../../../../assets/Images/acrepair.png'),
    title: 'AC Repair',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
  },
  {
    id: 3,
    image: require('../../../../assets/Images/acrepair.png'),
    title: 'AC Installation',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
  },
  {
    id: 4,
    image: require('../../../../assets/Images/acrepair.png'),
    title: 'AC Uninstallation',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
  },
  {
    id: 5,
    image: require('../../../../assets/Images/acrepair.png'),
    title: 'AC Check-Up',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
  },
  {
    id: 6,
    image: require('../../../../assets/Images/acrepair.png'),
    title: 'AC Installation',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
  },
];
// salonservices array
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
const CategoryTypeDetail = ({navigation, route}: any) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [Arrayany, setany]: any = useState([]);
  const params = route.params;
  const primaryColor = params.color;
  const headerTitle = params.headerTitle;
  const primaryDarkColor = params.darkColor;
  const selectedTitle = params.selectedAppliance;
  const id = params.itemID;
  console.log("details",id)

  useEffect(() => {}, [Arrayany]);

  const selectedArea = () => {
    setModalVisible(true);
  };
  //remove item from horizontallist
  const removeItem = (id: any) => {
    let newArray = Arrayany;
    newArray.filter((item: any, index: any) => {
      if (item.id == id) {
        newArray.splice(index, 1);
      }
    });
    setany([...newArray]);
  };
  //navigation for CategoryTypeSelectDate
  const goToSelectDate = () => {
    navigation.navigate('CategoryTypeSelectDate', {
      color: primaryColor,
      darkColor: primaryDarkColor,
      headerTitle: headerTitle,
      id:id
      
    });
  };
// RenderItem for Detail list
  const ItemRender = ({item, index}: any) => (
    
        <TouchableOpacity  activeOpacity={0.5} onPress={() => selectedArea()}
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

          <Text style={[styles.viewdetails, {color: primaryDarkColor}]}>
            View details
          </Text>
     
      </View>

      <View
        style={{
          position: 'absolute',
          right: responsiveWidth(5),
          bottom: responsiveHeight(10),
        }}>
        <IonIcon
          style={styles.icon}
          name="add-circle-outline"
          color={primaryDarkColor}
          size={25}></IonIcon>
      </View>
      </TouchableOpacity>

  );
  //RenderItem for List shown horizonatal of selected services
  const service = (item: any) => {
    return (
      <>
        <View style={styles.promoCodeView}>
          {/* name  */}
          <View
            style={{
              marginHorizontal: responsiveWidth(2),
              alignSelf: 'center',
              top: 5,
              flexDirection: 'row',
              height: responsiveHeight(5),
            }}>
            <Text
              style={{
                fontFamily: fontFamily.regular,
                color: colors.black,
              }}>
              {item.item.title}
            </Text>
            {/* close icon */}
            <TouchableOpacity onPress={() => removeItem(item.item.id)}>
              <IonIcon
                name={'close'}
                size={20}
                color={colors.promocode}></IonIcon>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <View style={[styles.container,
            {backgroundColor: id == 2 ? colors.lightblue : colors.lightpurple},]}>
        {/* Flex header */}
        <View
          style={[
            styles.header,
            {backgroundColor: id == 2 ? colors.lightblue : colors.lightpurple},
          ]}>
            {/*header title */}
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
          {/* selected service list */}
          <FlatList
            data={Arrayany}
            horizontal={true}
            renderItem={service}
            showsHorizontalScrollIndicator={false}
          />
          {/* Item selected from the previous page */}
          <View style={styles.bodyhead}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.acimage}
                source={
                  id == 2
                    ? require('../../../../assets/Images/acimage.png')
                    : id == 3
                    ? require('../../../../assets/Images/waxing.png')
                    : null
                }></Image>
              <Text style={styles.actext}>{selectedTitle}</Text>
            </View>
          </View>

          {/* Flatlist */}
          <FlatList
            style={{marginLeft: responsiveWidth(5)}}
            data={id == 2 ? acservices : id == 3 ? salonservice : null}
            renderItem={ItemRender}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: responsiveHeight(10)}}
          />
        </View>

        <Button
          name={'Next'}
          color={primaryDarkColor}
          bottom={responsiveHeight(2)}
          position="absolute"
          onPress={goToSelectDate}
        />
      </View>

      <BottomSheet2
        isVisible={isModalVisible}
        squareImage={true}
        header={'AC Repair (window/Split)'}
        setIsVisible={() => setModalVisible(false)}
        secondinput={true}
        parentCallback={(value: any) => {
          //console.log('value==', value);
          let data = value;
          setany([...Arrayany, data]);
        }}
        ioncolor={primaryDarkColor}
      />
    </>
  );
};
export default CategoryTypeDetail;
