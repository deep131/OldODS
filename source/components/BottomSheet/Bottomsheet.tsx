import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { colors, fontFamily, fontSize, responsiveWidth, spaceVertical } from '../../styles/variables';
import { styles } from '../BottomSheet/Bottomsheetstyle';
import { Dropdown } from 'react-native-element-dropdown';
import { showToast } from '../../utils/commonUtils';

const Bottomsheet = ({
  isVisible,
  setIsVisible,
  headertext,
  btntext,
  squareImage,
  inputtext,
  text,
  secondinput,
  parentCallback,
  keyboardtype
}: any) => {
  const [enterPromo, setEnterPromo] = useState('');
  const [value, setValue]: any = useState(null);
  const [value1, setValue1]: any = useState(null);

  const carpetRangeData = [
    { startLabel: '6000', startValue: '6000', endLabel: '7000', endValue: '7000' },
    { startLabel: '7000', startValue: '7000', endLabel: '8000', endValue: '8000' },
    { startLabel: '8000', startValue: '8000', endLabel: '9000', endValue: '9000' },
    { startLabel: '9000', startValue: '9000', endLabel: '10000', endValue: '10000' },
  ];

  useEffect(() => {

  }, []);

  const checkrange = () => {
    // if(value == null || value1 == null){
    //    showToast("Both Range are required");
    //    return;
    // }
    if (parseInt(value1) < parseInt(value)) {
      return showToast("End Carpet Area should be bigger than the Start");
    }
    if ((parseInt(value1) - parseInt(value)) > 1000) {
      return showToast("The Difference should be not more than 1000");
    }
    parentCallback({
      id: 8,
      start: value,
      end: value1,
      carpetRange: `${value} - ${value1} sq.ft`,
    });
  }

  return (
    <>
      <Modal
        isVisible={isVisible}
        backdropTransitionInTiming={0}
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating
        avoidKeyboard={true}
        useNativeDriver={true}
        style={{
          margin: 0,
        }}>

        <View style={styles.bottomsheetview}>
          <View style={styles.innermainview}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: responsiveWidth(12),
              }}
              onPress={setIsVisible}>
              <IonIcon name="close-circle" style={styles.ionicons}></IonIcon>
            </TouchableOpacity>

            <View style={styles.rowview}>
              {squareImage ? (
                <Image
                  style={styles.bsimage}
                  source={
                    squareImage === false
                      ? null
                      : require('../../assets/Images/frame.png')
                  } resizeMode="contain"></Image>
              ) : null}

              <Text style={styles.bsheadertext}>{headertext}</Text>
            </View>
            <View style={{ width: responsiveWidth(90), alignSelf: 'center', marginTop: spaceVertical.small }}>
              <Text style={styles.bstext}>{text}</Text>
            </View>
            {secondinput === true ? null : (
              <TextInput
                style={styles.bsinputtext}
                placeholder={'Home Name'}></TextInput>


            )}
            {headertext != 'Carpet Area' ?
              <TextInput
                onChangeText={(text: any) => setEnterPromo(text)}
                style={[
                  styles.bsinputtext,
                  { marginVertical: spaceVertical.small },
                ]}
                placeholder={inputtext}
                keyboardType={keyboardtype}></TextInput>
              :
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginVertical: spaceVertical.extraSmall
              }}>
                {/* Start Range */}
                <View>
                  <Text style={{
                    color: colors.black,
                    fontFamily: fontFamily.medium,
                    fontSize: fontSize.normal,
                    textAlign: 'center'
                  }}>Start</Text>
                  <Dropdown
                    style={[styles.dropdown, { borderColor: colors.darkPrimary }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={carpetRangeData}
                    maxHeight={300}
                    itemTextStyle={{ color: '#000' }}
                    labelField="startLabel"
                    fontFamily={fontFamily.medium}
                    valueField="startValue"
                    placeholder='Select'
                    value={value}
                    onChange={item => {
                      setValue(item.startValue);
                    }}
                  />
                </View>
                {/* End Range */}
                <View>
                  <Text style={{
                    color: colors.black,
                    fontFamily: fontFamily.medium,
                    fontSize: fontSize.normal,
                    textAlign: 'center'
                  }}>End</Text>
                  <Dropdown
                    style={[styles.dropdown, { borderColor: colors.darkPrimary }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={carpetRangeData}
                    maxHeight={300}
                    itemTextStyle={{ color: '#000' }}
                    labelField="endLabel"
                    fontFamily={fontFamily.medium}
                    valueField="endValue"
                    placeholder='Select'
                    value={value1}
                    onChange={item => {
                      setValue1(item.endValue);
                    }}
                  />
                </View>
              </View>
            }

            <TouchableOpacity
              onPress={() => {
                {
                  headertext != "Carpet Area" ?
                  parentCallback(enterPromo)
                  : checkrange()
                }
              }}
              style={styles.button}>
              <Text style={[styles.bsheadertext, { color: colors.white }]}>
                {btntext}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>
    </>
  );
};
export default Bottomsheet;
