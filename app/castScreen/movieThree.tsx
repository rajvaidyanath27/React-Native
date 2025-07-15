import react from 'react';
import {Text,ScrollView, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation } from '@react-navigation/native';

export default function Casttwo() {

    const navigation = useNavigation();

    return (
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#F9FAFB',
            paddingHorizontal: 20,
            paddingTop: 50,
            marginBottom: 60,
            paddingBottom: 20,
          }}
        >
          {/* Back Button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <Icon name="chevron-back-outline" size={24} color="#111827" />
            <Text style={{ fontSize: 16, color: '#111827', marginLeft: 4 }}>Back</Text>
          </TouchableOpacity>
    
          {/* Heading */}
          <Text
            style={{
              fontSize: 26,
              fontWeight: 'bold',
              color: '#1F2937',
              marginBottom: 6,
            }}
          >
            Meet the Cast
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#4B5563',
              marginBottom: 30,
              lineHeight: 22,
            }}
          >
            Dive into the world of your favorite characters. Here are the stars who brought them to life.
          </Text>
    
          {/* Cards */}
          {[...Array(6)].map((_, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                borderRadius: 12,
                marginBottom: 20,
                overflow: 'hidden',
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 6,
              }}
            >
              {/* Image Placeholder */}
              <View
                style={{
                  width: 100,
                  height: 120,
                  backgroundColor: '#E5E7EB',
                }}
              >
                {/* Add your <Image> here later */}
              </View>
    
              {/* Description Placeholder */}
              <View
                style={{
                  flex: 1,
                  padding: 14,
                  justifyContent: 'center',
                  backgroundColor: '#F3F4F6',
                }}
              >
                {/* Add character/actor name and description here later */}
              </View>
            </View>
          ))}
        </ScrollView>
      );
    
    

}