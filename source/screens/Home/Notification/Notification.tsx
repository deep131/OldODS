import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import CategoryTypeHeader from '../../../components/CategoryTypeHeader/CategoryTypeHeader';
import { colors, marginHorizontal } from '../../../styles/variables';
import { styles } from './NotificationStyles';


const Notification = ({ navigation }: any) => {

  const [notificationData, setnotificationData] = useState<any[]>([
    {
      id: 1,
      Date: ' 30 Sep 2022',
      dec: 'Your Request is received.',
    },
    {
      id: 2,
      Date: ' 24 Sep 2022',
      dec: 'Your Cleaning Service is at Home finished.',
    },
    {
      id: 3,
      Date: ' 16 Sep 2022',
      dec: 'Your Cleaning Service is at Commercial finished.',
    },
  ])

  return (
    <>
      <View style={styles.header}>

        <CategoryTypeHeader name={'Notifications'}
          back={true}
          notification={false}
          cart={false}
          navigation={navigation}
          bgColor={colors.lightgreen}
          darkColor={colors.darkPrimary}
           />
      </View>

      <View style={styles.container}>
        <View style={styles.notificationcontent}>
          <View>
            <FlatList
              style={{ marginBottom: marginHorizontal.normal }}
              data={notificationData}
              showsVerticalScrollIndicator={true}
              renderItem={({ item, index }) => (
                <View>
                  <View style={styles.notificationrow}>
                    <View style={styles.listImageContainer}>
                      <IonIcon
                        name="notifications-outline"
                        color={colors.white}
                        size={30}
                        style={styles.notificationicon}></IonIcon>
                    </View>
                    <View style={styles.notificationtextPart}>
                      <Text
                        numberOfLines={3}
                        ellipsizeMode="tail"
                        style={styles.notificationdate}>
                        {item.Date}
                      </Text>
                      <Text
                        numberOfLines={3}
                        ellipsizeMode="tail"
                        style={styles.notificationdec}>
                        {item.dec}
                      </Text>
                    </View>
                  </View>

                </View>
              )} />
            {/*  <View style={[styles.row]}>
                <View style={styles.listImageContainer}>
                  <IonIcon
                    name="notifications-outline"
                    color={colors.white}
                    size={30}
                    style={styles.icon}></IonIcon>
                </View>
                <View style={styles.textContainer}>
                  <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    style={styles.notificationdate}>
                    10 Sep 2022
                  </Text>
                  <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    style={styles.text2}>
                    New Products Launched.
                  </Text>
                </View>
              </View> */}
          </View>
        </View>
      </View>
    </>
  );
};

export default Notification;
