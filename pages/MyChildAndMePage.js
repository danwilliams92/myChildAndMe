import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import TabsBar from '../components/TabsBar';
import ContentCard from '../components/ContentCard';

const MyChildAndMePage = ({navigation}) => {
    return(
    <View>
      <View style={styles.topHeader}>
        <Text style={styles.topHeaderText}>My Child and Me</Text>
      </View>
      <View style={styles.mainContainer} >
        <Pressable onPress={() => navigation.navigate('Emotions Check In')}><ContentCard IconName="leaf" IconColor="green" CardTitle="Emotions Check in"  style={styles.ContentCard} /></Pressable>
        <Pressable onPress={() => navigation.navigate('Emotions Diary')}><ContentCard IconName="book" IconColor="blue" CardTitle="Emotions Diary" CardNavigationLink="EmotionsDiaryPage" style={styles.contentCard}/></Pressable>
        <Pressable onPress={() => navigation.navigate('Help With Emotions')}><ContentCard IconName="heart-o" IconColor="red" CardTitle="Help With Emotions" CardNavigationLink="HelpWithEmotionsPage" style={styles.contentCard} /></Pressable>
      </View>
      <TabsBar />
    </View>
    );
}

const styles = StyleSheet.create({
  topHeader: {
    textAlign: "center",
    backgroundColor: "#FFCB9E"
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
  },
  contentCard: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",        
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    height: 160,
    width: 320,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
});

export default MyChildAndMePage
//      <TabsBar backgroundColour="red" />
