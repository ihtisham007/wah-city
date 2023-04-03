//import liraries
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import HeaderComp from '../../components/HeaderComp';
import imagePath from '../../constants/imagePath';
import navigationString from '../../constants/navigationString';
import colors from '../../styles/colors';
import styles from './styles';
import axios from 'axios';
import {moderateScale} from 'react-native-size-matters';
import store from '../../store';
import Dropdown from '../../components/DropDown';

const archieveData = require('./../../archieve.json');
// create a component
const VisitingPlaces = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBGColor] = useState('rgb(0,0,0)');
  const [jsonData, setJsonData] = useState([]);
  const [currentValue, setCurrentValue] = useState('');
  console.table(archieveData);
  const changeColoronClick = () => {
    setBGColor(colors.orange);
  };
  const openScreen = () => {
    navigation.navigate(navigationString.HOME);
  };
  const worldData = store.getState().worldData;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainStyles}>
          <SafeAreaView>
            <HeaderComp />
            <Dropdown
              label="Select a Country"
              items={worldData.map(country => ({
                label: country.label,
                value: country.value,
              }))}
              value={currentValue}
              setValue={setCurrentValue}
              placeholder="Countries"
              style={{marginTop: isOpen ? 200 : 20}}
            />
          </SafeAreaView>
          <Text style={styles.textMain}>Visiting Places in the City</Text>

          <View style={styles.topViewInput}>
            <TextInput
              placeholder="Search"
              style={[styles.topViewInputField]}
            />
          </View>

          <View style={styles.ViewRowDirection}>
            <Text
              style={[styles.textRowDirection, {color: bgColor}]}
              onPress={changeColoronClick}>
              All
            </Text>
            <Text style={styles.textRowDirection}>City History</Text>
            <Text style={styles.textRowDirection}>Market</Text>
          </View>
          <View style={styles.ViewRowDirection}>
            <Text style={styles.textRowDirection}>National Parks</Text>
            <Text style={styles.textRowDirection}>
              Other Tourist Attraction
            </Text>
          </View>
          <View style={styles.viewImage}>
            {archieveData.map((ele, index: number) => {
              return (
                <TouchableOpacity onPress={openScreen}>
                  <ImageBackground
                    source={{uri: ele.pic}}
                    style={styles.viewImages}
                  />
                  <View
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={styles.backImages}>
                    <Text>{ele.name}</Text>
                    <Text>{ele.uIdentifier}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default VisitingPlaces;
