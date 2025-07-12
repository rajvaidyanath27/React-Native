import { View, Text,TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#5c91e0ff' }}>

          <View style={{ marginTop: 35, marginLeft:10 }}>
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

         <View style={{flex: 1, backgroundColor: 'white', marginTop: 20, borderTopRightRadius:50, borderTopLeftRadius:50}}>
            
            <View style={{ padding:50 }}>
                 <Text style={{ fontWeight: 'bold'}}>Email Address</Text>
                 <TextInput 
                  style={{ width:300, backgroundColor: '#edececff', borderRadius:10, marginTop:10 , paddingLeft: 10}}
                  placeholder= "Enter your email"
                  />
                  <Text style={{paddingTop: 30, fontWeight: 'bold'}}>Password</Text>
                 <TextInput 
                  style={{ width:300, backgroundColor:  '#edececff', borderRadius:10, marginTop:10, paddingLeft: 10}}
                  secureTextEntry={true}
                  placeholder= "Enter password"
                  />
            </View>
         </View>


     
    </View>
  );
}
