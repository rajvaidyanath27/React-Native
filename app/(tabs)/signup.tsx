import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#5c91e0ff' }}>
     
      <View style={{ marginTop: 35, marginLeft: 10 }}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            backgroundColor: '#e3de3c',
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <FontAwesome name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
      </View>

      
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          marginTop: 20,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        }}
      >
        <View style={{ padding: 50 }}>
          
          <Text style={{ fontWeight: 'bold' }}>Full Name</Text>
          <TextInput
            style={{
              width: 300,
              backgroundColor: '#edececff',
              borderRadius: 10,
              marginTop: 10,
              paddingLeft: 10,
            }}
            // placeholder="Enter your email"
          />

          <Text style={{ fontWeight: 'bold',paddingTop: 20 }}>Email Address</Text>
          <TextInput
            style={{
              width: 300,
              backgroundColor: '#edececff',
              borderRadius: 10,
              marginTop: 10,
              paddingLeft: 10,
            }}
            placeholder="Enter your email"
          />

         
          <Text style={{ paddingTop: 20, fontWeight: 'bold' }}>Password</Text>
          <TextInput
            style={{
              width: 300,
              backgroundColor: '#edececff',
              borderRadius: 10,
              marginTop: 10,
              paddingLeft: 10,
            }}
            secureTextEntry={true}
            placeholder="Enter password"
          />

         
          <View style={{ alignItems: 'flex-end', marginTop: 10 }}>
            <TouchableOpacity>
              <Text style={{ color: '#1f2021ff' }}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

         
          <TouchableOpacity onPress={() => router.push('/firstpage')}
            style={{
              backgroundColor: '#f4c430',
              height: 45,
              width: 200,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 5,
              alignSelf: 'center',
            }}
          > 
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000' }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20}}>Or</Text>

        
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 40,
              width: 160,
              alignSelf: 'center',
             
            }}
          >
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/apple.png')}
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#dfddddb4',
                  borderRadius: 10,

                }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/Google__G__logo.svg.png')}
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#dfddddb4',
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/images (3).png')}
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#dfddddb4',
                  borderRadius: 10,
                  
                }}
              />
            </TouchableOpacity>
          </View>

             <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 20}}>
                    <Text style={{fontWeight: 'bold'}}>Already have  an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/login')}>
                      <Text style={{color: '#efb60bff', fontWeight: 'semibold'}}>Log In</Text>
                    </TouchableOpacity>
             </View>
        </View>
      </View>
    </View>
  );
}
