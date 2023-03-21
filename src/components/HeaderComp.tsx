//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import imagePath from '../constants/imagePath';

// create a component
const HeaderComp = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={imagePath.showEye} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default HeaderComp;
