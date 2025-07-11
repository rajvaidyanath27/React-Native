import {Link} from 'expo-router'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.textButton}>Press Me</Text>
      </TouchableOpacity>
      <Link href = {'/about'}>Go to about</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'black',
    height: 50,
    width: 200,
    justifyContent: 'center',
    borderRadius: 5,
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
