import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts, Neucha_400Regular } from '@expo-google-fonts/Neucha';

const EmotionsAndYourBody = () => {
    let [fontsLoaded] = useFonts({
        Neucha_400Regular,
      });
      if(!fontsLoaded){ 
          return null;
      }
    return (
        <ScrollView contentContainerStyle={styles.modalContainer}>

        <View style={styles.modalBody}><Text style={[styles.modalQuestion, styles.modalHeader]}>Emotions And Your Body</Text><Text style={styles.modalText}>When you notice a change in your feelings, it’s normal for changes to happen in your body, too.</Text>
        <Text style={styles.modalText}>For example, when you feel angry or frustrated, you might feel like you’re getting hotter and your body feels tense.</Text>
       <Text style={styles.modalText}>When you’re nervous, you might breathe faster, your hands get sweaty and your heart beats faster and harder.
        </Text>
        <View style={styles.offColourSection}>
            <MaterialCommunityIcons name="message-question-outline" color="#EFEFEF" size={70} />
            <Text style={styles.modalQuestion}>Question for you and your parent/carer</Text><Text style={styles.modalText}>Can you think of some ways that your body changes when you’re feeling different emotions?</Text><Text style={styles.modalText}>Part of taking control of unwanted feelings is being able to notice these changes in your body, and the better you can do this, the quicker you can control your feelings.</Text>
        </View>
        <MaterialCommunityIcons name="balloon" color="#EFEFEF" size={70} />
        <Text style={styles.modalQuestion}>Exercise:</Text>
        <Text style={styles.modalText}>Imagine you’re feeling very nervous, and you notice this because you’re hands are sweaty, your heart is beating faster and you feel like there are butterflies in your stomach.</Text>
        <Text style={styles.modalText}>Pretend you’re holding an empty balloon. Take a big breath of air to the count of 3, and blow into the balloon for another count of 3. Do this 3 or 4 times until you think the balloon is very full.</Text>
        <Text style={styles.modalText}>Hopefully you’re now feeling a little more relaxed.</Text>
        <Text style={styles.modalText}>The next time you feel nervous, try blowing the pretend balloon with deep breaths and see if it helps you.</Text>
        </View>
    </ScrollView>
        )
}

const styles = StyleSheet.create({
modalBody: {
    backgroundColor: "#D8888B",
    marginVertical: 8,
    padding: 8,
    borderRadius:8,
    width: "95%"
},
offColourSection: {
    backgroundColor: "#ffafb2",
    marginVertical: 10,
    paddingVertical: 8,
    borderRadius: 8,
    width: "90%",
    margin:"auto",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
},
modalText: {
    color: "#FCFCFC",
    marginVertical: 4,
    fontsize: 30,
    padding: 4,
    fontFamily: "Neucha_400Regular"

},
modalQuestion:{
    color: "#FFFFFF",
    marginVertical: 4,
    fontSize: 31,
    padding: 4,
    fontFamily: "Neucha_400Regular"

},
modalHeader: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    fontFamily: "Neucha_400Regular"

},
modalContainer: {
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    height: 250,
padding: 8}
});
export default EmotionsAndYourBody