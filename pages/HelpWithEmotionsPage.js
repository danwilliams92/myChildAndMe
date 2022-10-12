import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import ContentCard from '../components/ContentCard';

const HelpWithEmotionsPage = ({navigation}) => {
    return (
        <View>
<View style={styles.topHeader}>
        <Text style={styles.topHeaderText}>My Child and Me</Text>
      </View>
      <View style={styles.mainContainer}>
        <Pressable onPress={() => navigation.navigate('Naming Your Feelings')}><ContentCard IconName="leaf" IconColor="green" CardTitle="Naming Your Feelings" CardNavigationLink="NamingYourFeelingsPage" /></Pressable>
        <Pressable onPress={() => navigation.navigate('Coping Strategies')}><ContentCard IconName="book" IconColor="blue" CardTitle="Coping Strategies" CardNavigationLink="EmotionsDiaryPage"  /></Pressable>
      </View>        </View>
    )
}

const styles = StyleSheet.create({
    topHeader: {
      textAlign: "center",
      backgroundColor: "#E7DCB6"
    },
    topHeaderText: {
      color: "#ffffff",
      paddingVertical: 6,
      fontSize: 26
    },
    mainContainer: {
      alignItems: "center",
      alignContent: "center",
      justifyContent:"space-evenly"
    }
  });
  
export default HelpWithEmotionsPage
