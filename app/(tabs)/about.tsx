import {Text, View, StyleSheet} from 'react-native';
import {Link }  from 'expo-router';

const Aboutscreen = () => {
    return (
        <View style= {styles.container}>
            <Text style = {styles.text}>
                Welcome to the about page
            </Text>
            <Link href = {'/'}>Go to home page</Link>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    }
});

export default Aboutscreen;