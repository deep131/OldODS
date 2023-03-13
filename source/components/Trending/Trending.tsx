import React from "react";
import { FlatList, Image, Text, View,ScrollView } from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';
import itemReducer from "../../redux/Reducers/CategoryTypeReducer/CategoryTypeReducer";
import { marginHorizontal, spaceVertical } from "../../styles/variables";
import { styles } from "./TrendingStyles";


const TrendingComp = ({ data,numColumn }: any) => {
  const starArray = [...Array(5).keys()].map(i => i + 1);

  const RenderItem = ({ name, image,rating }: any) => (
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
    <ScrollView horizontal={true}>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <RenderItem image={item.image} name={item.name} rating={item.rating} />
      )}
      keyExtractor={item => item.id}
      key={data}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: marginHorizontal.semiSmall }}
      numColumns={numColumn}

      style={{ marginTop: spaceVertical.extraSmall }}
    />
    </ScrollView>
  )

}
export default TrendingComp;