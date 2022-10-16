import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
//import TabsBar from '../components/TabsBar';
import ContentCard from '../components/ContentCard';
import { useFonts, Neucha_400Regular } from '@expo-google-fonts/Neucha';
import Ionicons from 'react-native-vector-icons/Ionicons';

const cardStyle = {flexDirection: "row", justifyContent: "space-evenly", height: 200, backgroundColor: "#FFCB9E", padding: 6, width: 320, marginVertical: 8, borderRadius: 8, alignItems: "center", shadowColor: "#000",
shadowOffset: {
    width: 0,
    height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
};

const MyChildAndMePage = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    Neucha_400Regular,
  });
  if(!fontsLoaded){ 
      return null;
  }
    return(
    <View style={styles.mainContainer}>
      <View style={styles.topHeader}>
        <Text style={styles.topHeaderText}>My Child and Me</Text>
      </View>
      <View >
        <Pressable onPress={() => navigation.navigate('Emotions Check In')}><ContentCard IconName="human-male-female-child" IconColor="#84BF68" CardTitle="Emotions Check in"  cardStyle={cardStyle} /></Pressable>
        <Pressable onPress={() => navigation.navigate('Emotions Diary')}><ContentCard IconName="book-open-variant" IconColor="#d5a867" CardTitle="Emotions Diary" style={styles.contentCard} cardStyle={cardStyle} /></Pressable>
        <Pressable onPress={() => navigation.navigate('Help With Emotions')}><ContentCard IconName="mother-heart" IconColor="red" CardTitle="Help With Emotions"  style={styles.contentCard} cardStyle={cardStyle} /></Pressable>
      </View>
      <Ionicons name="home" size={50} />
    </View>
    );
}

const styles = StyleSheet.create({
  topHeader: {
    textAlign: "center",
    backgroundColor: "#FFCB9E",    
    width: "100%"

  },
  topHeaderText: {
    color: "#ffffff",
    paddingVertical: 6,
    fontSize: 26,
    fontFamily: "Neucha_400Regular"

  },
  mainContainer: {
    alignItems: "center",
    alignContent: "center",
    justifyContent:"space-between",
    flex:1
  },
  
});

export default MyChildAndMePage
//      <TabsBar backgroundColour="red" />
