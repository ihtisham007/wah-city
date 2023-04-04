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
import ButtonComp from '../../components/ButtonComp';

// create a component
const VisitingPlaces = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBGColor] = useState('rgb(0,0,0)');
  const [jsonData, setJsonData] = useState([]);
  const [visitingPlaces, setVisitingPlaces] = useState([]);
  const [currentValue, setCurrentValue] = useState('');
  const openScreen = (uidentifier: string) => {
    console.log(uidentifier);
    navigation.navigate(navigationString.HOME);
  };
  const dataID = store.getState().dataID;
  const dataTYPE = store.getState().dataTYPE;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://wahcity.com/api/v1/visitingplacescategories?${dataTYPE}=${dataID}`,
        );
        setJsonData(response.data);
        const VisitingPlaces = await axios.get(
          `https://wahcity.com/api/v1/visitingplaces?page=1&${dataTYPE}=${dataID}`,
        );
        setVisitingPlaces(VisitingPlaces.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dataID, dataTYPE]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainStyles}>
          <Text>{dataID}</Text>
          <Text>{dataTYPE}</Text>
          <SafeAreaView>
            <HeaderComp />
            <Dropdown
              label="Select a Country"
              items={jsonData.map(category => ({
                label: category.catname,
                value: category.catid,
              }))}
              value={currentValue}
              setValue={setCurrentValue}
              placeholder="Countries"
              style={{marginTop: isOpen ? 200 : 20}}
            />
          </SafeAreaView>

          <View style={styles.topViewInput}>
            <TextInput
              placeholder="Search"
              style={[styles.topViewInputField]}
            />
          </View>
          <View>
            <View>
              <ButtonComp btnText="Search" />
            </View>
          </View>
          <View style={styles.viewImage}>
            {visitingPlaces.map((ele, index: number) => {
              return (
                <TouchableOpacity onPress={() => openScreen(ele.uidentifier)}>
                  <ImageBackground
                    source={{
                      uri:
                        'https://wahcity.com/images/visitingplaces/medium/' +
                        ele.featureimage,
                    }}
                    style={styles.viewImages}
                  />
                  <View
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={styles.backImages}>
                    <Text>{ele.visitingplace}</Text>
                    <Text>{ele.uidentifier}</Text>
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
