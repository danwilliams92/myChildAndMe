import React from 'react'
import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import Emoji from 'react-native-emoji';

const FeelingToday = ({header,formData, setFormData}) => {
    
    return (
        <View>
                        <View><Text style={styles.headerText}>{header}</Text></View>
                        <View style={styles.emojiContainer}>
                            <View style={styles.emojiRow}>
                                <TouchableOpacity style={styles.pressable}onPress={() => setFormData({...formData, feelingToday: "Okay" }) }><Emoji name="smile" style={{fontSize: 50}} /><Text style={styles.formText}>Okay</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.pressable} onPress={() => setFormData({...formData, feelingToday: "Safe"})}><Emoji name="relieved" style={{fontSize: 50}} /><Text style={styles.formText}>Safe</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.pressable} onPress={() => setFormData({...formData, feelingToday: "Happy"})}><Emoji name="grin" style={{fontSize: 50}}  /><Text style={styles.formText}>Happy</Text></TouchableOpacity>
                            </View>
                            <View style={styles.emojiRow}>
                                <TouchableOpacity style={styles.pressable} onPress={() => setFormData({...formData, feelingToday: "Sad"})}><Emoji name="cry" style={{fontSize: 50}}  /><Text style={styles.formText}>Sad</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.pressable} onPress={() => setFormData({...formData, feelingToday: "Angry/Frustrated"})}><Emoji name="rage" style={{fontSize: 50}}  /><Text style={styles.formText}>Angry/Frustrated</Text></TouchableOpacity>
                            </View>
                            <View style={styles.emojiRow}>
                                <TouchableOpacity  style={styles.pressable} onPress={() => setFormData({...formData, feelingToday: "Anxious"})}><Emoji name="worried" style={{fontSize: 50}}  /><Text style={styles.formText}>Anxious</Text></TouchableOpacity>
                                <TouchableOpacity  style={styles.pressable} onPress={() => setFormData({...formData, feelingToday: "Afraid"})}><Emoji name="fearful" style={{fontSize: 50}}  /><Text style={styles.formText}>Afraid</Text></TouchableOpacity>
                                <TouchableOpacity  style={styles.pressable} onPress={() => setFormData({...formData, feelingToday: "Tired"})}><Emoji name="sleepy" style={{fontSize: 50}}  /><Text style={styles.formText}>Tired</Text></TouchableOpacity>
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
        fontSize: 28,
        padding: 4,
        marginBottom: 4,
        color: "#EFC287"
    },
    formText: {
        color: "#EFC287",
        textAlign: "center",
        fontSize: 22,
        padding: 2
    },
    pressable: {
        padding: 8,
        marginVertical: 4,
        marginHorizontal: 6    }
});