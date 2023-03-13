import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {ScrollView} from 'react-native-gesture-handler';
import Progressbar from '../../components/Progressbar/Progressbar';
import {
  colors,
  fontFamily,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../styles/variables';
import {showToast} from '../../utils/commonUtils';
import {styles} from '../BottomSheet/Bottomsheet2Styles';

const services: any = [
  {
    id: 1,
    description: 'AC is not reaching the desired temperature in 30-45 mins',
    title: 'Less/ no cooling',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
    icon: 'add-circle-outline',
  },
  {
    id: 2,
    description: 'AC is not reaching the desired temperature in 30-45 mins',
    title: 'Power on Issue',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
    icon: 'add-circle-outline',
  },
  {
    id: 3,
    description: 'AC is not reaching the desired temperature in 30-45 mins',
    title: 'Unwanted noise/ smell',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
    icon: 'add-circle-outline',
  },
  {
    id: 4,
    description: 'AC is not reaching the desired temperature in 30-45 mins',
    title: 'Nitrogen Problem',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
    icon: 'add-circle-outline',
  },
  {
    id: 5,
    description: 'AC is not reaching the desired temperature in 30-45 mins',
    title: 'Water Leakage',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
    icon: 'add-circle-outline',
  },
  {
    id: 6,
    description: 'AC is not reaching the desired temperature in 30-45 mins',
    title: 'Bad Smell',
    rating: '4.8 (87k)',
    price: 'Starts at $159',
    time: '35 Mins',
    icon: 'add-circle-outline',
  },
];
const expert: any = [
  {
    id: 1,
    name: 'Experienced Professionals',
    color: colors.shadowgreen,
  },
  {
    id: 2,
    name: 'Trusted by Million Users',
    color: colors.shadowpink,
  },
  {
    id: 3,
    name: 'Experienced Professionals',
    color: colors.green2,
  },
  {
    id: 4,
    name: 'Experienced Professionals',
    color: colors.shadowgreen,
  },
  {
    id: 5,
    name: 'Experienced Professionals',
    color: colors.shadowpink,
  },
  {
    id: 6,
    name: 'Experienced Professionals',
    color: colors.green2,
  },
];
const review: any = [
  {
    id: 1,
    images: require('../../assets/Images/users.png'),
    username: 'Nazima',
    month: 'Jun 2020',
    star: 5,
    review: 'Good services provided by Ms. Roma',
  },
  {
    id: 2,
    images: require('../../assets/Images/users.png'),
    username: 'Nazima',
    month: 'Jun 2020',
    star: 5,
    review: 'Good services provided by Ms. Roma',
  },
  {
    id: 3,
    images: require('../../assets/Images/users.png'),
    username: 'Nazima',
    month: 'Jun 2020',
    star: 5,
    review: 'Good services provided by Ms. Roma',
  },
  {
    id: 4,
    images: require('../../assets/Images/users.png'),
    username: 'Nazima',
    month: 'Jun 2020',
    star: 5,
    review: 'Good services provided by Ms. Roma',
  },
  {
    id: 5,
    images: require('../../assets/Images/users.png'),
    username: 'Nazima',
    month: 'Jun 2020',
    star: 5,
    review: 'Good services provided by Ms. Roma',
  },
];
const faqs: any = [
  {question: 'What are the benefits of Plus Membership?', id: 1},
  {question: 'How does 100% money back guarantee work?', id: 2},
  {question: 'Is there a limit to maximum discount per transaction?', id: 3},
];
const Bottomsheet2 = ({
  isVisible,
  setIsVisible,
  header,
  ioncolor,
  parentCallback,
}: any) => {
  const [drawerId, setdrawerId] = useState(null);
  {
    /* Icon click to add service */
  }
  const click = (item: any) => {
    if (item) {
      setIsVisible(false);
      parentCallback(item);
      showToast('Item Added');
    }
  };
  {
    /*Render Item for InnerFlatlist */
  }
  const ItemRender = ({item}: any) => (
    <View style={{flexDirection: 'row', marginTop: spaceVertical.semiSmall}}>
      <View>
        <Text style={styles.boldletters}>{item.title}</Text>

        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.starimage}
            source={require('../../assets/Images/star.png')}></Image>
          <Text style={styles.ratingtext}>{item.rating}</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.pricetext}>{item.price}</Text>
          <Image
            style={{top: 4, left: 6}}
            source={require('../../assets/Images/dots.png')}></Image>
          <Text
            style={[
              styles.pricetext,
              {
                marginLeft: marginHorizontal.toosmall,
                color: colors.graytext,
              },
            ]}>
            {item.time}
          </Text>
        </View>

        <Text style={styles.desc}>{item.description}</Text>
        <View style={styles.line}></View>
      </View>
      {/*add icon */}
      <TouchableOpacity onPress={() => click(item)}>
        <IonIcon
          style={styles.icon}
          name={item.icon}
          color={ioncolor}></IonIcon>
      </TouchableOpacity>
    </View>
  );
  {
    /*Render Item for Horizontal FLatlist */
  }
  const RenderItem = ({item}: any) => (
    <View style={[styles.horizontallist, {backgroundColor: item.color}]}>
      <Text style={styles.box}>{item.name}</Text>
    </View>
  );

  {
    /*Render Item for Reviews */
  }
  const Reviews = ({item}: any) => (
    <View style={styles.reviewview}>
      <Image style={styles.userimage} source={item.images}></Image>
      <View style={{left: responsiveWidth(2)}}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.months}> {item.month}</Text>
        <Text style={styles.months}>{item.review}</Text>
      </View>
      <View style={styles.innerreview}>
        <Image
          style={styles.blackstar}
          source={require('../../assets/Images/blackstar.png')}></Image>
        <Text
          style={{
            left: responsiveHeight(1),
            bottom: responsiveHeight(0.9),
            fontFamily: fontFamily.semiBold,
          }}>
          5
        </Text>
      </View>
    </View>
  );
  const scrollRef: any = useRef(null);
  return (
    <>
      <Modal
        isVisible={isVisible}
        backdropTransitionInTiming={0}
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating
        avoidKeyboard={true}
        useNativeDriver={true}
        style={{
          margin: 0,
        }}>
        <View style={styles.bottomsheetview}>
          <TouchableOpacity style={styles.close}>
            <IonIcon
              onPress={setIsVisible}
              name="close-circle"
              style={styles.ionicons}></IonIcon>
          </TouchableOpacity>
          <View
            style={{
              marginTop: responsiveHeight(3.6),
              flex: 1,
            }}>
            <Text
              style={[
                styles.headertext,
                {marginLeft: marginHorizontal.normal},
              ]}>
              {header}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: marginHorizontal.normal,
              }}>
              <Image
                style={styles.starimage}
                source={require('../../assets/Images/star.png')}></Image>
              <Text style={styles.ratingtext}>4.8 (87k)</Text>
            </View>
            <View style={[styles.line, {alignSelf: 'center'}]}></View>

            <ScrollView contentContainerStyle={styles.innermainview}>
              <View
                style={{
                  height: responsiveHeight(40),
                  marginLeft: marginHorizontal.normal,
                }}>
                <ScrollView horizontal={true}>
                  {/*flatlist of innerflatlist */}
                  <FlatList
                    nestedScrollEnabled
                    data={services}
                    showsVerticalScrollIndicator={false}
                    renderItem={ItemRender}
                    keyExtractor={item => item.id}
                  />
                </ScrollView>
              </View>

              <Text
                style={[
                  styles.boldletters,
                  {
                    marginLeft: marginHorizontal.normal,
                    marginTop: spaceVertical.small,
                  },
                ]}>
                Expert Technicians
              </Text>
              {/*flatlist of horizonatallist */}
              <FlatList
                data={expert}
                renderItem={RenderItem}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                  paddingRight: responsiveWidth(5),
                  paddingLeft: marginHorizontal.small,
                }}
                horizontal={true}
                style={{marginTop: spaceVertical.extraSmall}}
              />
              <View style={{marginLeft: marginHorizontal.normal}}>
                <Text
                  style={[
                    styles.boldletters,
                    {
                      marginTop: spaceVertical.small,
                    },
                  ]}>
                  FAQs
                </Text>
                {/* Questions */}
                {faqs.map((item: any, index: any) => (
                  <View key={index}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: responsiveWidth(89),
                      }}>
                      <Text style={styles.faqtext}>{item.question}</Text>
                    </View>

                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        right: responsiveWidth(8),
                        top: responsiveHeight(2),
                      }}>
                      <IonIcon
                        name={
                          drawerId == item.id
                            ? 'chevron-down'
                            : 'chevron-forward'
                        }
                        color={'black'}
                        size={25}
                        onPress={() => {
                          if (drawerId == item.id) {
                            setdrawerId(null);
                          } else {
                            LayoutAnimation.configureNext(
                              LayoutAnimation.Presets.easeInEaseOut,
                            );
                            setdrawerId(item.id);
                            scrollRef.current?.scrollTo({
                              y: 0,
                              animated: true,
                            });
                          }
                        }}
                      />
                    </TouchableOpacity>
                    {drawerId == item.id ? (
                      <Text style={{color: colors.locationtext}}>
                        The Answer is yet to be Disclose
                      </Text>
                    ) : null}

                    <View style={styles.line}></View>
                  </View>
                ))}

                <Text
                  style={[
                    styles.boldletters,
                    {marginTop: spaceVertical.small},
                  ]}>
                  Customer Reviews
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{
                      height: responsiveHeight(3),
                      width: responsiveWidth(6),
                    }}
                    source={require('../../assets/Images/star.png')}></Image>
                  <Text style={[styles.boldletters]}>4.78</Text>
                </View>
                <Text style={[styles.bstext]}>46.3k reviews</Text>
                <View>
                  <Progressbar progress={0.8} reviewcount={5} text={'41.4 k'} />
                  <Progressbar progress={0.3} reviewcount={4} text={'3k'} />
                  <Progressbar progress={0.12} reviewcount={3} text={'883'} />
                  <Progressbar progress={0.09} reviewcount={2} text={'335'} />
                  <Progressbar progress={0.02} reviewcount={1} text={'425'} />
                </View>
                <View
                  style={[styles.line, {top: responsiveHeight(3.5)}]}></View>
                <ScrollView horizontal={true}>
                  <FlatList
                    data={review}
                    showsVerticalScrollIndicator={false}
                    renderItem={Reviews}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{
                      paddingBottom: responsiveHeight(28),
                    }}
                  />
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};
export default Bottomsheet2;
