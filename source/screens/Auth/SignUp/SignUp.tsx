import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import Button from '../../../components/Button/Button';
import {colors, responsiveHeight} from '../../../styles/variables';
import API from '../../../utils/API';
import {styles} from './SignUpStyles';
import * as CryptoJS from 'crypto-js';
import {
  decryptData,
  decryptData1,
  ENCRYPTKEY,
  IV,
} from '../../../utils/commonUtils';

const SignUp = ({navigation}: any) => {
  // states
  const [countryCode, setcountryCode] = useState(91);
  const [Form, setForm] = useState({
    number: '',
  });
  const [NumberError, setNumberError] = useState(false);
  const [countryImage, setcountryImage]: any = useState('IN');
  const [needLoading, setneedLoading] = useState(false);
  const [PhoneNumberError, setPhoneNumberError] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const mobileRegex = /^[0-9]{10}$/;

  const otpverify = async () => {
    let {number} = Form;
    setneedLoading(true);

    let combineNumber = `+${countryCode} ${number}`;

    if (!mobileRegex.test(number) || number.length < 10) {
      setPhoneNumberError(true);
      setneedLoading(false);
      return;
    }

    let key1 = CryptoJS.enc.Utf8.parse(ENCRYPTKEY);
    var iv = CryptoJS.enc.Utf8.parse(IV);
    let encryptData = CryptoJS.AES.encrypt(
      JSON.stringify({country_code: `+${countryCode}`, phone: number}),
      key1,
      {iv: iv, mode: CryptoJS.mode.CBC},
    ).toString();
    console.log('encryptData=', encryptData);

    let requestData = {
      data: encryptData,
    };
    navigation.navigate('Otpverification', {
                 cCode: countryCode,
                phoneNumber: number,
             });

    // let requestData1 = {
    //   mobileNo: number
    // }

    // API.post('enduser/EndUserLogin', requestData)
    //   .then((res: any) => {
    //     try {
    //       console.log('res==', res.data);
    //       if (res.data.status == 'success') {
    //         let a = decryptData1(res.data.cipherText);
    //         console.log('a==', a);
    //         setneedLoading(false);
    //         navigation.navigate('Otpverification', {
    //           cCode: countryCode,
    //           phoneNumber: number,
    //         });
    //       }
    //     } catch (e) {
    //       console.log('e==', e);
    //       setneedLoading(false);
    //     }
    //   })
    //   .catch((err: any) => {
    //     console.log('err==', err);
    //     setneedLoading(false);
    //   });

    // setTimeout(() => {
    //   setneedLoading(false);
    //   navigation.navigate('Otpverification', {
    //     cCode: countryCode,
    //     phoneNumber: number,

    //   })
    // }, 1500);

    // try
    // {
    //   const confirmation: any = await auth().signInWithPhoneNumber(combineNumber);
    //   console.log("confirmation==",confirmation);
    //   setConfirm(confirmation);
    //   setTimeout(() => {
    //     setneedLoading(false);
    //     navigation.navigate('Otpverification', {
    //       cCode: countryCode,
    //       phoneNumber: number,

    //     })
    //   }, 1500);
    // }
    // catch (error: any)
    // {
    //   console.log("error==",error);
    //   setneedLoading(false);
    //   return;
    // }
  };

  return (
    <View style={styles.container}>
      {/* welcome image */}
      <View>
        <Image
          source={require('../../../assets/Images/welcome.png')}
          style={[styles.img, {overflow: 'visible'}]}
          resizeMode="cover"></Image>
      </View>
      {/* welcome text */}
      <Text style={styles.welcomeText}>Welcome</Text>
      {/* getstarted text */}
      <Text style={styles.getStartedText}>
        Enter your phone number{'\n'}to get started.
      </Text>
      {/* phonenumber textinput */}
      <View style={styles.field}>
        <Text style={styles.label}>Phone Number</Text>

        <View style={styles.inputText}>
          <TouchableWithoutFeedback style={styles.flagView}>
            <View style={styles.flag}>
              {/* country picker */}
              <CountryPicker
                withEmoji={false}
                withFlag={true}
                withFilter={true}
                // when picker button press you will get the country object with dial code
                onSelect={(item: any) => {
                  setcountryCode(item.callingCode);
                  setcountryImage(item.cca2);
                }}
                countryCode={countryImage}
              />
            </View>
          </TouchableWithoutFeedback>

          <TextInput
            value={'+' + countryCode}
            placeholderTextColor={colors.black}
            selectionColor={colors.primary}
            style={styles.box}
            editable={false}></TextInput>

          <View style={styles.separator}></View>

          <TextInput
            placeholder="Phone Number"
            selectionColor={colors.primary}
            placeholderTextColor={colors.gray10}
            keyboardType="phone-pad"
            value={Form.number}
            onChangeText={value => {
              if (value) {
                setPhoneNumberError(false);
              }
              setForm({...Form, number: value});
            }}
            returnKeyType="next"
            style={styles.input}
          />
        </View>
      </View>

      {PhoneNumberError ? (
        <Text style={[styles.Error]}>
          {Form.number == ''
            ? 'Please enter a Phone Number'
            : 'Please enter a valid Phone Number'}
        </Text>
      ) : null}
      {/* continue button */}

      <View style={{paddingTop: responsiveHeight(3)}}>
        <Button
          name={'Continue'}
          needLoading={needLoading}
          color={colors.black}
          onPress={otpverify}
        />
      </View>
    </View>
  );
};

export default SignUp;
