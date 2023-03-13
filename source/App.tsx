import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import messaging, { firebase, FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { LogBox, Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { AuthContext } from './contexts/authContext';
import Tabs from './navigations/Tabs';
import Store from './redux/Store';
import OnBoarding from './screens/Auth/OnBoarding/OnBoarding';
import Otpverification from './screens/Auth/Otp/OtpVerification';
import SignUp from './screens/Auth/SignUp/SignUp';
import CategoryTypeConfirmDetails from './screens/Home/Category/CategoryConfirmDetails/CategoryTypeConfirmDetails';
import CategoryType from './screens/Home/Category/CategoryType/CategoryType';
import CategoryTypeDetail from './screens/Home/Category/CategoryTypeDetail/CategoryTypeDetail';
import CategoryTypeSearch from './screens/Home/Category/CategoryTypeSearch/CategoryTypeSearch';
import CategoryTypeSelectDate from './screens/Home/Category/CategoryTypeSelectDate/CategoryTypeSelectDate';
import CategoryTypeSelectLocation from './screens/Home/Category/CategoryTypeSelectLocation/CategoryTypeSelectLocation';
import SalonServiceDetail from './screens/Home/Category/SalonServiceDetail/SalonServiceDetail';
import Notification from './screens/Home/Notification/Notification';
import BookingDetails from './screens/Home/OrderHistory/BookingDetails';
import OrderHistory from './screens/Home/OrderHistory/OrderHistory';
import ProductStatus from './screens/Home/OrderHistory/ProductStatus';
import { colors } from './styles/variables';
import API from './utils/API';
import { decryptData, FCM_TOKEN, PAGER, STORAGE, TOKEN_PREFIX, USER_DATA } from './utils/commonUtils';
const RootStack = createStackNavigator();

const options = {
  headerShown: false,
};

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message

const GetStarted = () => (
  <RootStack.Navigator screenOptions={options}>
    <RootStack.Screen name="OnBoarding" component={OnBoarding} />
  </RootStack.Navigator>
)

const AuthStack = () => (
  <RootStack.Navigator screenOptions={options}>
    <RootStack.Screen name="SignUp" component={SignUp} />
    <RootStack.Screen name="Otpverification" component={Otpverification} />
  </RootStack.Navigator>
)

const HomeStack = () => (
  <RootStack.Navigator screenOptions={options}>
    <RootStack.Screen name="Tabs" component={Tabs} />
    <RootStack.Screen name="CategoryType" component={CategoryType} />
    <RootStack.Screen name="CategoryTypeSelectDate" component={CategoryTypeSelectDate} />
    <RootStack.Screen name="CategoryTypeSelectLocation" component={CategoryTypeSelectLocation} />
    <RootStack.Screen name="CategoryTypeConfirmDetails" component={CategoryTypeConfirmDetails} />
    <RootStack.Screen name="CategoryTypeSearch" component={CategoryTypeSearch} />
    <RootStack.Screen name="Notification" component={Notification} />
    <RootStack.Screen name="OrderHistory" component={OrderHistory} />
    <RootStack.Screen name='ProductStatus'  component={ProductStatus}/>
    <RootStack.Screen name='BookingDetails'  component={BookingDetails} />

    <RootStack.Screen name="CategoryTypeDetail" component={CategoryTypeDetail} />
    <RootStack.Screen name="SalonServiceDetail" component={SalonServiceDetail} />
 

  </RootStack.Navigator>
)

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);

    PushNotification.createChannel(
      {
        channelId: "channel_id", // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: true, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  },[]);

  React.useEffect(() => {
    appUser();
    const type = 'notification';
    if (Platform.OS === 'ios') {
      registerForRemoteMessages();
      setTimeout(() => {
        getToken();
      }, 500);
      PushNotificationIOS.addEventListener(type, onRemoteNotification);
    } else {
      getToken();
      onMessage();
    }

    return () => {
      PushNotificationIOS.removeEventListener(type);
    };
  }, []);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white,
    },
  };

  const onRemoteNotification = (notification: any) => {
    console.log("onRemoteNotification", notification);

    const isClicked = notification.getData().userInteraction === 1;

    if (isClicked) {
      // Navigate user to another screen
    } else {
      // Do something else with push notification
    }
  };

  const getToken = async () => {
    await messaging().getToken().then(x => {
      console.log("token===", x);
      AsyncStorage.setItem(FCM_TOKEN, x);
    })
      .catch(e => console.log("getToken error=",e));
  };

  const registerForRemoteMessages = () => {
    firebase
      .messaging()
      .registerDeviceForRemoteMessages()
      .then(() => {
        console.log('Registered');
        requestPermissions();
      })
      .catch(e => console.log(e));
  };

  const requestPermissions = () => {
    firebase
      .messaging()
      .requestPermission()
      .then((status: FirebaseMessagingTypes.AuthorizationStatus) => {
        if (status === 1) {
          console.log('Authorized');
          onMessage();
        } else {
          console.log('Not authorized');
        }
      })
      .catch(e => console.log(e));
  };

  const showNotification = (notification: any) => {
    PushNotification.localNotification({
      channelId: 'channel_id',
      title: notification.title,
      message: notification.body!,
    });
  };


  const onMessage = async () => {
    firebase.messaging().onMessage(response => {
      console.log("response==", response);
      showNotification(response.notification);
    });
  };


  const [state, dispatch] = React.useReducer(
    (prevstate: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevstate,
            userToken: action.token,
            initialRoute: action.initialRoute,
            isLoading: false,
            pager: action.pager,
          };

        case 'SIGN_UP':
          return {
            ...prevstate,
            isSignout: false,
            initialRoute: action.data.initialRoute,
          };

        case 'SIGN_OUT':
          return {
            ...prevstate,
            pager: action.data.pager,
            userToken: null,
            isSignout: true,
            // initialRoute: action.data.initialRoute
          };

        case 'Verify_OTP':
          return {
            ...prevstate,
            isSignout: false,
            userToken: action.data.token,
            initialRoute: action.data.initialRoute,
          };

        case 'Get_Started':

          return {
            ...prevstate,
            userToken: null,
            pager: action.data.pager,
            initialRoute: action.data.initialRoute,
          };

      }

    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      initialRoute: 'GetStarted',
      pager: false,
      storage: false,
    });

  const appUser = async () => {
      try {
        let userToken = await AsyncStorage.getItem(TOKEN_PREFIX);
        let pager = await AsyncStorage.getItem(PAGER);
        let initialRoute = 'App';
        dispatch({ type: 'RESTORE_TOKEN', token: userToken, initialRoute, pager: pager });
      }
      catch (e) {
        console.log("e=",e);
      }
    }
    

  const authContext = React.useMemo(
    () => ({

      getStarted: async () => {
        try {
          await AsyncStorage.setItem(PAGER, 'true')
          await AsyncStorage.setItem(STORAGE, 'false')
          let initialRoute = 'Auth'
          let pager = true;
          let storage = 'true'
          dispatch({
            type: 'Get_Started',
            data: { pager: pager, initialRoute, storage: storage }
          })
        }
        catch (e) {
          console.log('error', e);
        }
      },


      verifyOTP: (data: any, setverfying: any) => {
        try {
          setverfying(false);
          let token = "token"
           let initialRoute = 'App'
          dispatch({
            type: 'Verify_OTP',
            data: { token: token, initialRoute }
          })
          AsyncStorage.setItem(TOKEN_PREFIX, token);
          API.post(`enduser/Verify_OTP/`, data).then(async (res: any) => {
            try {
              console.log("res11==", res.data);
              if (res.data.response_code == 200) {
                let a = decryptData(res.data.response_data);
                console.log("a===", a);
                setverfying(false);
                await AsyncStorage.setItem(TOKEN_PREFIX, res.data.data.token);
                await AsyncStorage.setItem(USER_DATA, JSON.stringify(res.data.data.user));
              }
            }
            catch (e) {
              console.log("e==", e);
              setverfying(false);
            }
          }).catch((err: any) => {
            console.log("err==", err);
            setverfying(false);
          })
        }
        catch (e) {
          console.log('e', e);
          setverfying(false)
        }
      },

      signOut: async (setloggingOut: any, loggingOut: any) => {
        try {

          await AsyncStorage.removeItem(TOKEN_PREFIX);
          await AsyncStorage.removeItem(FCM_TOKEN);
          await firebase.messaging().deleteToken();
          // let initialRoute = 'Auth'
          let pager = await AsyncStorage.getItem(PAGER)
          dispatch({
            type: 'SIGN_OUT',
            data: { pager: pager }
          })
          setloggingOut(false)
        }
        catch (e) {
          console.log("Error while logout", e);
          setloggingOut(false)
        }
      },

    }), []);


  return (
    <Provider store={Store}>
      <AuthContext.Provider value={{ ...authContext, ...state }}>
        <NavigationContainer theme={MyTheme}>
        <RootStack.Navigator screenOptions={options}>
            {state?.userToken != null ? 
            (
              <>
                <RootStack.Screen name="App" component={HomeStack} />
              </>
            ) 
            : 
            (
              <>
                {state?.pager && !state?.userToken ?
                  (
                    <>
                      <RootStack.Screen name="Auth" component={AuthStack} />
                    </>
                  )
                  :
                  <>
                    <RootStack.Screen name="GetStarted" component={GetStarted} />
                  </>
                }
              </>
            )
            }

          </RootStack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  );
};




export default App;
