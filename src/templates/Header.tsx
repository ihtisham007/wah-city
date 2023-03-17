import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import tw from 'twrnc';

type HeaderProps = {
  title: string;
};

export default function Header({title}: HeaderProps) {
  return (
    <View style={tw`h-16 bg-blue-500 justify-center items-center`}>
      <Text style={tw`text-white text-2xl font-bold`}>{title}</Text>
      <Text style={styles.title}>Second Term!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
