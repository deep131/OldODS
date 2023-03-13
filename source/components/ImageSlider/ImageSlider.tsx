import React from "react";
import { Image, View } from "react-native";
import Swiper from "react-native-swiper";
import { borderRadius, responsiveHeight, responsiveWidth, spaceVertical } from "../../styles/variables";
import { styles } from "./ImageSliderStyles";



const ImageSlider = ({ data }: any) => {

    return (
        <Swiper
            style={{ height: responsiveHeight(25)}}
            autoplay={true}
            loop={true}
            showsPagination={false}
            autoplayTimeout={5}
            removeClippedSubviews={false}>
            {data.map((item: any, index: any) => {
                return (
                    <View
                    key={index}
                    style={{
                      width: responsiveWidth(90),
                      height: responsiveHeight(24),
                      borderRadius: borderRadius.boxRadius,
                      overflow: 'hidden',
                      alignSelf: 'center',
                      marginLeft: responsiveHeight(1),
                      marginTop: spaceVertical.extraSmall,
                    }}>
                        <Image
                            resizeMode="contain"
                            source={item.image}
                            style={styles.swiper}
                            key={item.id + index}></Image>
                    </View>
                );
            })}
        </Swiper>
    )

}
export default ImageSlider;