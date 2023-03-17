import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import tw from 'twrnc';

import topbarImage from '../../assets/RajaSaab/topbar.jpg';

import men_1 from '../../assets/RajaSaab/Men/Men_1.jpg';
import men_2 from './../../assets/RajaSaab/Men/Men_2.jpg';
import men_3 from './../../assets/RajaSaab/Men/Men_3.jpg';
import men_4 from './../../assets/RajaSaab/Men/Men_4.jpg';

import kidClothing from '../../assets/RajaSaab/Kid_Banner.jpg'

const {width} = Dimensions.get('window');

const data = [
  {id: '1', image: topbarImage},
  {id: '2', image: topbarImage},
  {id: '3', image: topbarImage},
];

const menData = [
  {id: '4', image: men_1},
  {id: '5', image: men_2},
  {id: '6', image: men_3},
  {id: '7', image: men_4},
];

const ResponsiveImage = ({source, initWidth, initHeight}) => {
  const [width, setWidth] = React.useState(initWidth);
  const [height, setHeight] = React.useState(initHeight);

  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    const scaleFactor = width / initWidth;
    setWidth(width);
    setHeight(initHeight * scaleFactor);
  };

  return (
    <View onLayout={handleLayout}>
      <Image source={source} style={{width, height}} />
    </View>
  );
};

const ImageItem = ({item}) => {
  const imageSize = (width - 40) / 4;
  return (
    <View style={{padding: 5}}>
      <ResponsiveImage
        source={item.image}
        initWidth={imageSize}
        initHeight={imageSize}
      />
    </View>
  );
};

const RajaSaab = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ResponsiveImage
          source={topbarImage}
          initWidth={width + 90}
          initHeight={200}
        />
        <Text style={tw`p-4 font-bold text-lg text-center`}>
          WOMEN CLOTHING
        </Text>
        <FlatList
          data={data}
          renderItem={({item}) => <ImageItem item={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          contentContainerStyle={{padding: 5}}
        />
        <FlatList
          data={data}
          renderItem={({item}) => <ImageItem item={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          contentContainerStyle={{padding: 5}}
        />
        <Text style={tw`p-4 font-bold text-lg text-center`}>MEN CLOTHING</Text>
        <FlatList
          data={menData}
          renderItem={({item}) => <ImageItem item={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          contentContainerStyle={{padding: 5}}
        />
        <Text style={tw`p-4 font-bold text-lg text-center`}>KIDS CLOTHING</Text>
        <ResponsiveImage
          source={kidClothing}
          initWidth={width + 90}
          initHeight={200}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RajaSaab;
