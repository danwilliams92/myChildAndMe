import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const HelpYouFeelBetter = ({header, formData, setFormData}) => {
    return (
        <View>
                        <View style={styles.headerBar}><Text style={styles.headerText}>{header}</Text></View>
            <TextInput style={styles.textArea} placeholder="Write here!" value={formData.helpYouFeelBetterComments} onChangeText={(helpYouFeelBetterComments) => {setFormData({...formData, helpYouFeelBetterComments})}} />
        </View>
    )
}


const styles = StyleSheet.create({
    textArea: {
        height: 300,
        backgroundColor: "#EFC287",
        color: "#FCFCFC",
        padding: 12,
        borderRadius: 8,
        width:"90%"
    },
    headerBar: {
        backgroundColor: "#EFC287",
        paddingVertical: 4
        
    },
    headerText: {
        color: "#EFEFEF"
    }
});

export default HelpYouFeelBetter
