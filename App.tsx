/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, ScrollView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import Counter from './src/components/Counter';
import Registration from './src/components/Registration';
import RajaSaab from './src/components/Rajasaab';
import {Text, View} from 'react-native';
import AuthStack from './src/Navigation/AuthStack';
import Routes from './src/Navigation/Routes';

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <Routes />
    </View>
  );
}

export default App;
