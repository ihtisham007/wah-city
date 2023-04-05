import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import store from '../../store';
import {moderateScale} from 'react-native-size-matters';

const SingleVisitingPlaces = () => {
  const [visitingPlaces, setVisitingPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getUidentifier = store.getState().uidentifier;
        const response = await fetch(
          `https://wahcity.com/api/v1/visitingplace/${getUidentifier}`,
        );
        const json = await response.json();
        setVisitingPlaces(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: 'https://wahcity.com/images/visitingplaces/medium/' + item.img,
        }}
        style={styles.itemImage}
      />
      <Text style={styles.itemTitle}>{item.heading}</Text>
      <Text style={styles.itemDescription}>{item.shortdescription}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={visitingPlaces}
        renderItem={renderItem}
        keyExtractor={item => item.visitingplaceid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: moderateScale(10),
  },
  itemImage: {
    width: moderateScale(150),
    height: moderateScale(150),
    borderRadius: moderateScale(10),
  },
  itemTitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginVertical: moderateScale(5),
  },
  itemDescription: {
    fontSize: moderateScale(16),
    marginVertical: moderateScale(5),
  },
});

export default SingleVisitingPlaces;
