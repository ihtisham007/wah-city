import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import ButtonComp from '../../components/ButtonComp';
import Dropdown from '../../components/DropDown';
import navigationString from '../../constants/navigationString';
import store from '../../store';

const FirstStep = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const [stateValue, setStateValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

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
        store.dispatch({type: 'SET_WORLD_DATA', payload: countryItems});
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
        store.dispatch({type: 'SET_WORLD_DATA', payload: stateItems});
      })
      .catch(error => {});
  }, [currentValue]);

  useEffect(() => {
    fetch(`https://wahcity.com/api/v1/cities/${stateValue}`)
      .then(response => response.json())
      .then(data => {
        const cityItems = data.map(city => ({
          label: city.cityname,
          value: city.cityid,
        }));
        setCities(cityItems);
        store.dispatch({type: 'SET_WORLD_DATA', payload: cityItems});
      })
      .catch(error => {});
  }, [stateValue]);

  const handleSubmit = () => {
    navigation.navigate(navigationString.VISITING_PLACE);
  };
  const worldData = store.getState().worldData;
  return (
    <View style={styles.container}>
      <Dropdown
        label="Select a country"
        items={countries}
        value={currentValue}
        setValue={setCurrentValue}
        placeholder="Countries"
        style={{marginTop: isOpen ? 200 : 20}}
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
        setValue={setCityValue}
        placeholder="Cities"
        style={{marginTop: isOpen ? 100 : 20}}
      />
      <View>
        <ButtonComp
          btnText="Submit"
          buttonStyles={styles.btnGo}
          onPress={handleSubmit}
        />
        {worldData.map((item, index) => (
          <Text key={index}>{item.label}</Text>
        ))}
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
