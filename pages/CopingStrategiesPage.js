import React, {useState} from 'react'
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native'
import EmotionsAndYourBody from './EmotionsAndYourBody'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts, Neucha_400Regular } from '@expo-google-fonts/Neucha';
import HomeButton from '../components/HomeButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

const CopingStrategiesPage = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        Neucha_400Regular,
      });
    
    const [modalVisible, setModalVisible] = useState(false);
    if(!fontsLoaded){ 
        return null;
    }
    return (
        <View style={styles.mainContent}>
             
            <View style={styles.header}><Text style={styles.headerText}>Coping Strategies</Text></View>
            <View>
            <Pressable onPress={() => setModalVisible(true)} >
                <View style={styles.contentWrapper}>
                <View style={styles.contentCard}>
                    <FontAwesome name="child" size={40} color="#FCFCFC" />
                    <Text style={styles.contentCardTitle}>Emotions and your body</Text>
                    <Text style={styles.contentCardMiniText}>Recommended age: 5 - 11 years</Text>
                    </View>
                </View>
            </Pressable>
            <Modal animationType="slide" 
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
                <EmotionsAndYourBody style={styles.modal}/>
                <Pressable style={styles.button}
                    onPress={() => setModalVisible(!modalVisible)}><MaterialCommunityIcons name="close-octagon" size={50} color="#D8888B" />
                    </Pressable>
            </Modal>
            </View>
            <View style={styles.buttonGroup}>

            <Pressable onPress={() => navigation.goBack()}><Ionicons name="chevron-back-circle" size={50} color="#D8888B" /></Pressable>
            <Pressable onPress={() => navigation.navigate('My Child And Me Page')}><HomeButton /></Pressable>
            </View>
         

        </View>
    )
}

const styles = StyleSheet.create({

    mainContent: {
        alignItems: "center", 
        alignContent: "center",
        flex:1,
        justifyContent:"space-between"
       },

       buttonGroup: {
           width: "50%",
           flexDirection: "row",
           justifyContent: "space-between",
           alignContent: "flex-start",
       },
    contentWrapper: {
        justifyContent: "center",
        alignItems: "center"
    },
header: {
    backgroundColor: "#D8888B",
    padding: 4,
    textAlign: "center",
    width: "100%"
},
button: {
    alignSelf:"center"
},
headerText: {
    color: "#FCFCFC",
    fontSize: 24,
    fontFamily: "Neucha_400Regular"


},
contentCard: {
    backgroundColor: "#D8888B",
    width: "90%",
    margin: 8, 
    borderRadius: 8,
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 8,
        textAlign: "center"
    },
contentCardTitle: {
    color: "#FCFCFC",
    fontSize: 26
},
contentCardMiniText: {
    color: "#FCFCFC",
    fontSize: 18,
    fontFamily: "Neucha_400Regular"

}
});
export default CopingStrategiesPage
