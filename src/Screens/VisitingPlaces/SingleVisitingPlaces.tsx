import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {WebView} from 'react-native-webview';

import store from '../../store';
import {moderateScale} from 'react-native-size-matters';

const SingleVisitingPlaces = () => {
  const [visitingPlaces, setVisitingPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getUidentifier = store.getState().uidentifier;
        const response = await fetch(
          `https://wahcity.com/api/v1/visitingplace/${getUidentifier}`,
        );
        const json = await response.json();
        setVisitingPlaces(json);
        setIsLoading(false);
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
      {/* {item.video.length > 0 && (
        <WebView
          style={styles.videoContainer}
          allowsFullscreenVideo={true}
          javaScriptEnabled={true}
          source={{uri: 'https://www.youtube.com/watch?v=' + item.video}}
        />
      )} */}
      <Text style={styles.itemTitle}>{item.heading}</Text>
      <Text style={styles.itemDescription}>{item.textualcontent}</Text>
    </View>
  );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

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
  },
  itemImage: {
    width: '100%',
    height: moderateScale(200),
    borderRadius: moderateScale(10),
  },
  itemTitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginVertical: moderateScale(5),
    width: '100%',
    textAlign: 'center',
    // borderBottomWidth: 2,
    // borderBottomColor: 'black',
    // flexWrap: 'wrap',
  },
  itemDescription: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    marginVertical: moderateScale(5),
    textAlign: 'center',
    paddingHorizontal: moderateScale(10),
    fontFamily: 'OpenSans-Regular', // assuming you have this font imported
    color: '#333', // dark gray text color
  },
  videoContainer: {
    marginTop: moderateScale(10),
    width: '100%',
    height: moderateScale(200),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SingleVisitingPlaces;
