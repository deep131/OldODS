import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { spaceVertical } from "../../../styles/variables";
import { styles } from "../PageStyles";


const Page3 = ({navigation}:any) => {
    return (
        <>
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <View>
                    <Image source={require('../../../assets/Images/page3.png')} style={[styles.img,{overflow: 'visible'}]} resizeMode='cover'></Image>
                </View>

                <TouchableOpacity style={styles.skipButton} onPress={()=> navigation.navigate("SignUp")}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>

                <View  style={{marginTop:spaceVertical.semiSmall}}>
                    <Text style={styles.title}>Customer Satisfaction</Text>
                    <Text style={styles.subTitle}>We have the best in class individuals {'\n'} working just for you. They are well {'\n'} trained and capable of handling {'\n'} anything you need.</Text>
                </View>
            </View>
        </>
    )
}

export default Page3;