import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Emoji from 'react-native-emoji';

const FeelingToday = ({header, formData, setFormData}) => {
    
    return (
        <View>
                        <View style={styles.headerBar}><Text style={styles.headerText}>{header}</Text></View>
                        <View style={styles.emojiContainer}>
                            <View style={styles.emojiRow}>
                                <Pressable onPress={() => setFormData({...formData, feelingToday: "Okay" })}><Emoji name="smile" style={{fontSize: 40}} /><Text style={styles.formText}>Okay</Text></Pressable>
                                <Pressable onPress={() => setFormData({...formData, feelingToday: "Safe"})}><Emoji name="relieved" style={{fontSize: 40}} /><Text style={styles.formText}>Safe</Text></Pressable>
                                <Pressable onPress={() => setFormData({...formData, feelingToday: "Happy"})}><Emoji name="grin" style={{fontSize: 40}}  /><Text style={styles.formText}>Happy</Text></Pressable>
                            </View>
                            <View style={styles.emojiRow}>
                                <Pressable onPress={() => setFormData({...formData, feelingToday: "Sad"})}><Emoji name="cry" style={{fontSize: 40}}  /><Text style={styles.formText}>Sad</Text></Pressable>
                                <Pressable onPress={() => setFormData({...formData, feelingToday: "Angry/Frustrated"})}><Emoji name="rage" style={{fontSize: 40}}  /><Text style={styles.formText}>Angry/Frustrated</Text></Pressable>
                            </View>
                            <View style={styles.emojiRow}>
                                <Pressable  onPress={() => setFormData({...formData, feelingToday: "Anxious"})}><Emoji name="worried" style={{fontSize: 40}}  /><Text style={styles.formText}>Anxious</Text></Pressable>
                                <Pressable  onPress={() => setFormData({...formData, feelingToday: "Afraid"})}><Emoji name="fearful" style={{fontSize: 40}}  /><Text style={styles.formText}>Afraid</Text></Pressable>
                                <Pressable  onPress={() => setFormData({...formData, feelingToday: "Tired"})}><Emoji name="sleepy" style={{fontSize: 40}}  /><Text style={styles.formText}>Tired</Text></Pressable>
                            </View>
                        </View>
        </View>
    )
}

export default FeelingToday


const styles = StyleSheet.create({
    emojiContainer: {
        alignItems:"center",
        alignContent:"center"
    },
    emojiRow: {
        flexDirection:"row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-around",
        width:"auto"
    },
    headerBar: {
        backgroundColor: "#EFC287",
        paddingVertical: 4
        
    },
    headerText: {
        color: "#EFEFEF"
    },
    formText: {
        color: "#EFC287",
        textAlign: "center"
    }
});