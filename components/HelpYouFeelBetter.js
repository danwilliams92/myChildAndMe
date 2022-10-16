import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useFonts, Neucha_400Regular } from '@expo-google-fonts/Neucha';


const HelpYouFeelBetter = ({header, formData, setFormData}) => {
    let [fontsLoaded] = useFonts({
        Neucha_400Regular,
      });
      if(!fontsLoaded){ 
          return null;
      }

    return (
        <View>
                        <View><Text style={styles.headerText}>{header}</Text></View>
            <TextInput style={styles.textArea} placeholder="Write here!" value={formData.helpYouFeelBetterComments} onChangeText={(helpYouFeelBetterComments) => {setFormData({...formData, helpYouFeelBetterComments})}} />
        </View>
    )
}


const styles = StyleSheet.create({
    textArea: {
        height: 200,
        backgroundColor: "#EFC287",
        color: "#FCFCFC",
        padding: 12,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        fontSize: 22,
        fontFamily: "Neucha_400Regular"

    },


    headerText: {
        fontSize: 28,
        padding: 4,
        marginBottom: 6,
        color: "#EFC287",
        fontFamily: "Neucha_400Regular"
    }
});

export default HelpYouFeelBetter
