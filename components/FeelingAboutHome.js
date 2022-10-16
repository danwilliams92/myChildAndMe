import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Emoji from 'react-native-emoji';

const FeelingAboutHome = ({header, formData, setFormData}) => {
    return (
        <View>
                        <View><Text style={styles.headerText}>{header}</Text></View>
                        <View style={styles.emojiContainer}>
                            <View style={styles.emojiRow}>
                                <TouchableOpacity  style={styles.pressable} onPress={() => setFormData({...formData, feelingAboutHome: "Okay" })}><Emoji name="smile" style={{fontSize: 50}} /><Text style={styles.formText}>Okay</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.pressable} onPress={() => setFormData({...formData, feelingAboutHome: "Safe"})}><Emoji name="relieved" style={{fontSize: 50}} /><Text style={styles.formText}>Safe</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.pressable} onPress={() => setFormData({...formData, feelingAboutHome: "Happy"})}><Emoji name="grin" style={{fontSize: 50}}  /><Text style={styles.formText}>Happy</Text></TouchableOpacity>
                            </View>
                            <View style={styles.emojiRow}>
                                <TouchableOpacity style={styles.pressable} onPress={() => setFormData({...formData, feelingAboutHome: "Sad"})}><Emoji name="cry" style={{fontSize: 50}}  /><Text style={styles.formText}>Sad</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.pressable} onPress={() => setFormData({...formData, feelingAboutHome: "Angry/Frustrated"})}><Emoji name="rage" style={{fontSize: 50}}  /><Text style={styles.formText}>Angry/Frustrated</Text></TouchableOpacity>
                            </View>
                            <View style={styles.emojiRow}>
                                <TouchableOpacity style={styles.pressable}  onPress={() => setFormData({...formData, feelingAboutHome: "Anxious"})}><Emoji name="worried" style={{fontSize: 50}}  /><Text style={styles.formText}>Anxious</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.pressable}  onPress={() => setFormData({...formData, feelingAboutHome: "Afraid"})}><Emoji name="fearful" style={{fontSize: 50}}  /><Text style={styles.formText}>Afraid</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.pressable}  onPress={() => setFormData({...formData, feelingAboutHome: "Tired"})}><Emoji name="sleepy" style={{fontSize: 50}}  /><Text style={styles.formText}>Tired</Text></TouchableOpacity>
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
    formText: {
        color: "#84BF68",
        textAlign: "center",
        fontSize: 22,
        padding: 2
    },
    headerText: {
        fontSize: 28,
        padding: 4,
        marginBottom: 4,
        color: "#84BF68"
    },
    pressable: {
        padding: 8,
        marginVertical: 4,
        marginHorizontal: 6
    }
});