import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Form from '../components/Form';

const EmotionsCheckInPage = () => {
    return (
        <View style={styles.mainContainer}>
            <Form />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        alignContent: "center",
        width: "100%",
        textAlign: "center"
    }

});

export default EmotionsCheckInPage
