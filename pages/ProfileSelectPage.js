import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, SectionList, Pressable, Button, StyleSheet } from 'react-native'
import {db} from '../firebase';
import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc } from '@firebase/firestore';
//import ProfileCard from '../components/ProfileCard';
import { PencilIcon, TrashIcon } from "react-native-heroicons/outline";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileSelectPage = ({navigation}) => {
    const [users, setUsers] = useState([]);

    const usersCollection = collection(db, "users");

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    };
    
    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollection);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getUsers();
      }, [users]);


    return (
        <View style={styles.mainContainer}>
            <SectionList sections={users} renderItem={({item}) => 
            <View style={styles.profileCard}>
                <Text style={styles.profileName}>
                    <Pressable onPress={() => navigation.navigate('My Child And Me')}>{item.name}</Pressable>
                </Text>
                <View style={styles.profileIconGroup} >
                <Pressable onPress={() => navigation.navigate('Update Profile')}>
                    <PencilIcon />
                </Pressable>
                <Pressable onPress={() => deleteUser(item.id)}>
                    <TrashIcon />
                </Pressable>
                </View>
            </View>} 
            />  
            <Pressable style={styles.button} onPress={() => navigation.navigate('Add New Profile')}><FontAwesome name="plus-circle" size={40} color="#FFC107" /><Text style={styles.buttonText}>Add New Profile</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#56849E",
        width: "80%",
        textAlign: "center",
        paddingHorizontal: 12,
        paddingVertical: 24,
        marginTop: 5,
        borderRadius: 8,
        height: 100,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row"


    },
    profileName: {
        color: "#D6F0FF",
        fontSize: 20
    },
    buttonText: {
        color: "#D6F0FF",
        fontSize: 20
    },
    mainContainer: {
        alignItems: "center"
    },
    profileIconGroup: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    profileCard: {
        backgroundColor: "#56849E",
        margin: 25,
        padding: 20,
        alignItems: "center",
        borderRadius: 8,
        fontSize: 20,
        color: "#D6F0FF",
        width: 50
    }
});
export default ProfileSelectPage

/*

 <FlatList data={users} renderItem={({item}) => 
            <View style={styles.profileCard}>
                <Text style={styles.profileName}>
                    <Pressable onPress={() => navigation.navigate('My Child And Me')}>{item.name}</Pressable>
                </Text>
                <View style={styles.profileIconGroup} >
                <Pressable onPress={() => navigation.navigate('Update Profile')}>
                    <PencilIcon />
                </Pressable>
                <Pressable onPress={() => deleteUser(item.id)}>
                    <TrashIcon />
                </Pressable>
                </View>
            </View>} 
            />  

            */