import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home/Dashboard/Dashboard";
import OrderHistory from "../screens/Home/OrderHistory/OrderHistory";
import Profile from "../screens/Home/Profile/Profile";
import { borderRadius, colors, fontFamily, fontSize, responsiveHeight, responsiveWidth, tabHeight } from "../styles/variables";

const Tab = createBottomTabNavigator();

type TabViewProps = {
  focused: boolean;
  source: any;
};
const Tabs = ({ navigation }: any) => {
  const screenOptions = {
    headerShown: false,
    tabBarActiveTintColor: colors.black,

    tabBarStyle: {
      backgroundColor: '#fff',
      height: Platform.OS === 'ios' ? tabHeight + 25 : tabHeight,
      borderTopLeftRadius: borderRadius.boxRadius,
      borderTopRightRadius: borderRadius.boxRadius,
      borderTopWidth: 0,
      borderWidth:3,
      borderColor:'#eee',
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 3},
      elevation:10,
    },

    tabBarShowLabel: true,
    
    tabBarItemStyle: {
      margin: 2,
    },
    tabBarLabelStyle: {
      fontFamily: fontFamily.medium,
      fontSize: fontSize.extraSmall,
      marginBottom: Platform.OS === "ios" ? 8 : 0,
    }
  };

  const styles = StyleSheet.create({

    middleBtn: {
      textAlignVertical: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: borderRadius.boxRadius * 0.7,
      position: "absolute",
      zIndex: 5,
      top: responsiveHeight(-2.5),
      borderColor: colors.inputBg,
      borderWidth: 3,
    },
    
    cartCount: {
      backgroundColor: colors.red,
      borderRadius: borderRadius.XLarge,
      width: responsiveWidth(4),
      maxWidth: responsiveWidth(7),
      height: responsiveWidth(4),
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 7,
      right: responsiveWidth(-2),
      top: responsiveWidth(-1),
      position: 'absolute',
    },

    count: {
      fontSize: fontSize.nanoSize,
      color: colors.HARD_WHITE,
    }


  })

  const TabView = ({ focused, source }: TabViewProps) => {

    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Ionicons
          name={source}
          style={{
            color: focused ? colors.primary : "#AFB2B5",
          }}
          size={22}
        />
      </View>
    );
  };


  return (
    <>
      <Tab.Navigator screenOptions={screenOptions}
      >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ focused }: any) => {
            return <TabView focused={focused} source={`home-outline`} />;
          },
        }} />

        <Tab.Screen name="Categories" component={Home} options={{
          tabBarIcon: ({ focused }: any) => {
            return <TabView focused={focused} source={`grid-outline`} />;
          },
        }} />


        <Tab.Screen name="Bookings" component={OrderHistory} options={{
          tabBarIcon: ({ focused }: any) => {
            return <TabView focused={focused} source={`calendar-outline`} />;
          },
        }} />

        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({ focused }: any) => {
            return <TabView focused={focused} source={`person-outline`} />;
          },
        }}
        />
      </Tab.Navigator>
    </>
  );
};




export default Tabs;