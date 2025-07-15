import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { castdata } from './data1'; // ✅ make sure the path is correct

export default function CastPage() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="chevron-back-outline" size={24} color="#111827" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Heading */}
      <Text style={styles.heading}>Meet the Cast</Text>
      <Text style={styles.subheading}>
        Dive into the world of your favorite characters. Here are the stars who brought them to life.
      </Text>

      {/* Cast Cards */}
      {castdata.map((item) => (
        <View key={item.id} style={styles.card}>
          {/* Image */}
          <Image source={item.image} style={styles.image} resizeMode="cover" />

          {/* Description */}
          <View style={styles.textContainer}>
            <Text style={styles.character}>{item.character}</Text>
            <Text style={styles.actor}>{item.actor}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 20,
    paddingTop: 50,
    marginBottom: 60,
    paddingBottom: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: '#111827',
    marginLeft: 4,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 6,
  },
  subheading: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 30,
    lineHeight: 22,
  },
  card: {
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
  },
  image: {
    width: 100,
    height: 120,
  },
  textContainer: {
    flex: 1,
    padding: 14,
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
  },
  character: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2,
  },
  actor: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: '#4B5563',
  },
});
