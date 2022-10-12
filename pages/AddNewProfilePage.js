import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, TextInput, Button, ActivityIndicator, Pressable } from 'react-native'
import {db} from '../firebase';
import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc } from '@firebase/firestore';

const AddNewProfilePage = () => {
const [users, setUsers] = useState([]);
const [newName, setNewName] = useState("");
const [newAge, setNewAge] = useState(0);
const [loading, setLoading] = useState(true);



const usersCollection = collection(db, "users");

const createUser = async () => {
  
    await addDoc(usersCollection, {name: newName, age: Number(newAge)});
    getUsers();    
};

const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = {age: age + 1};
    await updateDoc(userDoc, newFields);
}







    
return (
        <View style={styles.mainContainer}>
           
            <Text style={styles.mainHeader}>Add new profile</Text>
            <View style={styles.profileInputWrapper}>
                <View style={styles.textInputPair}>
                <TextInput style={styles.textInput}
                    placeholder="Child's name"
                    onChangeText={(name) => { setNewName(name)}}
                    />

                <TextInput style={styles.textInput}
                    placeholder="Child's age"
                    onChangeText={(age) => {setNewAge(age)}}
                />
                </View>
                <Pressable style={styles.button} onPress={createUser}><Text style={styles.buttonText}>Add Child</Text></Pressable>
            </View>
        
        </View>
        
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: "#DED565",
        alignContent: "center",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    mainHeader: {
        color:"#FCFCFC",
        textAlign: "center",
        fontSize: 26
    },
    textInput: {
        backgroundColor: "#fcfcfc",
        padding: 10,
        marginVertical: 20,
        width: 300,
        height: 45,
        borderRadius: 5,
        color: "#888888"
    },
    profileInputWrapper: {
        justifyContent: 'space-evenly',
        alignItems: "center",
        width: "80%",
        height: "60%"
    },
    button: {
        backgroundColor: "#efefef",
        height: 75,
        width: 300,
        textAlign: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        justifyContent: "center"

    },
    buttonText: {
        "color": "#CCC461",
        fontSize: 28
    }
})

export default AddNewProfilePage
