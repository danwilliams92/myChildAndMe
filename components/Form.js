import React, {useState} from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import FeelingAboutHome from './FeelingAboutHome';
import FeelingAboutSchool from './FeelingAboutSchool';
import FeelingToday from './FeelingToday';
import HelpYouFeelBetter from './HelpYouFeelBetter';
import { collection, addDoc, Timestamp } from '@firebase/firestore';
import {db} from '../firebase';
import TabsBar from './TabsBar';

const checkInCollection = collection(db, "checkInEntry");

const Form = () => {
    const [formData, setFormData] = useState({
        feelingToday: "",
        feelingTodayComments: "",
        feelingAboutSchool: "",
        feelingAboutSchoolComments: "",
        feelingAboutHome: "",
        feelingAboutHomeComments: "",
        helpYouFeelBetterComments: "",
        timeSubmitted: ""
    });

    const [isFormSubmitted, setFormSubmit] = useState(false);

    const formTitle = [
        "How are you feeling today?",
        "How are you feeling about school?",
        "How are you feeling about home?",
        "Is there anything I can do to help you feel better?"
    ]; 
    const [screen, setScreen] = useState(0);
    
    const screenDisplay = () => {
        if (screen === 0){
            return <FeelingToday formData={formData} setFormData={setFormData} header={formTitle[0]} />;
        } else if (screen === 1){
            return <FeelingAboutSchool formData={formData} setFormData={setFormData} header={formTitle[1]} />;
        } else if (screen === 2) {
            return <FeelingAboutHome formData={formData} setFormData={setFormData} header={formTitle[2]} />
        } else {
            return <HelpYouFeelBetter formData={formData} setFormData={setFormData} header={formTitle[3]} />
        }
    };

    const tabsBar = () => {
        if (screen === 0 || screen == 3){
            return <TabsBar iconColour="#EFC287" backgroundColour="#EFC287" />;
        } else if(screen === 1){
            return <TabsBar iconColour="#56849E" backgroundColour="#56849E" />;
        } else if(screen === 2) {
            return <TabsBar iconColour="#84BF68" backgroundColour="#84BF68" />;
        }
    } ;

    const submitForm = (() => {
        addDoc(checkInCollection, {
            createdAt: Timestamp.now(),
            FeelingAboutSchool: formData.feelingAboutSchool,
            FeelingAboutHome: formData.feelingAboutHome,
            FeelingToday: formData.feelingToday,
            helpYouFeelBetter: formData.helpYouFeelBetterComments
        });
    });

    return (
        <View style={styles.formContainer}>
            <View>{screenDisplay()}</View>
            <View style={styles.buttonGroup}>
                {screen < 3 && <Pressable style={styles.formButton} disabled={screen === 0} onPress={() => { setScreen((currentScreen) => currentScreen -1)}}><Text style={styles.buttonText}>Back</Text></Pressable>}
                
                {screen < 3 ?
                    <Pressable style={styles.formButton} disabled={screen === 3} onPress={() => {setScreen((currentScreen) => currentScreen + 1)}}><Text style={styles.buttonText}>Next</Text></Pressable>
                    : <Pressable onPress={submitForm} style={styles.submitButton}><Text style={styles.submitButtonText}>Save check-in</Text></Pressable>
                }
                </View>
            <View>{tabsBar()}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    formButton: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: "#333",
        marginHorizontal: 10,
        width: 110,
        height: 60,
        textAlign: "center",
        borderRadius: 8

    },
    buttonGroup: {
        flexDirection: "row",
        marginVertical: 16,
        width:"auto"
    },
    formContainer: {
        alignContent: "center",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    buttonText: {
        color: "#f4f4f4",
        fontSize: 24
    },
    submitButton: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: "#EFC287",
        marginHorizontal: 10,
        height: 60,
        width: "70%",
        textAlign: "center",
        borderRadius: 8
    },
    formContainer: {
        width: "100%"
    }
});

export default Form
