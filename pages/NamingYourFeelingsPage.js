import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import HomeButton from '../components/HomeButton'
import { useFonts, Neucha_400Regular } from '@expo-google-fonts/Neucha';
import Ionicons from 'react-native-vector-icons/Ionicons'

const NamingYourFeelingsPage = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        Neucha_400Regular,
      });
      if(!fontsLoaded){ 
          return null;
      }

    return (
        <View style={styles.mainContainer}>
 <View style={styles.topHeader}>

<Text style={styles.topHeaderText}>Naming Your Feelings</Text>
</View>
        <Pressable onPress={() => navigation.goBack()}><Ionicons name="chevron-back-circle" size={50} style={{backgroundColor: "#E7DCB6"}} /></Pressable>
            <Pressable onPress={() => navigation.navigate('My Child And Me Page')}><HomeButton /></Pressable>

        </View>
    )
}

const styles = StyleSheet.create({

    topHeader: {
        textAlign: "center",
        backgroundColor: "#E7DCB6",
        width: "100%"
      },
      topHeaderText: {
        color: "#ffffff",
        paddingVertical: 6,
        fontSize: 26,
        fontFamily: "Neucha_400Regular"
    
      },
      mainContainer: {
        alignItems: "center",
        flex:1,
        justifyContent:"space-between"
      }
})



export default NamingYourFeelingsPage
