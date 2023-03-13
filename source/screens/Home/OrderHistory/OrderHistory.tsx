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
  TextInput,
  View,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button/Button';
import PlainBtn from '../../../components/Button/PlainBtn';
import CategoryText from '../../../components/CategoryText/CategoryText';
import CategoryTypeHeader from '../../../components/CategoryTypeHeader/CategoryTypeHeader';
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
import {styles} from './OrderHistoryStyles';
const List = [
  {
    id: '1',
    image: require('../../../assets/Images/acrepair.png'),
    name: 'AC Repair (window/Split)',
    rating: '4.8 (87k)',
    service: 'Less/ no cooling',
    price: 159,
    duration: 35,
    time: '08:00',
  },
  {
    id: '2',
    image: require('../../../assets/Images/acrepair.png'),
    name: 'AC Repair (window/Split)',
    rating: '4.8 (87k)',
    service: 'Less/ no cooling',
    price: 159,
    duration: 35,
    time: '08:00',
  },
  {
    id: '3',
    image: require('../../../assets/Images/acrepair.png'),
    name: 'AC Repair (window/Split)',
    rating: '4.8 (87k)',
    service: 'Less/ no cooling',
    price: 159,
    duration: 35,
    time: '08:00',
  },
  {
    id: '4',
    image: require('../../../assets/Images/acrepair.png'),
    name: 'AC Repair (window/Split)',
    rating: '4.8 (87k)',
    service: 'Less/ no cooling',
    price: 159,
    duration: 35,
    time: '08:00',
  },
  {
    id: '5',
    image: require('../../../assets/Images/acrepair.png'),
    name: 'AC Repair (window/Split)',
    rating: '4.8 (87k)',
    service: 'Less/ no cooling',
    price: 159,
    duration: 35,
    time: '08:00',
  },
  {
    id: '6',
    image: require('../../../assets/Images/acrepair.png'),
    name: 'AC Repair (window/Split)',
    rating: '4.8 (87k)',
    service: 'Less/ no cooling',
    price: 159,
    duration: 35,
    time: '08:00',
  },
];

const buttons = [
  {
    id: 1,
    text: 'In Progress',
  },
  {
    id: 2,
    text: 'Completed',
  },
  {
    id: 3,
    text: 'Cancelled',
  },
];
const OrderHistory = ({navigation}: any) => {
  const [pressed, setPressed] = useState(true);
  const selectedbtn = (item: any) => {
    setPressed(item.id);
  };

  const renderitem = ({item, index}: any) => (
    <View style={styles.categoryselectview}>
      <TouchableOpacity
        onPress={() => selectedbtn(item)}
        style={[
          styles.btnbg,
          {
            backgroundColor:
              pressed == item.id ? colors.black : colors.lightgreen,
            borderWidth: 0.5,
          },
        ]}>
        <Text
          style={[
            styles.btntext,
            {color: pressed == item.id ? colors.white : colors.black},
          ]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.main}>
      <View style={styles.searchbarview}>
        <TextInput
          style={styles.search}
          placeholder="Search "
          placeholderTextColor={colors.gray10}></TextInput>
        <View style={styles.verticleLine}></View>
        {/* searchicon */}
        <Image
          style={styles.searchicon}
          resizeMode="contain"
          source={require('../../../assets/Images/serachicon.png')}></Image>
      </View>
      <Text
        style={[styles.titleText, {marginTop: 80, fontSize: fontSize.normal}]}>
        Bookings
      </Text>
      <ScrollView
        nestedScrollEnabled={true}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={buttons}
          renderItem={renderitem}
          nestedScrollEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: spaceVertical.small,
            alignSelf: 'center',
            marginLeft: marginHorizontal.small,
          }}
        />
      </ScrollView>

      <FlatList
        data={List}
        contentContainerStyle={{
          marginTop: spaceVertical.tiny,
          paddingBottom: spaceVertical.XXXBig,
        }}
        renderItem={({item}) => (
          <View style={styles.details}>
            <TouchableOpacity
              onPress={() => navigation.navigate('BookingDetails')}
              style={{flexDirection: 'row', padding: 20}}>
              <Image style={styles.acrepairimage} source={item.image} />
              <View style={{marginLeft: responsiveWidth(3)}}>
                <Text style={styles.titleText}>{item.name}</Text>
                <Text style={styles.smalltext}>{item.service}</Text>
                <View style={styles.servicebtn}>
                  <Text style={styles.text}>Appliences</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: responsiveHeight(1),
                  }}>
                  <Text style={styles.pricetext}>Total $ {item.price}</Text>
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
                    {item.duration} Min
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
                    {item.time} pm
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                top: 120,
                left: 20,
              }}>
              <Image
                style={styles.starimage}
                source={require('.././../../assets/Images/star.png')}></Image>
              <Text style={[styles.ratingtext, {top: 6}]}>{item.rating}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );

  // const [drawerId, setdrawerId] = useState(null);
  // const [typeArray, setTypeArray]: any = useState([]);

  // const itemArray: any = [
  //     {
  //         id: 1,
  //         image: require('../../../assets/Images/bedroom.png'),
  //         name: "Bedroom",
  //         qty: 3
  //     },
  //     {
  //         id: 2,
  //         image: require('../../../assets/Images/hall.png'),
  //         name: "Hall",
  //         qty: 1
  //     },
  //     {
  //         id: 3,
  //         image: require('../../../assets/Images/bedroom.png'),
  //         name: "Kitchen",
  //         qty: 1
  //     },
  //     {
  //         id: 4,
  //         image: require('../../../assets/Images/bathroom.png'),
  //         name: "Bathroom",
  //         qty: 3
  //     }
  // ]

  // const scrollRef: any = useRef(null);

  // React.useEffect(() => {
  //     const unsubscribe = navigation.addListener('focus', () => {
  //         setdrawerId(null);
  //         if (Platform.OS === 'android') {
  //             if (UIManager.setLayoutAnimationEnabledExperimental) {
  //                 UIManager.setLayoutAnimationEnabledExperimental(true);
  //             }
  //         }
  //         AsyncStorage.getItem('OrderData').then((res: any) => {
  //             let orderHistoryList: any = JSON.parse(res);
  //             setTypeArray(orderHistoryList?.reverse());
  //         });
  //     });

  //     return unsubscribe;
  // }, [navigation]);

  // const renderItem = ({ item }: any) => (
  //     <>
  //         <View style={{
  //             backgroundColor: colors.lightgreen,
  //             borderRadius: borderRadius.semiLarge,
  //             padding: 3,
  //             width: responsiveWidth(18),
  //             height: responsiveWidth(18),
  //             alignItems: 'center',
  //             justifyContent: 'center',
  //             marginTop: responsiveHeight(2)
  //         }}>
  //             <Image style={styles.categoryimage} source={item.image}
  //                 resizeMode="contain" />
  //         </View>
  //         <View style={{
  //             marginTop: responsiveHeight(2),
  //             marginLeft: marginHorizontal.extraSmall,
  //             justifyContent: 'center'
  //         }}>
  //             <Text style={styles.itemQty}>{item.qty}</Text>
  //             <Text style={styles.itemName}>{item.name}</Text>
  //         </View>
  //     </>
  // );

  // const goToServices = () => {
  //     navigation.navigate("Home");
  // }

  // return (
  //     <><View style={styles.header}>

  //         <CategoryTypeHeader name={'Order History'}
  //             back={true}
  //             notification={true}
  //             cart={false}
  //             navigation={navigation}
  //             bgColor={colors.lightgreen} />
  //     </View>

  //         <ScrollView contentContainerStyle={styles.container}>
  //             <ScrollView ref={scrollRef}
  //                 showsVerticalScrollIndicator={false}>

  //                 <Pressable style={{
  //                     width: responsiveWidth(95),
  //                     marginBottom: responsiveHeight(5)
  //                 }}>
  //                     <Animated.View>
  //                         {typeArray != null ?
  //                             <>
  //                                 {typeArray.map((item: any, index: any) => (
  //                                     <View key={index}>
  //                                         <View key={index} style={[styles.locationName,(drawerId == item.id ? {
  //                                                           borderTopLeftRadius:borderRadius.boxRadius,
  //                                                           borderTopRightRadius:borderRadius.boxRadius
  //                                                           } :
  //                                                           {
  //                                                           borderRadius:borderRadius.boxRadius
  //                                                           })]}>

  //                                             <View style={{ flexDirection: 'row', alignItems: 'center', }}>
  //                                                 <Text style={styles.titleText}>{item.type}</Text>
  //                                                 <Text style={styles.price}>$ {item.totalPrice}</Text>
  //                                             </View>

  //                                             <View style={{
  //                                                 flexDirection: 'row',
  //                                                 alignItems: 'center',
  //                                                 marginTop: responsiveHeight(2)
  //                                             }}>
  //                                                 <Text style={styles.titleText}>{item.workingHours} h</Text>
  //                                                 <Text style={styles.price}>{item.date}</Text>
  //                                             </View>

  //                                             <TouchableOpacity style={{ position: 'absolute', right: responsiveWidth(4), }}>
  //                                                 <IonIcon name={drawerId == item.id ? "chevron-down" : "chevron-forward"} color={'black'} size={25}
  //                                                     onPress={() => {
  //                                                         if (drawerId == item.id) {
  //                                                             setdrawerId(null);
  //                                                         } else {
  //                                                             LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  //                                                             setdrawerId(item.id);
  //                                                             scrollRef.current?.scrollTo({
  //                                                                 y: 0,
  //                                                                 animated: true,
  //                                                             });
  //                                                         }
  //                                                     }} />
  //                                             </TouchableOpacity>
  //                                         </View>

  //                                         {drawerId == item.id ?
  //                                             <>
  //                                                 <View style={styles.subView}>
  //                                                     <View style={{ marginVertical: responsiveHeight(2), marginHorizontal: responsiveWidth(5) }}>
  //                                                         <Text style={styles.orderNo}>Order No : {Math.floor(Math.random() * 90 + 10)}</Text>

  //                                                         <View style={styles.orderItems}>
  //                                                             <ScrollView horizontal={true}
  //                                                             showsHorizontalScrollIndicator={false}>
  //                                                                 <FlatList
  //                                                                     data={typeArray[index].orderData}
  //                                                                     renderItem={renderItem}
  //                                                                     keyExtractor={(item: any) => item.id}
  //                                                                     numColumns={2}
  //                                                                     showsHorizontalScrollIndicator={false}
  //                                                                     showsVerticalScrollIndicator={false} />
  //                                                             </ScrollView>
  //                                                         </View>

  //                                                         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  //                                                             <Text style={styles.orderNo}>Payment Mode:</Text>
  //                                                             <Text style={styles.paymentMethod}>{item.paymentMode}</Text>
  //                                                         </View>

  //                                                         <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: spaceVertical.extraSmall }}>
  //                                                             <Text style={styles.orderNo}>Service Status:</Text>
  //                                                             <Text style={styles.serviceStatus}>{item.serviceStatus}</Text>
  //                                                         </View>

  //                                                     </View>
  //                                                 </View>
  //                                             </>
  //                                             : null}

  //                                     </View>
  //                                 ))}
  //                             </>
  //                             :
  //                             <>
  //                                 <View style={{
  //                                     alignItems: 'center',
  //                                     marginTop: "50%"
  //                                 }}>
  //                                     <Text style={{
  //                                         fontFamily: fontFamily.medium,
  //                                         fontSize: fontSize.normal,
  //                                         color: colors.black,
  //                                     }}>You Have No Orders!</Text>

  //                                     <View style={{ marginTop: spaceVertical.extraSmall }}>
  //                                         <Button color={colors.darkPrimary}
  //                                             name={"Browse Services"}
  //                                             onPress={goToServices} />
  //                                     </View>
  //                                 </View>
  //                             </>
  //                         }
  //                     </Animated.View>
  //                 </Pressable>
  //             </ScrollView>
  //         </ScrollView></>
  // )
};

export default OrderHistory;
