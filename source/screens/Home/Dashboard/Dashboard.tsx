import React, { useEffect, useState } from 'react';
import {
  Alert as alert, Image, PermissionsAndroid, Text,
  TextInput, TouchableOpacity, View
} from 'react-native';

import Geocoder from 'react-native-geocoding';
import Geolocation from "react-native-geolocation-service";
import { ScrollView } from 'react-native-gesture-handler';
import Alert from '../../../components/Alert/Alert';
import CategoriesComp from '../../../components/Categories/Categories';
import CategoryText from '../../../components/CategoryText/CategoryText';
import ImageSlider from '../../../components/ImageSlider/ImageSlider';
import NewReleasesComp from '../../../components/NewReleases/NewReleases';
import TopRatedComp from '../../../components/TopRated/TopRated';
import TrendingComp from '../../../components/Trending/Trending';
import {
  borderRadius, colors, fontFamily, responsiveHeight,
  responsiveWidth
} from '../../../styles/variables';
import { GOOGLE_API_KEY } from '../../../utils/commonUtils';
import { styles } from './Dashboardstyle';
//Arrays for Flatlists
const Categories = [
  {
    id: '1',
    image: require('../../../assets/Images/category1.png'),
    name: 'Cleaning',
  },
  {
    id: '2',
    image: require('../../../assets/Images/category2.png'),
    name: 'Appliances',
  },
  {
    id: '3',
    image: require('../../../assets/Images/category3.png'),
    name: 'Salon',
  },
  {
    id: '4',
    image: require('../../../assets/Images/category1.png'),
    name: 'Cleaning',
  },
  {
    id: '5',
    image: require('../../../assets/Images/category2.png'),
    name: 'Appliances',
  },
  {
    id: '6',
    image: require('../../../assets/Images/category3.png'),
    name: 'Salon',
  },
];
const Toprated = [
  {
    id: '1',
    image: require('../../../assets/Images/toprated1.png'),
    name: 'AC Regular Service',
    rating: 3
  },
  {
    id: '2',
    image: require('../../../assets/Images/toprated2.png'),
    name: 'Full Body Waxing',
    rating: 5
  },
  {
    id: '3',
    image: require('../../../assets/Images/toprated3.png'),
    name: 'Men Hair  Cutting',
    rating: 3
  },
  {
    id: '4',
    image: require('../../../assets/Images/toprated1.png'),
    name: 'AC Regular Service',
    rating: 5
  },
  {
    id: '5',
    image: require('../../../assets/Images/toprated2.png'),
    name: 'Full Body Waxing',
    rating: 4
  },
  {
    id: '6',
    image: require('../../../assets/Images/toprated3.png'),
    name: 'Men Hair  Cutting',
    rating: 3
  },
];
const Trending = [
  {
    id: '1',
    image: require('../../../assets/Images/trending1.png'),
    name: 'Plumbing',
    rating: 5
  },
  {
    id: '2',
    image: require('../../../assets/Images/trending2.png'),
    name: 'AC Installation',
    rating: 3
  },
  {
    id: '3',
    image: require('../../../assets/Images/trending3.png'),
    name: 'Spa For Women',
    rating: 4
  },
  {
    id: '4',
    image: require('../../../assets/Images/trending1.png'),
    name: 'Plumbing',
    rating: 3
  },
  {
    id: '5',
    image: require('../../../assets/Images/trending2.png'),
    name: 'AC Installation',
    rating: 5
  },
  {
    id: '6',
    image: require('../../../assets/Images/trending3.png'),
    name: 'Spa For Woemen',
    rating: 4
  },
];

const imagesPages: any = [
  {
    id: 1,
    image: require('../../../assets/Images/Cleaning.png')
  },
  {
    id: 2,
    image: require('../../../assets/Images/Appliances.png')
  },
  {
    id:3,
    image: require('../../../assets/Images/saloonAD.png')
  }
]

const Dashboard = ({ navigation }: any) => {

  const [AlertVisible, setAlertVisible] = useState(false);

  

  const latitudeDelta = 0.025;
  const longitudeDelta = 0.025;

  const [region, setregion] = useState({
    latitudeDelta,
    longitudeDelta,
    latitude: 22.33644,
    longitude: 70.76797,
  });

  const [latitude, setlatitude] = useState(22.336440);
  const [longitude, setlongitude] = useState(70.767970);
  const [formattedAddress,setformattedAddress] = useState("");

  const searchview = () => {
    navigation.navigate('CategoryTypeSearch')
  }

  useEffect(()=>{
    locateCurrentPosition();
    getPostalAddress(region.latitude, region.longitude);
  },[]);

  const locateCurrentPosition = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "On Demand Service",
          message:
            "ODS App needs access to your location",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location")
      } else {
        alert.alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err)
    }
    
    Geolocation.getCurrentPosition(
        position => {
            setlatitude(position.coords.latitude);
            setlongitude(position.coords.longitude);
            setregion({...region,latitude : position.coords.latitude,longitude :position.coords.longitude})
            if (position.coords.latitude && position.coords.longitude) {
                getPostalAddress(position.coords.latitude, position.coords.longitude)
            }
        },
        error => {
            alert.alert(error.message.toString());
        },
    )
}

  async function getPostalAddress(lat: any, long: any) {
    await Geocoder.init(GOOGLE_API_KEY);
    Geocoder.from(lat, long)
        .then(async json => {
            // console.log("Address=",json.results[0].formatted_address);
            setformattedAddress(json.results[0].formatted_address);
        })
        .catch(error => {
            console.warn(error)
            console.log('getPostalAddress error', error)
        });
}
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#EDEDED' }}>
        {/* Flex header */}
        <View style={styles.header}>
          <Image
            style={styles.logotext}
            resizeMode="contain"
            source={require('../../../assets/Images/applogo.png')}></Image>

          <View style={styles.headerRightIcons}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => setAlertVisible(true)}>
              <Image
                style={styles.icbell}
                source={require('../../../assets/Images/logout.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5}>
              <Image
                style={styles.profileicon}
                source={require('../../../assets/Images/profileicon.png')}></Image>
            </TouchableOpacity>
          </View>

        </View>
        {/* Flex Body */}
        <View style={styles.body}>
          <View style={styles.locationview}>
            <Image
              style={styles.iclocation}
              resizeMode="contain"
              source={require('../../../assets/Images/location.png')}></Image>
            <Text style={styles.locationtext}>{formattedAddress}</Text>
          </View>
          {/* searchbar */}
          <View style={styles.searchbarview}>
            <TextInput
              style={{
                height: responsiveHeight(6),
                width: responsiveWidth(75),
                fontFamily: fontFamily.regular,
                borderRadius: borderRadius.semiLarge,
                color:colors.black
              }}
              placeholder="Search Here"
              placeholderTextColor={'gray'}>
            </TextInput>

            <View style={styles.verticleLine}></View>
            <TouchableOpacity onPress={searchview}>
              <Image
                style={styles.searchicon}
                source={require('../../../assets/Images/serachicon.png')}
              ></Image>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.headername}>Welcome Jack</Text>

            <CategoryText name={'Hot Deals'}></CategoryText>
            {/* Swiper */}
            <ImageSlider data={imagesPages} />
            {/* Title Component */}
            <CategoryText name={'Categories'}></CategoryText>
            {/*Category Flatlist */}
            <CategoriesComp data={Categories} navigation={navigation} />
            {/* Title Component */}
            <CategoryText name={'Top Rated'}></CategoryText>
            {/*Toprated Flatlist */}
            <TopRatedComp data={Toprated} navigation={navigation} />
            <CategoryText name={'Trending'}></CategoryText>
            {/*Trending Flatlist */}
            <TrendingComp data={Trending} numColumn={Trending.length} navigation={navigation} />
            <CategoryText name={'New Release'}></CategoryText>
            {/*New Release Flatlist */}
            <NewReleasesComp data={Toprated} navigation={navigation} />

          </ScrollView>
        </View>

        <Alert
          AlertVisible={AlertVisible}
          setAlertVisible={(value: any) => setAlertVisible(value)}
          AlertMsgType="signOut"
          AlertMsg="Are you sure want to Logout?"
          navigation={navigation}
        />

      </View>
    </>
  );
};
export default Dashboard;
