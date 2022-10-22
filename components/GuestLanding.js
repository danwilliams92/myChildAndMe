import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useFonts, Neucha_400Regular } from '@expo-google-fonts/Neucha';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const GuestLandingModal = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        Neucha_400Regular,
      });
      if(!fontsLoaded){ 
          return null;
      }

    return (
        <View style={styles.container}> 
        <MaterialIcons name="family-restroom" size={60} color="#FCFCFC" />
            <Text style={styles.text}>Welcome!</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('My Child And Me Page')}><Text style={[styles.buttonText]}>Click here to continue as a guest</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFCB9E",
        flex:1,
        alignItems: "center",
        justifyContent:"center"
    },
    text:{
        fontFamily: "Neucha_400Regular",
        color: "#FCFCFC",
        fontSize: 30

    },
    button:{
        marginTop: 4,
        backgroundColor:"#FCFCFC",
        width:"75%",
        paddingVertical: 12,
        borderRadius: 16,
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 6,
textAlign:"center"
    },
    buttonText: {
        color:"#FFCB9E",
        fontFamily: "Neucha_400Regular",
        fontSize: 30,
        marginHorizontal: 4

    }
});

export default GuestLandingModal
