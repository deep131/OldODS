import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../styles/variables';
import Bottomsheet from '../BottomSheet/Bottomsheet';
import {styles} from './CommercialStyles';

const Commercial = ({area}: any) => {
  const [itemArea, setItemArea] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const [count, setCount] = useState(0);

  const handleCallback = (childData: any) => {
    // const object = {id: count, area: childData};
    // setCount(prevState => prevState + 6);
    setModalVisible(false);
    area.push(childData);
  
  };

  const selectedArea = (item: any) => {
    setItemArea(item.id);
  };

  const addother = () => {
    setModalVisible(true);
  };

  const areaRender = ({item, index}: any) => (
    <>
      <ScrollView style={{flex: 1}}>
        <TouchableOpacity
          style={{
            marginTop: spaceVertical.extraSmall,
            marginLeft: marginHorizontal.extraSmall,
            borderWidth: 1,
            width: responsiveWidth(40),
            padding: 5,
            borderRadius: borderRadius.boxRadius,
            borderColor: colors.darkPrimary,
            elevation: 1,
            backgroundColor:
              itemArea == item.id ? colors.darkPrimary : colors.white,
          }}
          activeOpacity={0.9}
          onPress={() => selectedArea(item)}>
          <Text
            style={{
              fontFamily: fontFamily.medium,
              color: itemArea == item.id ? colors.white : colors.black,
              alignSelf: 'center',
            }}>
            {item.carpetRange}

            {console.log("commercial",item.carpetRange)}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
  return (
    <>
      <Text style={styles.text}>Commercial</Text>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.itemview}>
          <Image
            style={styles.imagestyle}
            source={require('../../assets/Images/bedroom.png')}
            resizeMode="contain"></Image>

          <View
            style={{justifyContent: 'center', marginLeft: responsiveWidth(5)}}>
            <Text style={styles.innertext}>Bedroom</Text>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity>
                <Image
                  style={styles.plus}
                  source={require('../../assets/Images/minus.png')}
                  resizeMode="contain"></Image>
              </TouchableOpacity>

              <Text style={styles.countText}>03</Text>

              <TouchableOpacity>
                <Image
                  style={styles.plus}
                  source={require('../../assets/Images/plus.png')}
                  resizeMode="contain"></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.itemview}>
          <Image
            style={styles.imagestyle}
            source={require('../../assets/Images/hall.png')}
            resizeMode="contain"></Image>
          <View
            style={{justifyContent: 'center', marginLeft: responsiveWidth(5)}}>
            <Text style={styles.innertext}>Hall</Text>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity>
                <Image
                  style={styles.plus}
                  source={require('../../assets/Images/minus.png')}
                  resizeMode="contain"></Image>
              </TouchableOpacity>

              <Text style={styles.countText}>03</Text>

              <TouchableOpacity>
                <Image
                  style={styles.plus}
                  source={require('../../assets/Images/plus.png')}
                  resizeMode="contain"></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.areaview}>
        <View
          style={{
            paddingLeft: marginHorizontal.extraSmall,
            marginTop: spaceVertical.extraSmall,
            flexDirection: 'row',
            height: responsiveHeight(3),
          }}>
          <Image
            style={styles.plus}
            source={require('../../assets/Images/frame.png')}
            resizeMode="contain"></Image>
          <Text
            style={{
              marginLeft: marginHorizontal.toosmall,
              fontFamily: fontFamily.medium,
              color: colors.black,
            }}>
            Carpet Area
          </Text>
        </View>
        <ScrollView nestedScrollEnabled={true} style={{}}>
          <FlatList
            nestedScrollEnabled={true}
            data={area}
            renderItem={areaRender}
            keyExtractor={item => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => (
              <TouchableOpacity
                onPress={addother}
                style={{
                  marginTop: spaceVertical.extraSmall,
                  marginLeft: marginHorizontal.extraSmall,
                  borderWidth: 0.5,
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
          style={styles.plus}
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
          style={[styles.plus, {marginLeft: responsiveWidth(10)}]}
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
        imagevisible={shouldShow}
        parentCallback={handleCallback}
        secondinput={true}
        setImagevisible={setShouldShow}
        btntext={'Add'}
        inputtext={'9000 - 10,000 sp.ft.'}
        text={'Please Enter your range'}
        keyboardtype={'numeric'}
      />
    </>
  );
};
export default Commercial;
