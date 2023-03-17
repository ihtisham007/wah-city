//import liraries
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import colors from '../styles/colors';

// create a component
const ButtonComp = ({btnText, buttonStyles = {}, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{...styles.buttonStyles, ...buttonStyles}}>
      <Text style={styles.buttonStyleText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  buttonStyles: {
    height: moderateScale(48),
    color: colors.themeColor,
    borderRadius: moderateScale(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyleText: {
    fontSize: scale(12),
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

//make this component available to the app
export default ButtonComp;
