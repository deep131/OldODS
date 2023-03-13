import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';
import MatericalIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsiveWidth } from "../../styles/variables";
import { styles } from "./CategoryTypeHeaderStyles";

const CategoryTypeHeader = ({ name, 
    navigation, 
    back, 
    notification, 
    pageHeaderStyle, 
    bgColor, 
    darkColor,
    latitude,
    longitude,
    formattedAddress,
    cart }: any) => {

    return (
        // <View>
        <View style={[styles.headerView, pageHeaderStyle]}>
            <View style={[styles.header, { backgroundColor: bgColor }]}>

                <View style={{
                    flexDirection: 'row',
                    width: responsiveWidth(90),
                    justifyContent: 'space-between'
                }}>
                    {back ?
                        <IonIcon name='arrow-back' style={styles.backIcon} onPress={() => { navigation.goBack() }}>
                        </IonIcon> :
                        null
                    }

                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.text}>{name}</Text>
                    </View>


                    <View>

                        {notification ? (
                            <>
                                <TouchableOpacity onPress={() => navigation.navigate('Notification')} activeOpacity={0.5}>
                                    <View style={styles.notification}></View>
                                    <Image
                                        source={require('../../assets/Images/icbell.png')}
                                        style={{
                                            height: responsiveWidth(5.5),
                                            width: responsiveWidth(5.5),
                                        }}></Image>
                                </TouchableOpacity>
                            </>
                        )
                            : cart ?
                            <>
                                <TouchableOpacity onPress={() => navigation.navigate('CategoryTypeConfirmDetails', 
                                {   
                                    latitude:latitude!,
                                    longitude:longitude!,
                                    formattedAddress : formattedAddress!,
                                    color: bgColor,
                                    darkColor: darkColor,
                                    headerTitle: name
                                })} activeOpacity={0.5}>
                                    <View style={styles.cart}></View>
                                    <MatericalIcon name='cart' style={[styles.icon1, { color: darkColor }]}></MatericalIcon>
                                </TouchableOpacity>
                            </>
                        :null}
                    </View>
                </View>

            </View>
        </View >
        // </View>

    );
}

export default CategoryTypeHeader;