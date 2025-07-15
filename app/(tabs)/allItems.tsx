import React from 'react';
import { View, Image,Text, Dimensions,TouchableOpacity } from 'react-native';
import {useRouter } from 'expo-router';


const { width, height } = Dimensions.get('window');


const Align = () => {
  const data = [
    { id: 1, image: require('../../assets/movies/dash1.jpg') },
    { id: 2, image: require('../../assets/movies/mov4.jpeg') },
    { id: 3, image: require('../../assets/movies/sunny-leone.avif') }
  ];
  const router = useRouter();

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
       
        <View style={{marginTop:0}}>
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
              source={data[0].image}
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
                    backgroundColor: '#3d19beff',
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

             <TouchableOpacity
                      onPress={() => router.push('../castScreen/movieOne')}
                      style={{
                        backgroundColor: '#8B5CF6', // violet-500
                        paddingVertical: 14,
                        paddingHorizontal: 24,
                        borderRadius: 30,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        elevation: 8,
                        alignSelf: 'center',
                        marginTop: 30,
                      }}
                    >
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 16,
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                        }}
                      >
                        Show Cast
                      </Text>
               </TouchableOpacity>
               
        </View>
    </View>

  );
};




export default Align;
