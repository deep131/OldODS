import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Alert from "../../../components/Alert/Alert";
import LoadingView from "../../../components/Loading/LoadingView";
import { borderRadius, colors, deviceWidth, marginHorizontal, responsiveHeight, responsiveWidth, spaceVertical } from "../../../styles/variables";
import API from "../../../utils/API";
import { API_URL, showToast } from "../../../utils/commonUtils";
import { styles } from "./ProfileStyles";


const Profile = ({ navigation }: any) => {


    // const [feedbackData, setfeedbackData]: any = useState([
    //     {
    //         id: 1,
    //         name: "Food Quality",
    //         selected: true,
    //         options: [
    //             {
    //                 id: 1,
    //                 name: "Excellent",
    //                 image: require('../../../assets/Images/excellent.png'),
    //                 checked: false
    //             },
    //             {
    //                 id: 2,
    //                 name: "Good",
    //                 image: require('../../../assets/Images/good.png'),
    //                 checked: false
    //             },
    //             {
    //                 id: 3,
    //                 name: "Need Improvement",
    //                 image: require('../../../assets/Images/needImprovement.png'),
    //                 checked: false
    //             }
    //         ]
    //     },
    //     {
    //         id: 2,
    //         name: "Service Quality",
    //         selected: false,
    //         options: [
    //             {
    //                 id: 1,
    //                 name: "Excellent",
    //                 image: require('../../../assets/Images/excellent.png'),
    //                 checked: false
    //             },
    //             {
    //                 id: 2,
    //                 name: "Good",
    //                 image: require('../../../assets/Images/good.png'),
    //                 checked: false
    //             },
    //             {
    //                 id: 3,
    //                 name: "Need Improvement",
    //                 image: require('../../../assets/Images/needImprovement.png'),
    //                 checked: false
    //             }
    //         ]
    //     },
    //     {
    //         id: 3,
    //         name: "Food1 Quality",
    //         selected: false,
    //         options: [
    //             {
    //                 id: 1,
    //                 name: "Excellent",
    //                 image: require('../../../assets/Images/excellent.png'),
    //                 checked: false
    //             },
    //             {
    //                 id: 2,
    //                 name: "Good",
    //                 image: require('../../../assets/Images/good.png'),
    //                 checked: false
    //             },
    //             {
    //                 id: 3,
    //                 name: "Need Improvement",
    //                 image: require('../../../assets/Images/needImprovement.png'),
    //                 checked: false
    //             }
    //         ]
    //     },
    //     {
    //         id: 4,
    //         name: "Service1 Quality",
    //         selected: false,
    //         options: [
    //             {
    //                 id: 1,
    //                 name: "Excellent",
    //                 image: require('../../../assets/Images/excellent.png'),
    //                 checked: false
    //             },
    //             {
    //                 id: 2,
    //                 name: "Good",
    //                 image: require('../../../assets/Images/good.png'),
    //                 checked: false
    //             },
    //             {
    //                 id: 3,
    //                 name: "Need Improvement",
    //                 image: require('../../../assets/Images/needImprovement.png'),
    //                 checked: false
    //             }
    //         ]
    //     },
    // ]);
    const [feedbackData1, setfeedbackData1]: any = useState([]);

    const [selectedState, setselectedState]: any = useState({});
    const [selectedIndex, setselectedIndex]: any = useState(0);
    const [submitLoading, setsubmitLoading] = useState(false);
    const [AlertVisible, setAlertVisible] = useState(false);
    const [progress, showProgress] = useState(false);
    const [submitData, setSubmitData]: any = useState([]);
    const [selectedOption, setSelectedOption]: any = useState(null);

    const scrollRef: any = useRef(null);


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            showProgress(true);
            setselectedIndex(0);
            setSubmitData([]);
            API.post('app/FeedbackApp/GetQuestions/11').then((res: any) => {
                console.log("data==", res.data.Data);
                if (res.data.Code == 1) {
                    let data = res.data.Data;
                    data.filter((item: any, index: any) => {
                        if (index == 0) {
                            item.selected = true;
                        }
                        else {
                            item.selected = false;
                        }
                        item.lstOptions.filter((it: any, ind: any) => {
                            it.checked = false;
                        });
                    });

                    setfeedbackData1([...data]);
                    setselectedState(data[0]);
                    showProgress(false);
                }
            })
        });
        return unsubscribe;
    }, [navigation]);


    const selectedItem = async (item: any, index: any) => {
        await setselectedIndex(index);
        await setselectedState(feedbackData1[index]);
    }

    const setSelectedTrue = async (index: any) => {
        let newArray = feedbackData1;
        newArray.filter((item: any, i: any) => {
            if (item.QUE_ID == selectedState.QUE_ID) {
                item.selected = true
            }
        });
        setfeedbackData1([...newArray]);
    }

    const nextItem = async (id: any, index: number) => {
        setselectedIndex(index);
        setSelectedTrue(index);
        setselectedState({ ...feedbackData1[index] });
        setData(id);
    }

    const submit = async (id: any, index: number) => {
        setselectedIndex(index);
        setSelectedTrue(index);
        setselectedState({ ...feedbackData1[index] });
        setData(id);
        setsubmitLoading(true);

        API.post('app/FeedbackApp/SubmitUserFeedback/11/5', submitData).then((res: any) => {
            try {
                console.log("res===", res);
                setsubmitLoading(false);
                setAlertVisible(true);
                console.log("submitData==", submitData);
            }
            catch (e) {
                console.log("e==", e);
            }
        }).catch((err: any) => {
            console.log("error==", err);
        })
        // setTimeout(() => {

        // }, 2000);
    }

    const setData = (queId: any) => {
        let data = submitData;
        let obj = {
            "FD_QUE_ID": queId,
            "FD_RATINGS": selectedOption
        }
        data.push(obj);
        setSubmitData([...data]);
    }

    const prevItem = async (index: number) => {
        setselectedIndex(index);
        setselectedState(feedbackData1[index]);
    }

    const checkOption = async (id: any, optionid: any, index: any) => {
        let newArray = feedbackData1;
        newArray.filter((item1: any, i: any) => {
            if (item1.QUE_ID == id) {
                item1.lstOptions.filter((item: any, ix: any) => {
                    if (item.checked == true) {
                        item1.lstOptions[ix].checked = false
                    }
                    if (item.VALUE == optionid) {
                        item1.lstOptions[index].checked = !item1.lstOptions[index].checked
                    }
                });
            }
        })
        setfeedbackData1([...newArray]);
        setSelectedOption(optionid);
    }

    function checkEmptyOptions(item: any) {
        return item.checked == true;
    }

    const RenderItem = ({ item, index }: any) => (
        <TouchableOpacity
            style={{
                width: responsiveWidth(10),
                marginLeft: responsiveWidth(4),
                borderWidth: 4,
                borderColor: item.selected ? colors.darkPrimary : colors.lightGray
            }} onPress={() => selectedItem(item, index)}></TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.topTitle}>We are appreciate your feedback!</Text>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                    <FlatList
                        data={feedbackData1}
                        renderItem={RenderItem}
                        keyExtractor={(item: any) => item.QUE_ID}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: marginHorizontal.semiSmall }}
                        horizontal
                        ref={scrollRef}
                        style={{ marginTop: spaceVertical.extraSmall }}
                    />
                </View>
            </View>

            <View style={styles.bodyView}>
                <Text style={styles.bodyText}>{selectedState?.QUE_ENGLISH}</Text>

                {selectedState && selectedState.lstOptions ?
                    selectedState.lstOptions.map((item: any, index: any) => (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginTop: spaceVertical.small }}>
                            <View style={{
                                width: responsiveWidth(16),
                                height: responsiveHeight(4),
                                borderRadius: borderRadius.bigboxradius,
                                backgroundColor: item.checked ? colors.darkPrimary : colors.lightGray
                            }}>
                                <TouchableOpacity activeOpacity={0.75}
                                    style={
                                        item.checked ? styles.emojiPositionChecked : styles.emojiPotionReguler
                                    } onPress={() => checkOption(selectedState.QUE_ID, item.VALUE, index)}>
                                    <Image source={{ uri: API_URL + item.IMAGE }} style={{
                                        height: responsiveWidth(5),
                                        width: responsiveWidth(5),
                                    }} resizeMode="contain" />
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.optionText}>{item.TEXT}</Text>
                        </View>
                    )) : null}
            </View>
            {/* Previous Button */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: responsiveHeight(10) }}>
                {selectedIndex != 0 ?
                    <TouchableOpacity style={styles.prevButtonView} onPress={() => {
                        let index: any = selectedIndex;
                        prevItem(index - 1);
                    }}>
                        <Text style={styles.prevButtonText}>Previous</Text>
                    </TouchableOpacity>
                    : null}
                {/* Next Button */}
                {selectedIndex != feedbackData1.length - 1 ?
                    <TouchableOpacity style={styles.nextButtonView} onPress={() => {
                        let index: any = selectedIndex;
                        const a = selectedState.lstOptions.find(checkEmptyOptions);
                        if (!a) {
                            showToast("Please Select Option");
                        }
                        else {
                            nextItem(selectedState.QUE_ID, index + 1);
                        }
                    }}>
                        <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                    : null}

                {/* Submit Button */}
                {selectedIndex == feedbackData1.length - 1 ?
                    <TouchableOpacity style={styles.submitButtonView} onPress={() => {
                        let index: any = selectedIndex;
                        const a = selectedState.lstOptions.find(checkEmptyOptions);
                        if (!a) {
                            showToast("Please Select Option");
                        }
                        else {
                            submit(selectedState.QUE_ID, index);
                        }
                    }}>
                        <Text style={styles.submitButtonText}>{!submitLoading ? 'Submit' : <ActivityIndicator color={colors.white} />}</Text>
                    </TouchableOpacity>
                    : null}
            </View>

            <Alert
                AlertVisible={AlertVisible}
                setAlertVisible={(value: any) => setAlertVisible(value)}
                AlertMsgType="feedback"
                AlertMsg="Your Response has been submitted"
                navigation={navigation}
            />
            <LoadingView showProgressDialog={progress} />
        </View>

    )


}

export default Profile;
