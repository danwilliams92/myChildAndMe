import React, {useState} from 'react'
import { View, Text, Pressable, FlatList, ScrollView, StyleSheet } from 'react-native'
import HomeButton from '../components/HomeButton'
import { useFonts, Neucha_400Regular } from '@expo-google-fonts/Neucha';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const NamingYourFeelingsPage = ({navigation}) => {
  const [screen, setScreen] = useState(0);

  const displayScreens = () => {
    if(screen == 0){
      return <FirstScreen />
    } else if (screen == 1){
      return <SecondScreen />
    }
  }
  const FirstScreen = () => (
    <View style={styles.contentCard}><Text style={styles.contentCardText}>Naming our feelings is very important. For children, the larger their vocabulary is when communicating about emotions, 
    the more accurately they can explain their challenges with their carers and loved ones.</Text><Text style={styles.contentCardText}> This helps to reduce any misunderstandings about what the child is experiencing, 
    and may potentially avoid conflicts between the child and others.</Text>
    <Text style={styles.contentCardText}>As parents or carers, we can help our children's emotional development by teaching them a wider vocabulary related to emotions, and if we notice they are in distress, do our best to empathise and talk with the child about what they might be feeling.</Text>
    <Pressable style={styles.button} onPress={() => { setScreen((currentScreen) => currentScreen +1 )}}><Text style={[styles.contentCardText, styles.buttonText]}>Next</Text></Pressable>

    </View>

  );

    const SecondScreen = () => {
      const emotionsList = ['Happy', 'Afraid', 'Sad', 'Frustrated', 'Angry', 'Jealous', 'Embarrassed', 'Disgusted', 'Ashamed', 'Depressed', 'Distracted', 'Shy', 'Anxious', 'Surprised', 'Guilty', 'Lonely', 'Confident', 'Proud', 'Nervous'];


      return(
        <View style={styles.contentCard}>
      <View>
        <Text style={[styles.contentCardText, styles.contentCardHeader]}>Emotions List</Text>
       
        </View>
        <ScrollView contentContainerStyle={styles.scrollCard}>
          {emotionsList.map((emotion, index) => {
              return <Text key={index} style={[styles.contentCardText, styles.scrollText]}>- {emotion}</Text>;
            })}
        </ScrollView>
        <View style={styles.exercise}>
          <MaterialCommunityIcons name="comment-question-outline" size={70} color="#FCFCFC" />
        <Text style={[styles.contentCardHeader, styles.contentCardText]}>Exercise</Text>
        <Text style={styles.contentCardText}>After reading the above list, choose a word, and discuss the word with your child.</Text>
        <Text style={styles.contentCardText}>Talk about the meaning of the word if they are unfamiliar, whether that emotion makes their body feel a certain way, and try to think of examples where both of you might feel this emotion.</Text>
      </View>
      <Pressable style={styles.button} onPress={() => { setScreen((currentScreen) => currentScreen -1 )}}><Text style={[styles.contentCardText, styles.buttonText]}>Back</Text></Pressable>
      </View>
    );
    }
    let [fontsLoaded] = useFonts({
        Neucha_400Regular,
      });
      if(!fontsLoaded){ 
          return null;
      }

    return (
        <View style={styles.mainContainer}>
 <View style={styles.topHeader}>

<Text style={styles.topHeaderText}>Naming Your Feelings</Text></View>

      {displayScreens()}
  <View style={styles.buttonGroup}>
        <Pressable onPress={() => navigation.navigate('My Child And Me', {screen: 'Help With Emotions'})}><Ionicons name="chevron-back-circle" size={50} color="#E7DCB6" /></Pressable>
            <Pressable onPress={() => navigation.navigate('My Child And Me Page')}><HomeButton /></Pressable>
</View>
        </View>
    )
}

const styles = StyleSheet.create({
  buttonGroup: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "flex-start",
},
    topHeader: {
        textAlign: "center",
        backgroundColor: "#E7DCB6",
        width: "100%"
      },
      topHeaderText: {
        color: "#FFFFFF",
        paddingVertical: 6,
        fontSize: 26,
        fontFamily: "Neucha_400Regular"
    
      },
      mainContainer: {
        alignItems: "center",
        alignContent: "center",
        flex:1,
        justifyContent:"space-between",
        backgroundColor: "#FFFFFF"
      },
      contentCard: {
        marginVertical:10,
        width: "100%",
        borderRadius: 8,
        backgroundColor: "#E7DCB6",
        padding: 6,
        textAlign: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems:"center"
      },
      exercise: {
        marginVertical:10,
        width: "100%",
        borderRadius: 8,
        backgroundColor: "#cec5a3",
        padding: 6,
        textAlign: "center",
        alignItems:"center"
      },
      contentCardText: {
        fontFamily: "Neucha_400Regular",
        color: "#FFFFFF",
        fontSize: 24,
        marginVertical: 6,
        lineHeight: 26

      },
      contentCardHeader: {
        marginVertical: 4,
        textDecorationStyle: "solid",
        textDecorationLine: "underline",
        textDecorationColor: "#FFFFFF",
        fontSize: 28
      },
      scrollCard: {
        height: 300
      },
      scrollText:{
        width: "100%"
      },
      button: {
        width: "50%",
        backgroundColor: "#EFEFEF",
        borderRadius: 8,
        alignContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingVertical: 6,
        marginVertical: 8
      },
      buttonText: {
        fontSize: 28,
        color: "#E7DCB6"
      }
})



export default NamingYourFeelingsPage
