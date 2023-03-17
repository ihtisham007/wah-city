//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';

// create a component
const TextInputLabel = ({
  label,
  placeholder,
  onChangeText = () => {},
  inputStyle = {},
  rightIcon,
  onPressRight,
  ...props
}) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{...styles.emailLogin, ...inputStyle}}>
      <Text style={styles.labelTextStyle}>{label}</Text>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={styles.flexView}>
        <TextInput
          placeholder={placeholder}
          style={styles.inputStyle}
          {...props}
        />
        {rightIcon ? (
          <TouchableOpacity activeOpacity={0.8} onPress={onPressRight}>
            <Image
              style={{tintColor: colors.blackOpacity30}}
              source={rightIcon}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  emailLogin: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    borderRadius: moderateScale(4),
  },
  inputStyle: {
    paddingVertical: moderateScale(8),
    fontSize: scale(16),
    color: colors.blackOpacity80,
    flex: 1,
  },
  labelTextStyle: {
    fontSize: scale(14),
    color: colors.blackOpacity50,
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

//make this component available to the app
export default TextInputLabel;
