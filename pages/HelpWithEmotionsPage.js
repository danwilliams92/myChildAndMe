import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import ContentCard from '../components/ContentCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts, Neucha_400Regular } from '@expo-google-fonts/Neucha';
import HomeButton from '../components/HomeButton';

const cardStyle = {flexDirection: "row", justifyContent: "space-evenly", height: 200, backgroundColor: "#E7DCB6", padding: 6, width: 320, marginVertical: 8, borderRadius: 8, alignItems: "center", shadowColor: "#000",
shadowOffset: {
    width: 0,
    height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
};


const HelpWithEmotionsPage = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    Neucha_400Regular,
  });
  if(!fontsLoaded){ 
      return null;
  }
    return (
        <View style={styles.mainContainer}>
<View style={styles.topHeader}>
        <Text style={styles.topHeaderText}>Help With Emotions</Text>
      </View>
      <View style={styles.contentGroup}>
        
        <Pressable onPress={() => navigation.navigate('My Child And Me', {screen: 'Naming Your Feelings'})}>
          <ContentCard IconName="thought-bubble-outline" IconColor="green" CardTitle="Naming Your Feelings" cardStyle={cardStyle}/>
          </Pressable>
        <Pressable onPress={() => navigation.navigate('My Child And Me', {screen: 'Coping Strategies'})}>
          <ContentCard IconName="meditation" IconColor="#fdbc85" CardTitle="Coping Strategies" cardStyle={cardStyle}/>
          </Pressable>
      </View>       
      <Pressable onPress={() => navigation.navigate('My Child And Me Page')}><HomeButton /></Pressable>

       </View>
    )
}

const styles = StyleSheet.create({
    topHeader: {
      textAlign: "center",
      backgroundColor: "#E7DCB6",
      fontFamily: "Neucha_400Regular",
      width:"100%"

    },
    topHeaderText: {
      color: "#ffffff",
      paddingVertical: 6,
      fontSize: 26,
      fontFamily: "Neucha_400Regular"

    },
    contentGroup: {
      alignItems:"center"
    },
    mainContainer: {
      alignContent: "center",
      alignItems: "center",
      justifyContent:"space-between",
      flex:1
    }
  });
  
export default HelpWithEmotionsPage
