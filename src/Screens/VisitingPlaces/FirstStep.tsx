import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {moderateScale} from 'react-native-size-matters';
import ButtonComp from '../../components/ButtonComp';
import Dropdown from '../../components/DropDown';

const FirstStep = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const [stateValue, setStateValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCity] = useState([]);
  useEffect(() => {
    fetch('https://wahcity.com/api/v1/countries')
      .then(response => response.json())
      .then(data => {
        const countryItems = data.map(
          (country: {countryname: any; countryid: any}) => {
            return {label: country.countryname, value: country.countryid};
          },
        );
        setCountries(countryItems);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch(`https://wahcity.com/api/v1/states/${currentValue}`)
      .then(response => response.json())
      .then(data => {
        const stateItems = data.map(state => ({
          label: state.statename,
          value: state.stateid,
        }));
        setStates(stateItems);
      })
      .catch(error => {
        console.error(error);
      });
  }, [currentValue]);

  useEffect(() => {
    fetch(`https://wahcity.com/api/v1/cities/${cityValue}`)
      .then(response => response.json())
      .then(data => {
        const cityItems = data.map(state => ({
          label: state.cityname,
          value: state.cityid,
        }));
        setCity(cityItems);
      })
      .catch(error => {
        console.error(error);
      });
  }, [cityValue]);

  return (
    <View style={styles.container}>
      <Dropdown
        label="Select a country"
        items={countries}
        value={currentValue}
        setValue={setCurrentValue}
        placeholder="Countries"
      />
      <Dropdown
        label="Select a State"
        items={states}
        value={stateValue}
        setValue={setStateValue}
        placeholder="States"
        style={{marginTop: isOpen ? 175 : 20}}
      />
      <Dropdown
        label="Select a city"
        items={cities}
        value={cityValue}
        setValue={setCity}
        placeholder="Cities"
        style={{marginTop: isOpen ? 100 : 20}}
      />
      <View>
        <ButtonComp btnText="Submit" buttonStyles={styles.btnGo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    padding: moderateScale(10),
  },
  btnGo: {
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
  },
});

export default FirstStep;
