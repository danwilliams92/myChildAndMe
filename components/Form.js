import React, {useState} from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import FeelingAboutHome from './FeelingAboutHome';
import FeelingAboutSchool from './FeelingAboutSchool';
import FeelingToday from './FeelingToday';
import HelpYouFeelBetter from './HelpYouFeelBetter';
import { collection, addDoc, Timestamp } from '@firebase/firestore';
import {db} from '../firebase';
//import TabsBar from './TabsBar';
import { useFonts, Neucha_400Regular } from '@expo-google-fonts/Neucha';

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
    const [screen, setScreen] = useState(0);

    const SubmittedButton = () => { return (<Pressable style={styles.submittedButton}><Text style={styles.buttonText}>Check-in saved!</Text></Pressable>)};
    const FinalScreenButtons = () => {
        return (
    <View style={styles.buttonGroupFinal}>
                <Pressable onPress={submitForm} style={styles.formButtonScreenFour}><Text style={styles.buttonText}>Save check-in</Text></Pressable>                                                          
        <Pressable style={styles.formButtonScreenFour} onPress={() => { setScreen((currentScreen) => currentScreen -1)}}><Text style={styles.buttonText}>Back</Text></Pressable>
    </View>)}
    ;

    const displaybuttons = (screenNumber) => {
    
        if (screenNumber == 0){
            return(
                <View style={styles.buttonGroup}>
                <Pressable style={styles.formButtonScreenOne} onPress={() => {setScreen((currentScreen) => currentScreen + 1)}}><Text style={styles.buttonText}>Next</Text></Pressable>
                </View>
            )
        } else if (screenNumber == 1){
            return (
                <View style={styles.buttonGroup}>
                                    <Pressable style={styles.formButtonScreenTwo} onPress={() => { setScreen((currentScreen) => currentScreen -1)}}><Text style={styles.buttonText}>Back</Text></Pressable>
                <Pressable style={styles.formButtonScreenTwo} onPress={() => {setScreen((currentScreen) => currentScreen + 1)}}><Text style={styles.buttonText}>Next</Text></Pressable>
                </View>
            )
        } else if (screenNumber == 2) {
            return (
                <View style={styles.buttonGroup}>
                                    <Pressable style={styles.formButtonScreenThree} onPress={() => { setScreen((currentScreen) => currentScreen -1)}}><Text style={styles.buttonText}>Back</Text></Pressable>

                <Pressable style={styles.formButtonScreenThree} onPress={() => {setScreen((currentScreen) => currentScreen + 1)}}><Text style={styles.buttonText}>Next</Text></Pressable>
                </View>
            )
        } else if (screenNumber == 3) {
            return isFormSubmitted ? <SubmittedButton /> : <FinalScreenButtons />
            }
        
    }

    const submitForm = () => {
        addDoc(checkInCollection, {
            createdAt: Timestamp.now(),
            FeelingAboutSchool: formData.feelingAboutSchool,
            FeelingAboutHome: formData.feelingAboutHome,
            FeelingToday: formData.feelingToday,
            helpYouFeelBetter: formData.helpYouFeelBetterComments
        });
        setFormSubmit(true);
    };

    let [fontsLoaded] = useFonts({
        Neucha_400Regular,
      });
      if(!fontsLoaded){ 
          return null;
      }

    return (
        <View style={styles.formContainer}>
            <View>{screenDisplay()}</View>
            <View>
               {displaybuttons(screen)}
                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    formButton: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginHorizontal: 10,
        width: 110,
        height: 60,
        textAlign: "center",
        borderRadius: 8,
        alignItems: "center",
        alignContent:"center"

    },
    formButtonScreenOne : {
        backgroundColor: "#EFC287",
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginHorizontal: 10,
        width: 110,
        height: 60,
        textAlign: "center",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center",
        alignContent:"center"
    },
    formButtonScreenTwo: {
        backgroundColor: "#56849E",
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginHorizontal: 10,
        width: 110,
        height: 60,
        textAlign: "center",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center",
        alignContent:"center"
    },
    formButtonScreenThree : {
        backgroundColor: "#84BF68",
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginHorizontal: 10,
        width: 110,
        height: 60,
        textAlign: "center",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center",
        alignContent:"center"
    },
    formButtonScreenFour: {
        backgroundColor: "#EFC287",
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginVertical: 12,
        width: 180,
        height: 60,
        textAlign: "center",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center",
        alignContent:"center"

    },
    submittedButton: {
        backgroundColor: "#EFC287",
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginVertical: 12,
        width: "100%",
        height: 80,
        textAlign: "center",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center",
        alignSelf:"center"
    },
    buttonGroup: {
        flexDirection: "row",
        marginVertical: 16    },
    formContainer: {
        alignContent: "center",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    buttonGroupFinal: {
        flexDirection: "column",
    
    },
    buttonText: {
        color: "#f4f4f4",
        fontSize: 28,
        fontFamily: "Neucha_400Regular"

    },
    formContainer: {
        marginTop: 75,
        width: "100%",
        flex:1,
        alignItems: "center",
    justifyContent: "space-evenly",
alignContent: "center"    }
});

export default Form
