import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Emoji from 'react-native-emoji';

const FeelingAboutHome = ({header, formData, setFormData}) => {
    return (
        <View>
                        <View style={styles.headerBar}><Text style={styles.headerText}>{header}</Text></View>
                        <View style={styles.emojiContainer}>
                            <View style={styles.emojiRow}>
                                <Pressable onPress={() => setFormData({...formData, feelingAboutHome: "Okay" })}><Emoji name="smile" style={{fontSize: 40}} /><Text style={styles.formText}>Okay</Text></Pressable>
                                <Pressable onPress={() => setFormData({...formData, feelingAboutHome: "Safe"})}><Emoji name="relieved" style={{fontSize: 40}} /><Text style={styles.formText}>Safe</Text></Pressable>
                                <Pressable onPress={() => setFormData({...formData, feelingAboutHome: "Happy"})}><Emoji name="grin" style={{fontSize: 40}}  /><Text style={styles.formText}>Happy</Text></Pressable>
                            </View>
                            <View style={styles.emojiRow}>
                                <Pressable onPress={() => setFormData({...formData, feelingAboutHome: "Sad"})}><Emoji name="cry" style={{fontSize: 40}}  /><Text style={styles.formText}>Sad</Text></Pressable>
                                <Pressable onPress={() => setFormData({...formData, feelingAboutHome: "Angry/Frustrated"})}><Emoji name="rage" style={{fontSize: 40}}  /><Text style={styles.formText}>Angry/Frustrated</Text></Pressable>
                            </View>
                            <View style={styles.emojiRow}>
                                <Pressable  onPress={() => setFormData({...formData, feelingAboutHome: "Anxious"})}><Emoji name="worried" style={{fontSize: 40}}  /><Text style={styles.formText}>Anxious</Text></Pressable>
                                <Pressable  onPress={() => setFormData({...formData, feelingAboutHome: "Afraid"})}><Emoji name="fearful" style={{fontSize: 40}}  /><Text style={styles.formText}>Afraid</Text></Pressable>
                                <Pressable  onPress={() => setFormData({...formData, feelingAboutHome: "Tired"})}><Emoji name="sleepy" style={{fontSize: 40}}  /><Text style={styles.formText}>Tired</Text></Pressable>
                            </View>
                        </View>
        </View>
    )
}

export default FeelingAboutHome

/*
<TextInput placeholder="How are you feeling today?" value={formData.feelingToday} onChangeText={(feelingToday) => {setFormData({...formData, feelingToday})}} />
<TextInput placeholder="Can I do anything to help you?" value={formData.feelingTodayComments} onChangeText={(feelingTodayComments) => {setFormData({...formData, feelingTodayComments})}} />
*/

const styles = StyleSheet.create({
    emojiContainer: {
        alignItems:"center",
        alignContent:"center"
    },
    emojiRow: {
        flexDirection:"row",
        alignItems: "center",
        alignContent: "center"
    },
    headerBar: {
        backgroundColor: "#84BF68",
        paddingVertical: 4
        
    },
    headerText: {
        color: "#EFEFEF"
    },
    formText: {
        color: "#84BF68",
        textAlign: "center"
    }
});