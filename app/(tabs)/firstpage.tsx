import { router } from 'expo-router';
import {Text, View,Image, Dimensions,TouchableOpacity} from 'react-native';

const {height,width} = Dimensions.get('window');

export default function FirstPage  ()  {
    return ( 
        <View style={{ flex: 1}}>
             <View>
                    <View
                        style={{
                        width: width,
                        height: height * 0.7, // 60% of screen height
                        borderBottomLeftRadius: 60,
                        borderBottomRightRadius: 60,
                        overflow: 'hidden', // clip image corners
                        }}
                     >
                        <Image
                        source={require('../../assets/movies/mov.jpg')}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
                        }}
                        />
                    </View>
             </View>

               <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                     <Text
                            style={{
                            color: 'black',
                            fontSize: 36,
                            position: 'absolute',
                            marginBottom: '40%',
                            fontWeight: 'bold',
                            letterSpacing: 2,
                            textTransform: 'uppercase',
                            textShadowColor: 'rgba(0, 0, 0, 0.2)',
                            textShadowOffset: { width: 1, height: 2 },
                            textShadowRadius: 3,
                            }}
                        >
                            Trilens
                        </Text>
                        <TouchableOpacity
                            onPress={() => router.push('/dashboard')}
                            style={{
                            height: 45,
                            width: 140,
                            backgroundColor: 'white',
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: 'black',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 4,
                            elevation: 5,
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>Explore</Text>
                        </TouchableOpacity>
                </View>
          </View>
    ) 
}