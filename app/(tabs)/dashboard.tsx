import { Image, Text, Pressable, TouchableOpacity, StyleSheet, View,  } from 'react-native';
import {useState} from 'react';
import Allign from './allItems';
import Stack from './lowStack';
import Create from './Create';  
import { router, useRouter } from 'expo-router';

export default function Dashboard() {

  const[view,Setview] = useState(0);

  return (
    <View style={{ flex: 1, paddingLeft:20 }}>
      <Text style={{ fontSize: 24, color: 'black', marginTop: 40, }}>Dashboard</Text>

      <View style={{ flexDirection: 'row', gap: 15, paddingHorizontal: 20,paddingTop:30 }}>
        <Pressable
          style={{
            height: 35,
            width: 80,
            backgroundColor: view === 0 ? 'black' : 'transparent',
            
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            
            borderColor: 'black',
            borderWidth: 1,
           
          }}  onPress= {() => Setview(0)}
        >
          <Text style={{color:  view === 0 ? 'white' : 'black',}}>Movies</Text>
        </Pressable>

        <Pressable
          style={{
            height: 35,
            width: 100,
            backgroundColor: view === 1 ? 'black' : 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
             borderColor: 'black',
            borderWidth: 1
          }} onPress = {() => Setview(1)}
        >
          <Text style={{color:  view === 1 ? 'white' : 'black',}}>Romantic</Text>
        </Pressable>

        <Pressable
          style={{
            height: 35,
            width: 80,
             backgroundColor: view === 2 ? 'black' : 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
             borderColor: 'black',
            borderWidth: 1
          }}  onPress = { () => Setview(2)}
        >
          <Text style={{color:  view === 2 ? 'white' : 'black',}}>Drama</Text>
        </Pressable>
      </View>

     { view === 0 && <Allign /> }
     { view ===1 && <Stack />}
     {view === 2 && <Create />}



     <TouchableOpacity style={{marginBottom: 80}} onPress={() => router.push('/')}>
            <Text style={{width: 200, height: 40, color: 'black'}}>suck me </Text>
          </TouchableOpacity>

    </View>
  );
}
