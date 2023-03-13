import React, {useRef, useState} from 'react';
import {
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button/Button';
import {AuthContext} from '../../../contexts/authContext';
import {
  colors,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../../styles/variables';
import API from '../../../utils/API';
import { decryptData, ENCRYPTKEY, IV } from '../../../utils/commonUtils';
import { styles } from './OtpverificationStyle';
import * as CryptoJS from 'crypto-js';
const Otpverification = ({navigation, route}: any) => {
  const {verifyOTP}: any = React.useContext(AuthContext);

  const [counter, setCounter] = useState(60);
  const {cCode, phoneNumber} = route.params;
  const timerRef = React.useRef(counter);
  const [confirm, setConfirm] = useState(null);
  const [needLoading, setneedLoading] = useState(false);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setneedLoading(false);

      let timerId = setInterval(() => {
        timerRef.current -= 1;
        if (timerRef.current < 0) {
          clearInterval(timerId);
        } else {
          setCounter(timerRef.current);
        }
      }, 1000);
      return () => {
        clearInterval(timerId);
        unsubscribe;
      };
    });
  }, [navigation]);

  const input1: any = useRef();
  const input2: any = useRef();
  const input3: any = useRef();
  const input4: any = useRef();
  const input5: any = useRef();
  const input6: any = useRef();

  const [Form, setForm] = useState({
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
    digit5: '',
    digit6: '',
  });

  const [verfying, setverfying] = useState(false);

  const backtosignup = () => {
    navigation.navigate('SignUp');
  };

  const submit = async () => {
    let combineNumber = `+${cCode} ${phoneNumber}`;
    const {digit1,digit2,digit3,digit4,digit5,digit6} = Form;

    const otpCode = digit1+digit2+digit3+digit4+digit5+digit6;

    setverfying(true);
    let key1 = CryptoJS.enc.Utf8.parse(ENCRYPTKEY);
    var iv = CryptoJS.enc.Utf8.parse(IV);
    let encryptData = CryptoJS.AES.encrypt(JSON.stringify({ country_code: `+${cCode}`, phone: phoneNumber, otpCode: otpCode}), key1, { iv: iv, mode: CryptoJS.mode.CBC }).toString();

    let requestData = {
      data: encryptData
    }
    verifyOTP(requestData,setverfying);
    // setTimeout(() => {

    //   verifyOTP(setverfying);
    // }, 500);

    // try {
    //   const confirmation: any = await auth().verifyPhoneNumber(combineNumber);
    //   setConfirm(confirmation);
    // } catch (error) {
    //   console.log("error==",error);
    //   showToast("Invalid OTP");
    // }

  }
  return (
    <>
      <View style={styles.container}>
        {/* welcome image */}
        <ImageBackground
          source={require('../../../assets/Images/bgimage.png')}
          style={[styles.img, {overflow: 'visible'}]}
          resizeMode="cover">
          <View style={styles.headertext}>
            <TouchableOpacity onPress={backtosignup}>
              <IonIcon name="arrow-back" style={styles.icon} />
            </TouchableOpacity>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.OtpverificationText}>OTP verification</Text>
            </View>

            <View style={{marginRight: responsiveWidth(5)}}></View>
          </View>

          <View style={{flex: 1}}>
            <Text style={styles.AuthenticationtText}>
              An Authentecation code has been sent to{' '}
            </Text>

            <View>
              <Text style={styles.phonenumberText}>
                (+{cCode}) {phoneNumber}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              {/* 1st box */}
              <View style={styles.innertextview}>
                <TextInput
                  style={styles.otpnumber}
                  ref={input1}
                  onChangeText={value => {
                    if (value) {
                      setForm({...Form, digit1: value});
                      input2.current?.focus();
                    }
                  }}
                  maxLength={1}
                  keyboardType="numeric"></TextInput>
              </View>
              {/* 2nd box */}
              <View style={styles.innertextview}>
                <TextInput
                  style={styles.otpnumber}
                  ref={input2}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      input1.current.focus();
                    }
                  }}
                  onChangeText={value => {
                    if (value) {
                      setForm({...Form, digit2: value});
                      input3.current?.focus();
                    } else {
                      input1.current?.focus();
                    }
                  }}
                  maxLength={1}
                  keyboardType="numeric"></TextInput>
              </View>
              {/* 3rd box */}
              <View style={styles.innertextview}>
                <TextInput
                  style={styles.otpnumber}
                  ref={input3}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      input2.current.focus();
                    }
                  }}
                  onChangeText={value => {
                    if (value) {
                      setForm({...Form, digit3: value});
                      input4.current?.focus();
                    } else {
                      input2.current?.focus();
                    }
                  }}
                  maxLength={1}
                  keyboardType="number-pad"></TextInput>
              </View>
              {/* 4th box */}
              <View style={styles.innertextview}>
                <TextInput
                  style={styles.otpnumber}
                  ref={input4}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      input3.current.focus();
                    }
                  }}
                  onChangeText={value => {
                    if (value) {
                      setForm({...Form, digit4: value});
                      input5.current?.focus();
                    } else {
                      input3.current?.focus();
                    }
                  }}
                  maxLength={1}
                  keyboardType="numeric"></TextInput>
              </View>
              {/* 5th box */}
              <View style={styles.innertextview}>
                <TextInput
                  style={styles.otpnumber}
                  ref={input5}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      input4.current.focus();
                    }
                  }}
                  onChangeText={value => {
                    if (value) {
                      setForm({...Form, digit5: value});
                      input6.current?.focus();
                    } else {
                      input4.current?.focus();
                    }
                  }}
                  maxLength={1}
                  keyboardType="numeric"></TextInput>
              </View>
              {/* 6th box */}
              <View style={styles.innertextview}>
                <TextInput
                  style={styles.otpnumber}
                  ref={input6}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      input5.current.focus();
                    }
                  }}
                  onChangeText={value => {
                    if (value) {
                      setForm({...Form, digit6: value});
                      Keyboard.dismiss();
                    } else {
                      input5.current.focus();
                    }
                  }}
                  maxLength={1}
                  keyboardType="numeric"></TextInput>
              </View>
            </View>
            <View style={{marginTop: responsiveHeight(32)}}>
              <Button
                name={'Submit'}
                needLoading={verfying}
                onPress={submit}
                color={colors.black}>
                {' '}
              </Button>
            </View>
            <View
              style={{alignSelf: 'center', marginTop: spaceVertical.normal}}>
              {counter > 0 ? (
                <Text style={styles.lowertext}>
                  Code Sent. Resend OTP in{' '}
                  <Text
                    style={{color: colors.primary, fontSize: fontSize.normal}}>
                    00:{counter}
                  </Text>
                </Text>
              ) : (
                <TouchableOpacity>
                  <Text style={styles.lowertext2}>Resend OTP</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* <TouchableOpacity>
          <Text style={{ color: '#0E67ED' }}>Resend Code</Text>
          <View style={{ borderWidth: 0.3, backgroundColor: '#0E67ED' }}></View>
        </TouchableOpacity> */}
    </>
  );
};
export default Otpverification;
