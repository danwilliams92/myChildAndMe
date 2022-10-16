import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts, Neucha_400Regular } from '@expo-google-fonts/Neucha';

//import NamingYourFeelingsPage from './NamingYourFeelingsPage';
//            <FontAwesome name="leaf" color="green" size={40} />

const ContentCard = (props) => {
    let [fontsLoaded] = useFonts({
        Neucha_400Regular,
      });
      if(!fontsLoaded){ 
          return null;
      }
    return (
            <View style={props.cardStyle}>
                    <MaterialCommunityIcons name={props.IconName} color={props.IconColor} size={60} />
                    <Text style={styles.contentCardText}>{props.CardTitle}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
   
    contentCardText: {
        color: "#FCFCFC",
        fontSize: 28,
        marginLeft: 8,
        fontFamily: "Neucha_400Regular"

    }
});

export default ContentCard