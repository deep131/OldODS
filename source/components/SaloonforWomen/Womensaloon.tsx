import React, { useState} from 'react';
import {FlatList, Image, ScrollView, Text, Pressable, View} from 'react-native';
import {colors} from '../../styles/variables';

import {styles} from './Womensalonstyles';

const Womensaloon = ({data}: any) => {
  const [itemArea, setItemArea] = useState(null);
  const selectedArea = (item: any) => {
    setItemArea(item.id);
  };
  console.log(data);
  const renderItem = ({item, index}: any) => (
    <>
      <Pressable   onPress={() => selectedArea(item)}>
        <View
          style={[
            styles.itemview,
            itemArea == item.id
              ? {borderColor: colors.puruple, borderWidth: 1, elevation: 5}
              : null,
          ]}>
          <Image style={styles.imagestyle} source={item.image}></Image>
          <Text style={styles.innertext}>{item.name}</Text>
        </View>
      </Pressable>
    </>
  );

  return (
    <View>
      <Text style={styles.text}>Salon for women</Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <ScrollView horizontal={true}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={3}
          />
        </ScrollView>
      </View>
    </View>
  );
};
export default Womensaloon;
