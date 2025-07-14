import React from 'react';
import { View, Text,Image, Dimensions,TouchableOpacity } from 'react-native';

const {height,width} = Dimensions.get('window');

const Stack = () => {
   const data = [
    { id: 1, image: require('../../assets/movies/dash1.jpg') },
    { id: 2, image: require('../../assets/movies/mov4.jpeg') },
    { id: 3, image: require('../../assets/movies/dash3.webp') }
  ];
  return (
    <View>
       <View style={{ alignItems: 'center', justifyContent: 'center' }}>
             
              <View style={{marginTop:20}}>
                <View
                  style={{
                    width: width * 0.8,
                    height: height * 0.6, // 60% of screen height
                    borderTopLeftRadius: 60,
                    borderTopRightRadius: 60,
                    borderBottomLeftRadius: 60,
                    borderBottomRightRadius: 60,
                    overflow: 'hidden', // clip image corners
                  }}
                >
                  <Image
                    source={data[2].image}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'cover',
                    }}
                  />
                </View>
              </View>

                <View>
                         <TouchableOpacity
                                onPress={() => console.log('Watch Now pressed')}
                                style={{
                                  backgroundColor: '#132bb4ff',
                                  paddingVertical: 14,
                                  paddingHorizontal: 30,
                                  borderRadius: 30,
                                  shadowColor: '#000',
                                  shadowOffset: { width: 0, height: 4 },
                                  shadowOpacity: 0.3,
                                  shadowRadius: 6,
                                  elevation: 6,
                                  marginTop: 20,
                                }}
                                activeOpacity={0.8}
                              >
                                <Text
                                  style={{
                                    color: 'white',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    letterSpacing: 1,
                                  }}
                                >
                                  ▶ Watch Now
                                </Text>
                           </TouchableOpacity>
                      </View>
              
          </View>
    </View>
  );
};

export default Stack;
