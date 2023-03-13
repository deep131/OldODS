import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getItemData} from '../../redux/Actions/CategoryTypeActions/CategoryTypeAction';
import {borderRadius, colors, responsiveHeight} from '../../styles/variables';
import {showToast} from '../../utils/commonUtils';
import Apartment from '../Apartment/Apartment';
import Bunglow from '../Bunglow/Bunglow';
import Button from '../Button/Button';
import Commercial from '../Commercial/Commercial';
import ShoppingMall from '../ShoppingMall/ShoppingMall';
import {styles} from './BuildingsStyles';

const Buildings = ({type, navigation}: any) => {
  const dispatch = useDispatch();
  const appState = useSelector((state: any) => state);
  const listData = appState.CategoryTypeReducer.data;

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    dispatch(getItemData() as any);
  };

  const CommercialCarpetAreas: any = [
    {
      id: 3,
      start: "1000",
      end: "2000",
      carpetRange: "1000 - 2000 sq.ft",
      time: "2",
      cost: "200",
      createdAt: "2022-10-20T05:56:35.000Z",
      updatedAt: "2022-10-20T05:56:35.000Z"
  },
  {
      id: 4,
      start: "2000",
      end: "3000",
      carpetRange: "2000 - 3000 sq.ft",
      time: "3",
      cost: "300",
      createdAt: "2022-10-20T05:57:17.000Z",
      updatedAt: "2022-10-20T05:57:17.000Z"
  },
  {
      id: 5,
      start: "3000",
      end: "4000",
      carpetRange: "3000 - 4000 sq.ft",
      time: "4",
      cost: "400",
      createdAt: "2022-10-20T05:57:44.000Z",
      updatedAt: "2022-10-20T05:57:44.000Z"
  },
  ];

  const shoppingmallData: any = [
    {
      id: 1,
      carpetRange: '2000-3000',
      rating: '4.8',
      reviews: '87k',
      price: '$1599',
      time: '6 hrs',
    },
    {
      id: 2,
      carpetRange: '3000-4000 ',
      rating: '4.8',
      reviews: '87k',
      price: '$1799',
      time: '8 hrs',
    },
    {
      id: 3,
      carpetRange: '4000-5000 ',
      rating: '4.8',
      reviews: '87k',
      price: '$1899',
      time: '8 hrs',
    },
    {
      id: 4,
      carpetRange: '5000-6000 ',
      rating: '4.8',
      reviews: '87k',
      price: '$1599',
      time: '9 hrs',
    },
    {
      id: 5,
      carpetRange: '6000-7000 ',
      rating: '4.8',
      reviews: '87k',
      price: '$1799',
      time: '9 hrs',
    },
  ];

  const goToSelectDate = () => {
    let a = listData.reduce(function (sum: any, current: any) {
      return sum + current.total;
    }, 0);
    if (a != 0) {
      navigation.navigate('CategoryTypeSelectDate', {
        color: colors.lightgreen,
        darkColor: colors.darkPrimary,
        headerTitle: 'Cleaning Service',
      });
    } else {
      showToast('Please Add an Item');
    }
  };

  return (
    <>
      <ScrollView
        style={[
          styles.container,
          type == 1
            ? {
                borderTopRightRadius: borderRadius.medium,
              }
            : type != 1 && type != 4
            ? {
                borderTopLeftRadius: borderRadius.medium,
                borderTopRightRadius: borderRadius.medium,
              }
            : type == 4
            ? {
                borderTopLeftRadius: borderRadius.medium,
              }
            : null,
          {
            borderBottomRightRadius: borderRadius.medium,
            borderBottomLeftRadius: borderRadius.medium,
          },
        ]}>
        {type == 1 ? (
          <Apartment data={listData} />
        ) : type == 2 ? (
          <Bunglow data={listData} />
        ) : type == 3 ? (
          <Commercial area={CommercialCarpetAreas} data={listData} />
        ) : type == 4 ? (
          <ShoppingMall data={shoppingmallData} />
        ) : null}
      </ScrollView>

      <View style={{marginBottom: responsiveHeight(3)}}>
        <Button
          name={'Next'}
          color={colors.darkPrimary}
          onPress={goToSelectDate}
        />
      </View>
    </>
  );
};
export default Buildings;
