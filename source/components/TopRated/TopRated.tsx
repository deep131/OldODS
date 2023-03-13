import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';
import { marginHorizontal, spaceVertical } from "../../styles/variables";
import { styles } from "./TopRatedStyles";


const TopRatedComp = ({ data }: any) => {
  const starArray = [...Array(5).keys()].map(i => i + 1);

  const RenderItem = ({ name, image, rating }: any) => (
    <View style={{ marginLeft: marginHorizontal.semiSmall }}>
      <View style={styles.topratedview}>
        <Image style={styles.topratedimage} source={image} />
        <Text style={styles.topratedname}>{name}</Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: marginHorizontal.flatlistmargin,
            position: 'absolute',
            bottom: 8
          }}>
          {
            Array.from({ length: parseInt(rating) }, (x, i) => {
              return (
                <IonIcon key={i} name="star" size={15} color="#FFc700" />
              )
            })

          }

          {

            Array.from({ length: 5 - parseInt(rating) }, (x, i) => {
              return (
                <IonIcon key={i} name="star-outline" size={15} color="#FFc700" />
              )
            })

          }
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <RenderItem image={item.image} name={item.name} rating={item.rating} />
      )}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: marginHorizontal.semiSmall }}
      horizontal={true}
      style={{ marginTop: spaceVertical.extraSmall }}
    />
  )

}
export default TopRatedComp;