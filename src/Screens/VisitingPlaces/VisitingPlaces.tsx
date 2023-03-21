//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import navigationString from '../../constants/navigationString';
import colors from '../../styles/colors';
import styles from './styles';

// create a component
const VisitingPlaces = ({navigation}) => {
  const [bgColor, setBGColor] = useState('balack');
  const changeColoronClick = () => {
    setBGColor(colors.orange);
  };
  const openScreen = () => {
    navigation.navigate(navigationString.HOME);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainStyles}>
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
            <TouchableOpacity onPress={openScreen}>
              <Image
                source={imagePath.visitingPlace_1}
                style={styles.viewImages}
              />
            </TouchableOpacity>
            <Image
              source={imagePath.visitingPlace_2}
              style={styles.viewImages}
            />
            <Image
              source={imagePath.visitingPlace_3}
              style={styles.viewImages}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default VisitingPlaces;
