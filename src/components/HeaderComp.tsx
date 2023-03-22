//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import imagePath from '../constants/imagePath';
import {Aqure} from './../styles/fonts/Aquire-BW0ox.otf';

// create a component
const HeaderComp = ({onPressBack}) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={!!onPressBack ? onPressBack : () => goBack()}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styles.textLogo}>Wah</Text>
          </View>
          <View>
            <Text style={styles.textLogo}>City</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateScale(42),
  },
  textLogo: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: moderateScale(1),
    lineHeight: moderateScale(40),
    fontFamily: Aqure,
    color: '#2b2320',
  },
});

//make this component available to the app
export default HeaderComp;
