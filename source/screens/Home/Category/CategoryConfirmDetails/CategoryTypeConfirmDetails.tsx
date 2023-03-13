import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import MapView from "react-native-maps";
import PushNotification from 'react-native-push-notification';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from "react-redux";
import Alert from "../../../../components/Alert/Alert";
import Bottomsheet from "../../../../components/BottomSheet/Bottomsheet";
import Button from "../../../../components/Button/Button";
import CategoryTypeHeader from "../../../../components/CategoryTypeHeader/CategoryTypeHeader";
import { borderRadius, colors, fontFamily, marginHorizontal, responsiveHeight, responsiveWidth, spaceVertical } from "../../../../styles/variables";
import { showToast } from "../../../../utils/commonUtils";
import { styles } from "./CategoryTypeConfirmDetailsStyles";

const CategoryTypeConfirmDetails = ({ navigation, route }: any) => {

    const dispatch = useDispatch();
    const [isMapDrag, setIsMapDrag] = useState(false);
    const [selectedPaymentMethod, setselectedPaymentMethod]: any = useState("");
    const [shouldShow, setShouldShow] = useState(false);
    const appState = useSelector((state: any) => state);
    const listData = appState.CategoryTypeReducer.data;
    const [promoData, setpromoData] = useState('');

    const latitudeDelta = 0.025;
    const longitudeDelta = 0.025;

    const [region, setregion] = useState({
        latitudeDelta,
        longitudeDelta,
        latitude: 22.33644,
        longitude: 70.76797,
    });

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [userOrder, setuserOrder]: any = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [AlertVisible, setAlertVisible] = useState(false);
    const [spinner, setSpinner] = useState(false);


    const params = route?.params;
    const primaryColor = params?.color;
    const headerTitle = params?.headerTitle;
    const primaryDarkColor = params?.darkColor;
    const id=params?.id;

    console.log(params)
    const promocode = (value: any) => {
        setModalVisible(true);
    };

    const handleCallback = (childData: any) => {
        setModalVisible(false);
        setpromoData(childData);
    };

    const onRegionChange = (region: any) => {
        if (isMapDrag) {
            setregion(region);
            setIsMapDrag(false);
        }
    };

    React.useEffect(() => {
        PushNotification.createChannel(
            {
                channelId: "channel_id_1", // (required)
                channelName: "My channel", // (required)
                channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
                playSound: true, // (optional) default: true
                soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
                vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
            },
            (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        );
    }, []);

    useEffect(() => {
        setregion({ ...region, latitude: params.latitude, longitude: params.longitude });
        getOrderData();
        getTotalPrice();
        getTotalTime();
    }, []);

    const getOrderData = () => {
        let orderDetailsArray: any = [];
        listData.filter((item: any, index: any) => {
            if (item.qty > 0) {
                orderDetailsArray.push(item);
            }
        });
        setuserOrder(orderDetailsArray);
    }

    const getTotalPrice = () => {
        let a = listData.reduce(function (sum: any, current: any) {
            return (sum + current.total);
        }, 0);
        setTotalPrice(a);
    }

    const getTotalTime = () => {
        let b = listData.reduce(function (sum1: any, current1: any) {
            return (sum1 + current1.totaltime);
        }, 0);
        setTotalTime(b);
    }

    const paymentMethods: any = [
        {
            id: 1,
            name: "Online Payment",
            icon: "card",
            checked: false,
        },
        {
            id: 2,
            name: "Cash",
            icon: "wallet",
            checked: false,
        }
    ];

    const selectedPaymentGateway = (item: any) => {
        setselectedPaymentMethod(item);
        if (selectedPaymentMethod.id == item.id) {
            setShouldShow(true);
        }
    }

    const renderItem = ({ item }: any) => (
        <>
            <View style={{
                backgroundColor: primaryColor,
                borderRadius: borderRadius.semiLarge,
                padding: 3,
                width: responsiveWidth(18),
                height: responsiveWidth(18),
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: responsiveHeight(2)
            }}>
                <Image style={styles.categoryimage} source={item.image}
                    resizeMode="contain" />
            </View>
            <View style={{
                marginTop: responsiveHeight(2),
                marginLeft: marginHorizontal.extraSmall,
                justifyContent: 'center'
            }}>
                <Text style={styles.itemQty}>{item.qty}</Text>
                <Text style={styles.itemName}>{item.name}</Text>
            </View>
        </>
    );

    const confirmAlert = async () => {
        if (selectedPaymentMethod != "" && totalPrice != 0 && totalTime != 0) {
            setAlertVisible(!AlertVisible);
        }
        else {
            showToast("Please select a payment method or Check your order")
        }

    }

    const showNotification = (notification: any) => {
        PushNotification.localNotification({
            channelId: 'channel_id_1',
            title: notification.title,
            message: notification.body!,
        });
    };

    const alertCallBack = async () => {
        console.log("alert call back");
        setSpinner(true);
        let abArray: any = [];
        let data = {
            id: Date.now(),
            type: userOrder[0]?.type,
            workingHours: totalTime,
            totalPrice: totalPrice,
            date: moment().format('LL'),
            paymentMode: selectedPaymentMethod.name,
            serviceStatus: userOrder[0]?.type == "Cleaning" ? "Running" : "Done",
            orderData: userOrder
        }
        // console.log("data==",data);
        abArray.push(data);
        let finalArray: any;
        await AsyncStorage.getItem("OrderData").then(async (res: any) => {
            // console.log("async get res===",JSON.parse(res));
            let previousData: any = JSON.parse(res);
            // console.log("previousData==",previousData);
            // console.log("abArray==",abArray);
            if (previousData != null) {
                finalArray = [...previousData, ...abArray];
            }
            else {
                finalArray = abArray;
            }
            // console.log("all data==", finalArray);
            await AsyncStorage.setItem("OrderData", JSON.stringify(finalArray));
        })

        setTimeout(() => {
            setSpinner(false);
            navigation.navigate("ProductStatus");
            let notification = {
                title : `Service Request`,
                body : `Your Service Request for ${userOrder[0]?.type} is received`
            }
            showNotification(notification)
        }, 2000);
    }


    return (
        <><View style={{ flex: 1, backgroundColor: primaryColor }}>
            {/* Flex header */}
            <View style={[styles.header, { backgroundColor: primaryColor }]}>

                <CategoryTypeHeader name={userOrder[0]?.type || "Confirm Detail"}
                    back={true}
                    notification={true}
                    cart={false}
                    navigation={navigation}
                    bgColor={primaryColor} />
            </View>
            {/* Body */}
            <View style={styles.body}>
                {/* Google Map */}
                <View style={styles.mapView}>
                    <Image
                        style={styles.mapMarker}
                        resizeMode="contain"
                        source={
                            id ===1
                              ? require('../../../../assets/Images/marker.png')
                              : id === 2
                              ? require('../../../../assets/Images/bluemarker.png')
                              : id === 3
                              ? require('../../../../assets/Images/purplemarker.png')
                              : require('../../../../assets/Images/marker.png')////
                          }></Image>

                    <View style={{ flex: 1 }}>
                        <MapView
                            style={[StyleSheet.absoluteFillObject, {
                                height: responsiveHeight(18),
                                margin: 10
                            }]}
                            region={region}
                            onPanDrag={() => {
                                setIsMapDrag(true);
                            }}
                            onRegionChangeComplete={onRegionChange}
                        ></MapView>
                    </View>
                    {/* Address */}
                    <View style={styles.locationview}>
                        <Image
                            style={styles.iclocation1}
                            resizeMode="contain"
                            source={
                                id ===1
                                  ? require('../../../../assets/Images/location_g.png')
                                  : id === 2
                                  ? require('../../../../assets/Images/location_b.png')
                                  : id === 3
                                  ? require('../../../../assets/Images/location_p.png')
                                  : require('../../../../assets/Images/location_g.png')////
                              }></Image>
                        <Text style={styles.locationtext}>{params.formattedAddress}</Text>
                    </View>
                </View>
                {/* Order Details */}
                <ScrollView style={styles.orderDetails} showsVerticalScrollIndicator={false}>
                    {/* Title */}
                    <View style={styles.orderDetailsTitleView}>
                        <Text style={styles.orderDetailsTitleText}>Order Details</Text>

                        <TouchableOpacity style={{ position: 'absolute', right: 20 }}
                            onPress={() => navigation.navigate("CategoryType", {
                                itemId: 1,
                                color: colors.lightgreen,
                                headerTitle: "Cleaning",
                                darkColor: colors.darkPrimary
                            }
                            )}
                            activeOpacity={0.5}>
                            <Image
                                style={styles.iclocation}
                                resizeMode="contain"
                                source={require('../../../../assets/Images/edit.png')}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* Divider */}
                    <View
                        style={{
                            borderColor: colors.lightGray,
                            borderWidth: 0.5,
                        }} />
                    {/* Order Items */}
                    {userOrder.length ? (
                        <View style={styles.orderItems}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <FlatList
                                    data={userOrder}
                                    renderItem={renderItem}
                                    keyExtractor={(item: any) => item.id}
                                    numColumns={2} />
                            </ScrollView>
                        </View>
                    )
                        :
                        <Text
                            style={{
                                textAlign: 'center',
                                fontFamily: fontFamily.medium,
                                color: colors.black,
                                marginVertical: spaceVertical.extraSmall
                            }}>No Order Items</Text>
                    }
                    {/* Divider */}
                    <View
                        style={{
                            borderColor: colors.lightGray,
                            borderWidth: 0.5,
                        }} />
                    {/* Working Hours */}
                    <View style={styles.workingHoursView}>
                        <Text style={{
                            fontFamily: fontFamily.medium,
                            color: colors.black,
                        }}>Working Hours</Text>

                        <Text style={styles.workingHoursTime}>(Estimated Time)</Text>

                        <Text style={styles.workingHoursPrice}>{totalTime} h</Text>
                    </View>

                    {/* Divider */}
                    <View
                        style={{
                            borderColor: colors.lightGray,
                            borderWidth: 0.5,
                        }} />

                    {/* Service Charge */}
                    <View style={styles.serviceChargeView}>
                        <Text style={{
                            fontFamily: fontFamily.medium,
                            color: colors.black,
                        }}>Service Charge</Text>

                        <Text style={styles.workingHoursPrice}>$ 0</Text>
                    </View>

                    {/* Promo Code */}
                    <View style={styles.promoCodeRow}>
                        <Text style={{
                            fontFamily: fontFamily.medium,
                            color: colors.black,
                        }}>Promo Code</Text>
                        {promoData.length ?
                            <View style={styles.promoCodeView}>
                                <Text
                                    style={styles.promoCodeText}>
                                    {promoData}
                                </Text>

                                <TouchableOpacity onPress={() => setpromoData("")}>
                                    <IonIcon name={'close'}
                                        size={20}
                                        color={colors.promocode}></IonIcon>
                                </TouchableOpacity>
                            </View>
                            : null}
                        <TouchableOpacity
                            onPress={promocode}
                            style={[styles.applyButton, { backgroundColor: primaryDarkColor }]}
                            activeOpacity={0.7}>
                            <Text
                                style={styles.applyText}>
                                {promoData.length ? "Applied" : "Apply"}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Divider */}
                    <View
                        style={{
                            borderColor: colors.lightGray,
                            borderWidth: 0.5,
                        }} />

                    {/* Total */}
                    <View style={styles.totalRow}>
                        <Text style={{
                            fontFamily: fontFamily.medium,
                            color: colors.black,
                        }}>Total</Text>

                        <Text style={styles.estimatedCost}>(Estimated Cost)</Text>

                        <Text style={{
                            fontFamily: fontFamily.semiBold,
                            color: primaryDarkColor,
                            position: 'absolute',
                            right: 20
                        }}>$ {totalPrice}</Text>
                    </View>
                    {/* Payment Method */}
                    <View style={styles.paymentMethodView}>
                        {paymentMethods.map((item: any, index: any) => (
                            <TouchableOpacity key={index} style={styles.paymentMethodCard}
                                activeOpacity={0.5} onPress={() => selectedPaymentGateway(item)}>
                                {selectedPaymentMethod.id == item.id ?
                                    <Image
                                        style={styles.paymentMethodSelected}
                                        resizeMode="contain"
                                        source={require('../../../../assets/Images/checked.png')}></Image>
                                    :
                                    <View style={styles.paymentMethodUnselected}>
                                    </View>
                                }
                                <View style={{
                                    alignItems: 'center', top: 15
                                }}>
                                    <IonIcon name={item.icon} size={30} color={colors.black}>
                                    </IonIcon>
                                    <Text style={{
                                        color: colors.black,
                                        fontFamily: fontFamily.medium
                                    }}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}

                    </View>
                    {/* Confirm Button */}
                    <View style={{ marginBottom: spaceVertical.extraSmall }}>
                        <Button
                            name={`Confirm ($ ${totalPrice})`}
                            color={primaryDarkColor}
                            onPress={confirmAlert} />
                    </View>
                </ScrollView>
            </View>

            <Spinner
                color={colors.white}
                visible={spinner}
            />
        </View>

            <Bottomsheet
                headertext={'Have a Promo Code?'}
                isVisible={isModalVisible}
                secondinput={true}
                parentCallback={handleCallback}
                setIsVisible={(value: any) => setModalVisible(false)}
                squareImage={false}
                btntext={'Apply Now'}
                inputtext={'Enter promo code'}
                text={'Promo codes are automatically uppercase and limited to 25 characters with no spaces allowed.'} />

            <Alert
                AlertVisible={AlertVisible}
                setAlertVisible={(value: any) => setAlertVisible(value)}
                AlertMsgType="confirmOrder"
                AlertMsg="Are you sure want to Order?"
                navigation={navigation}
                callBack={alertCallBack}
            />

        </>
    )
}

export default CategoryTypeConfirmDetails;