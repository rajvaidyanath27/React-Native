import React from 'react';
import { View, Image,Text, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

const Align = () => {
  const data = [
    { id: 1, image: require('../../assets/movies/mov.jpg') },
    { id: 2, image: require('../../assets/movies/mov4.jpeg') },
    { id: 3, image: require('../../assets/movies/sunny-leone.avif') }
  ];

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Allign</Text>
    </View>

  );
};




export default Align;
