import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { colors, marginHorizontal, spaceVertical } from "../../styles/variables";
import { styles } from "./CategoriesStyles";



const CategoriesComp = ({ data , navigation }: any) => {

    const ItemRender = ({ name, image, onItemClick }: any) => (
        <View style={{ marginLeft: marginHorizontal.semiSmall }}>
            <View style={styles.categoriesview}>
                <Image style={styles.categoryimage} source={image} />
                <Text style={styles.categoryname}>{name}</Text>
            </View>
        </View>
    );

    const itemClick = (item: any,) => {
        if (item.id == 1) {
          navigation.navigate('CategoryType', {
            itemId: item.id,
            color : colors.lightgreen,
            headerTitle : "Cleaning Service",
            darkColor : colors.darkPrimary
          });
        }
        else if(item.id == 2){
            navigation.navigate('CategoryType', {
              itemId: item.id,
              color : colors.lightblue,
              headerTitle : "Home Appliance Service",
              darkColor : colors.darkSecondary
            });
          }
          else if(item.id == 3){
            navigation.navigate('CategoryType', {
              itemId: item.id,
              color : colors.lightpurple,
              headerTitle : "Salon Services",
              darkColor : colors.puruple
            });
          }
      };

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <Pressable onPress={() => itemClick(item)}>
                    <ItemRender image={item.image} name={item.name} />
                </Pressable>
            )}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingRight: marginHorizontal.semiSmall }}
            horizontal={true}
            style={{ marginTop: spaceVertical.extraSmall }}
        />
    )

}
export default CategoriesComp;