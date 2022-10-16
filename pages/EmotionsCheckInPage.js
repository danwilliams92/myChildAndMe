import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Form from '../components/Form';
import HomeButton from '../components/HomeButton';

const EmotionsCheckInPage = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topHeader}>

<Text style={styles.topHeaderText}>Emotions Check In</Text>
</View>
            <Form />
            <Pressable onPress={() => navigation.navigate('My Child And Me Page')}><HomeButton /></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        alignContent: "center",
        width: "100%",
        textAlign: "center",
        flex:1,
        justifyContent: "space-between"
    },
    topHeader: {
        textAlign: "center",
        backgroundColor: "#EFC287",
        width: "100%"
      },
      topHeaderText: {
        color: "#ffffff",
        paddingVertical: 6,
        fontSize: 26,
        fontFamily: "Neucha_400Regular"

      }

});

export default EmotionsCheckInPage
