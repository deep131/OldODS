import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/MaterialIcons';
import {
  borderRadius,
  colors,
  fontFamily,
  marginHorizontal,
  responsiveWidth,
  spaceVertical,
} from '../../styles/variables';
import Bottomsheet from '../BottomSheet/Bottomsheet';
import {styles} from './ShoppingMallStyles';

const ShoppingMall = ({data}: any) => {
  const [itemArea, setItemArea] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const selectedArea = (item: any) => {
    setItemArea(item.id);
  };
  const handleCallback = (childData: object) => {
    data.push(childData);
    console.log(">>>",data);

    setModalVisible(false);
  };
  const addother = () => {
    setModalVisible(true);
  };
  const areaRender = ({item, index}: any) => (
    <>
      <TouchableOpacity
        style={[
          styles.itemview,
          itemArea == item.id
            ? {borderColor: colors.darkPrimary, borderWidth: 1, elevation: 2}
            : null,
        ]}
        activeOpacity={0.9}
        onPress={() => selectedArea(item)}>
        <View
          style={{
            marginLeft: responsiveWidth(2),
            marginTop: spaceVertical.extraSmall,
          }}>
          <Text style={{fontFamily: fontFamily.medium, color: colors.black}}>
            {item.carpetRange} sq.ft.
            {console.log("area",item.carpetRange)}

          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IonIcon name="star" size={15} color="#FFc700" />
            <Text
              style={{
                fontFamily: fontFamily.medium,
                color: colors.gray10,
                marginLeft: marginHorizontal.extraSmall,
              }}>
              {item.rating}({item.reviews})
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{fontFamily: fontFamily.medium, color: colors.darkGray}}>
              {item.price}
            </Text>
            <Image
              style={styles.plus}
              source={require('../../assets/Images/dot.png')}
              resizeMode="contain"></Image>
            <Text style={{fontFamily: fontFamily.medium, color: colors.gray10}}>
              {item.time}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );

  return (
    <View>
      <Text style={styles.text}>Shopping Mall</Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <ScrollView horizontal={true}>
          <FlatList
            data={data}
            renderItem={areaRender}
            keyExtractor={item => item.id}
            numColumns={2}
            ListFooterComponent={() => (
              <TouchableOpacity onPress={addother}
                style={{
                  marginTop: spaceVertical.extraSmall,
                  marginLeft: marginHorizontal.extraSmall,
                  borderWidth: 1,
                  width: responsiveWidth(40),
                  marginBottom: spaceVertical.extraSmall,
                  padding: 5,
                  borderRadius: borderRadius.boxRadius,
                  borderColor: colors.darkPrimary,
                  backgroundColor: '#DCF2EA',
                }}
                activeOpacity={0.7}>
                <Text
                  style={{
                    fontFamily: fontFamily.medium,
                    color: colors.black,
                    alignSelf: 'center',
                  }}>
                  Add Other
                </Text>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>

      <View
        style={{
          marginLeft: responsiveWidth(2),
          marginVertical: spaceVertical.small,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={styles.lastCompImage}
          source={require('../../assets/Images/price.png')}
          resizeMode="contain"></Image>

        <View
          style={{alignItems: 'center', marginLeft: marginHorizontal.small}}>
          <Text
            style={{color: colors.darkGray, fontFamily: fontFamily.regular}}>
            Price
          </Text>
          <Text
            style={{
              color: colors.darkPrimary,
              fontFamily: fontFamily.semiBold,
            }}>
            $ 358
          </Text>
        </View>

        <Image
          style={[styles.lastCompImage, {marginLeft: responsiveWidth(10)}]}
          source={require('../../assets/Images/clock.png')}
          resizeMode="contain"></Image>

        <View
          style={{alignItems: 'center', marginLeft: marginHorizontal.small}}>
          <Text
            style={{color: colors.darkGray, fontFamily: fontFamily.regular}}>
            Hours
          </Text>
          <Text
            style={{
              color: colors.darkPrimary,
              fontFamily: fontFamily.semiBold,
            }}>
            3 hr 30 min
          </Text>
        </View>
      </View>
      <Bottomsheet
        headertext={'Carpet Area'}
        isVisible={isModalVisible}
        squareImage={true}
       setIsVisible={() => setModalVisible(false)}
        //imagevisible={shouldShow}
       parentCallback={handleCallback}
        secondinput={true}
        //setImagevisible={setShouldShow}
        btntext={'Add'}

      />
    </View>
    
  );
};
export default ShoppingMall;
