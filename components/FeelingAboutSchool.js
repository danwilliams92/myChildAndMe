import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Emoji from 'react-native-emoji';

const FeelingAboutSchool = ({header, formData, setFormData}) => {
    return (
        <View>
                        <View><Text style={styles.headerText}>{header}</Text></View>
                        <View style={styles.emojiContainer}>
                            <View style={styles.emojiRow}>
                                <TouchableOpacity  style={styles.pressable} onPress={() => setFormData({...formData, feelingAboutSchool: "Okay" })}><Emoji name="smile" style={{fontSize: 50}} /><Text style={styles.formText}>Okay</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.pressable}  onPress={() => setFormData({...formData, feelingAboutSchool: "Safe"})}><Emoji name="relieved" style={{fontSize: 50}} /><Text style={styles.formText}>Safe</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.pressable}  onPress={() => setFormData({...formData, feelingAboutSchool: "Happy"})}><Emoji name="grin" style={{fontSize: 50}}  /><Text style={styles.formText}>Happy</Text></TouchableOpacity>
                            </View>
                            <View style={styles.emojiRow}>
                                <TouchableOpacity style={styles.pressable}  onPress={() => setFormData({...formData, feelingAboutSchool: "Sad"})}><Emoji name="cry" style={{fontSize: 50}}  /><Text style={styles.formText}>Sad</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.pressable}  onPress={() => setFormData({...formData, feelingAboutSchool: "Angry/Frustrated"})}><Emoji name="rage" style={{fontSize: 50}}  /><Text style={styles.formText}>Angry/Frustrated</Text></TouchableOpacity>
                            </View>
                            <View style={styles.emojiRow}>
                                <TouchableOpacity style={styles.pressable}   onPress={() => setFormData({...formData, feelingAboutSchool: "Anxious"})}><Emoji name="worried" style={{fontSize: 50}}  /><Text style={styles.formText}>Anxious</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.pressable}   onPress={() => setFormData({...formData, feelingAboutSchool: "Afraid"})}><Emoji name="fearful" style={{fontSize: 50}}  /><Text style={styles.formText}>Afraid</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.pressable}  onPress={() => setFormData({...formData, feelingAboutSchool: "Tired"})}><Emoji name="sleepy" style={{fontSize: 50}}  /><Text style={styles.formText}>Tired</Text></TouchableOpacity>
                            </View>
                        </View>
        </View>
    )
}

export default FeelingAboutSchool

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
    formText: {
        color: "#56849E",
        textAlign: "center",
        fontSize: 22,
        padding: 2

    },
    headerText: {
        fontSize: 28,
        padding: 4,
        marginBottom: 4,
        color: "#56849E"
    },
    pressable: {
        padding: 8,
        marginVertical: 4,
        marginHorizontal: 6    }
});