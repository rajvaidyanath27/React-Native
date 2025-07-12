import {useRouter} from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Let's Get Started!</Text>
      </View>

     
      <View style={styles.centerContent}>
        <TouchableOpacity style={styles.div}>
          <Text style={styles.bottom}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have  an account? </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.loginButton}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5c91e0ff',
  },
  titleContainer: {
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  div: {
    height: 45,
    width: 250,
    backgroundColor: '#f4c430',
    borderRadius: 10,
    justifyContent: 'center',
  },
  bottom: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  loginText: {
    fontWeight: 'bold',
    color: 'white',
  },
  loginButton: {
    color: 'yellow',
    fontWeight: 'bold',
  },
});
