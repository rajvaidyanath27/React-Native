import { Image, Text, Pressable, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Allign from './allItems';
import Stack from './lowStack';
import Create from './Create';
import { router } from 'expo-router';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Dashboard() {
  const [view, Setview] = useState(0);

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 35, backgroundColor: '#fff' }}>
      
      {/* Back + Title */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            backgroundColor: '#0a2d9dff',
            height: 36,
            width: 36,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
          }}
        >
          <FontAwesome name="arrow-left" size={18} color="white" />
        </TouchableOpacity>

        <Text style={{ fontSize: 24, color: 'black', marginLeft: 12, fontWeight: 'bold' }}>
          Trilens
        </Text>
      </View>

      {/* Tab Buttons */}
      <View style={{ flexDirection: 'row', gap: 15, marginBottom: 30 }}>
        <Pressable
          style={{
            height: 32,
            width: 80,
            backgroundColor: view === 0 ? 'black' : 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            borderColor: 'black',
            borderWidth: 1,
          }}
          onPress={() => Setview(0)}
        >
          <Text style={{ color: view === 0 ? 'white' : 'black' }}>Movies</Text>
        </Pressable>

        <Pressable
          style={{
            height: 32,
            width: 100,
            backgroundColor: view === 1 ? 'black' : 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            borderColor: 'black',
            borderWidth: 1,
          }}
          onPress={() => Setview(1)}
        >
          <Text style={{ color: view === 1 ? 'white' : 'black' }}>Romantic</Text>
        </Pressable>

        <Pressable
          style={{
            height: 32,
            width: 80,
            backgroundColor: view === 2 ? 'black' : 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            borderColor: 'black',
            borderWidth: 1,
          }}
          onPress={() => Setview(2)}
        >
          <Text style={{ color: view === 2 ? 'white' : 'black' }}>Drama</Text>
        </Pressable>
      </View>

      {/* Conditional Screens */}
      {view === 0 && <Allign />}
      {view === 1 && <Stack />}
      {view === 2 && <Create />}
    </View>
  );
}
