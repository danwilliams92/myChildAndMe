import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import NamingYourFeelingsPage from './NamingYourFeelingsPage';
//            <FontAwesome name="leaf" color="green" size={40} />

const ContentCard = (props) => {
    return (
            <View>
                    <FontAwesome name={props.IconName} color={props.IconColor} size={40} />
                    <Text style={styles.contentCardText}>{props.CardTitle}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
   
    contentCardText: {
        color: "#FCFCFC",
        fontSize: 24,
        marginLeft: 8
    }
});

export default ContentCard