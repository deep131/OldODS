import moment from "moment";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Calendar } from 'react-native-calendars';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Button from "../../../../components/Button/Button";
import CategoryTypeHeader from "../../../../components/CategoryTypeHeader/CategoryTypeHeader";
import { borderRadius, colors, fontFamily, fontSize, marginHorizontal, responsiveHeight, responsiveWidth, spaceVertical } from "../../../../styles/variables";
import { showToast } from "../../../../utils/commonUtils";
import { styles } from "./CategoryTypeSelectDateStyles";

const CategoryTypeSelectDate = ({ navigation, route }: any) => {

    const [selectedday, setSelectedDay]: any = useState("");
    const [markedDates, setmarkedDates]: any = useState({});
    const [slotSelected, setSlotSelected] = useState(false);

    const params = route?.params;
    const primaryColor = params?.color;
    const headerTitle = params?.headerTitle;
    const primaryDarkColor = params?.darkColor;
    const id=params?.id;
console.log(id)
    const getSelectedDayEvents = (date: any) => {
        let markedDates: any = {};
        markedDates[date] = { selected: true, color: '#00B0BF', textColor: '#FFFFFF' };
        let serviceDate: any = moment(date);
        serviceDate = serviceDate.format("DD.MM.YYYY");
        setSelectedDay(serviceDate);
        setmarkedDates(markedDates);
    };

    const timeSlots = [
        {
            id: 1,
            time: "07:00 AM"
        },
        {
            id: 2,
            time: "10:30 AM"
        },
        {
            id: 3,
            time: "02:00 PM"
        },
        {
            id: 4,
            time: "05:30 PM"
        },
        {
            id: 5,
            time: "09:00 PM"
        },
    ];

    const [itemTimeSlot, setItemTimeSlot] = useState(null);

    const selectedTimeSlot = (item: any) => {
        setItemTimeSlot(item.id);
        setSlotSelected(true);
    }

    const goToSelectLocation = () => {
        if (slotSelected) {
            navigation.navigate('CategoryTypeSelectLocation',{
                color:primaryColor,
                darkColor : primaryDarkColor,
                headerTitle : headerTitle,
                id:id,
          
               
              });
        }
        else {
            showToast("Please Select a Time Slot");
        }

    }

    return (
        <View style={{ flex: 1, backgroundColor: primaryColor }}>
            {/* Flex header */}
            <View style={[styles.header, { backgroundColor: primaryColor }]}>

                <CategoryTypeHeader name={headerTitle}
                    back={true}
                    notification={true}
                    cart={false}
                    navigation={navigation}
                    bgColor={primaryColor} />
            </View>

            {/* Flex Body */}
            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
                {/* Title */}
                <View style={styles.dateandtimeView}>
                    <IonIcon
                        size={25}
                        name="calendar-outline"
                        color={primaryDarkColor}></IonIcon>
                    <Text style={styles.dateandtimeTitle}>Select Date & Time</Text>
                </View>
                {/* Calendar  */}
                <View style={{ marginTop: spaceVertical.small }}>
                    <Calendar
                        current={Date()}
                        onDayPress={day => {
                            getSelectedDayEvents(day.dateString);
                        }}
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={'MMM yyyy'}
                        onMonthChange={month => {
                            console.log('month changed', month);
                        }}
                        markedDates={markedDates}
                        minDate={new Date().toDateString()}
                        hideExtraDays={true}
                        enableSwipeMonths={true}
                        theme={{
                            textMonthFontFamily: fontFamily.semiBold,
                            textDayHeaderFontFamily: fontFamily.medium,
                            textDayFontFamily: fontFamily.regular,
                            textMonthFontSize: fontSize.medium,
                            textDayHeaderFontSize: fontSize.small,
                            arrowColor: primaryDarkColor,
                            todayTextColor: primaryDarkColor,
                            dayTextColor: colors.black,
                            monthTextColor: colors.black,
                            selectedDayTextColor: colors.white,
                            selectedDayBackgroundColor: primaryDarkColor,
                        }}
                        style={{
                            height: responsiveHeight(46)
                        }}
                    />
                </View>

                <View style={{
                    marginLeft: marginHorizontal.small,
                    marginTop: spaceVertical.semiSmall,
                }}>
                    {/* Title */}
                    <Text style={styles.pickTime}>Pick Time</Text>
                    {/* Timeslots */}
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
                        {timeSlots.map((item, index) => (
                            <TouchableOpacity key={index} style={{
                                marginTop: spaceVertical.extraSmall,
                                borderWidth: itemTimeSlot == item.id ? 2 : 1,
                                width: responsiveWidth(26),
                                borderRadius: borderRadius.bigboxradius,
                                borderColor: itemTimeSlot == item.id ? primaryDarkColor : colors.gray10,
                                marginRight: 20,
                            }} activeOpacity={0.7}
                                onPress={() => selectedTimeSlot(item)}>

                                <Text style={{
                                    textAlign: 'center',
                                    padding: 10,
                                    color: colors.black,
                                    fontFamily: fontFamily.medium,
                                    fontSize: fontSize.small,
                                    top: 1
                                }}>{item.time}</Text>
                                
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>


            <View style={{
                backgroundColor: colors.white,
                paddingBottom: responsiveHeight(2)
            }}>
                <Button name={"Next"} 
                color={primaryDarkColor} 
                onPress={goToSelectLocation} />
            </View>
        </View>
    )
}

export default CategoryTypeSelectDate;