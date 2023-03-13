import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';

import {borderRadius, colors, responsiveHeight} from '../../styles/variables';
import {showToast} from '../../utils/commonUtils';

import Button from '../Button/Button';

import {styles} from './SalonServicesstyles';
import Womensaloon from '../SaloonforWomen/Womensaloon';

const SalonServices = ({type, navigation}: any) => {


  const womensalon: any = [
    {
      id: 1,
      image: require('../../assets/Images/waxing.png'),
      name: 'Waxing',
    },
    {
      id: 2,
      image: require('../../assets/Images/cleanup.png'),
      name: 'Cleanup & Facials',
    },
    {
      id: 3,
      image: require('../../assets/Images/bleach.png'),
      name: 'Bleach & Detan',
    },
    {
      id: 4,
      image: require('../../assets/Images/pedicure.png'),
      name: 'Pedicure',
    },
    {
      id: 5,
      image: require('../../assets/Images/manicure.png'),
      name: 'Manicure',
    },
    {
      id: 6,
      image: require('../../assets/Images/haircare.png'),
      name: 'Hair Care',
    },
    {
      id: 7,
      image: require('../../assets/Images/eyebrow.png'),
      name: 'Low Contact Threading',
    },
  ];

 

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
          <Womensaloon data={womensalon} />
        ) :null}
      </ScrollView>


    </>
  );
};
export default SalonServices;
