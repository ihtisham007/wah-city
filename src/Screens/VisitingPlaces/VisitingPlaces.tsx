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
  ActivityIndicator,
  FlatList,
} from 'react-native';
import HeaderComp from '../../components/HeaderComp';
import imagePath from '../../constants/imagePath';
import navigationString from '../../constants/navigationString';
import colors from '../../styles/colors';
import styles from './styles';
import axios from 'axios';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
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
  const [textInputValue, setTextInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoading, setContentLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [urlForPagination, setURlForPagination] = useState('');

  const openScreen = (uidentifier: string) => {
    store.dispatch({type: 'SET_UINDENTIFIER', payload: uidentifier});
    navigation.navigate(navigationString.SINGLE_VISITING_PLACES);
  };

  const getUrl = () => {
    let url = `https://wahcity.com/api/v1/visitingplaces?page=1`;
    if (currentValue && !textInputValue && !dataID && !dataTYPE) {
      setURlForPagination(`&catname=${currentValue}`);
    } else if (currentValue && textInputValue && !dataID && !dataTYPE) {
      setURlForPagination(`&catname=${currentValue}&place=${textInputValue}`);
    } else if (currentValue && !textInputValue && dataID && dataTYPE) {
      setURlForPagination(`&${dataTYPE}=${dataID}&catname=${currentValue}`);
    } else if (currentValue && textInputValue && dataID && dataTYPE) {
      setURlForPagination(
        `&${dataTYPE}=${dataID}&catname=${currentValue}&place=${textInputValue}`,
      );
    } else {
      return; // Do nothing if the conditions are not met
    }

    return url + setURlForPagination;
  };

  const getContentLoad = () => {
    setVisitingPlaces([]);
    setContentLoading(true);
    const url = getUrl();
    console.log(url);
    axios
      .get(url)
      .then(response => {
        setVisitingPlaces(response.data);
        setContentLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    const fetchPaginationData = async () => {
      try {
        console.log(setURlForPagination);
        setContentLoading(true);
        const VisitingPlacesResponse = await axios.get(
          `https://wahcity.com/api/v1/visitingplaces?page=${page}${urlForPagination}`,
        );
        setContentLoading(false);
        setVisitingPlaces([...visitingPlaces, ...VisitingPlacesResponse.data]);
      } catch (error) {
        console.log('error');
      }
    };
    fetchPaginationData();
  }, [page]);

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
        setIsLoading(false);
        setURlForPagination(`&${dataTYPE}=${dataID}`);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dataID, dataTYPE]);

  if (isLoading) {
    return isLoading ? (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : null;
  }

  const renderLoader = () => {
    return (
      <View
        style={{
          marginVertical: moderateVerticalScale(16),
          alignItems: 'center',
        }}>
        <ActivityIndicator size={'large'} color="#aaa" />
      </View>
    );
  };

  const loadMoreContent = () => {
    setPage(page + 1);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => openScreen(item.uidentifier)}>
        <ImageBackground
          source={{
            uri:
              'https://wahcity.com/images/visitingplaces/medium/' +
              item.featureimage,
          }}
          style={styles.viewImages}
        />
        <View style={styles.backImages}>
          <Text>{item.visitingplace}</Text>
          <Text>{item.uidentifier}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainStyles}>
          <SafeAreaView style={{zIndex: 1}}>
            <HeaderComp />
            <Dropdown
              label=""
              items={jsonData.map(category => ({
                label: category.catname,
                value: category.catname,
              }))}
              value={currentValue}
              setValue={setCurrentValue}
              placeholder={dataTYPE.toUpperCase()}
            />
          </SafeAreaView>

          <View style={styles.topViewInput}>
            <TextInput
              placeholder="Search"
              style={[styles.topViewInputField]}
              onChangeText={text => setTextInputValue(text)}
            />
          </View>
          <View>
            <ButtonComp btnText={'Search'} onPress={getContentLoad} />
          </View>
          <View style={styles.viewImage}>
            {/* {visitingPlaces.map((ele, index: number) => {
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
            })} */}
            <FlatList
              data={visitingPlaces}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              ListFooterComponent={renderLoader}
              onEndReached={loadMoreContent}
              onEndReachedThreshold={0}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default VisitingPlaces;
