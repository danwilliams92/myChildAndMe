import React, {useState, useEffect} from 'react'
import { View, Text, Pressable, StyleSheet, FlatList, ScrollView } from 'react-native'
//import TabsBar from '../components/TabsBar'
import { Bar } from 'react-chartjs-2';
import {db} from '../firebase';
import { collection, getDocs, get, doc } from '@firebase/firestore';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js';
import { useFonts, Neucha_400Regular } from '@expo-google-fonts/Neucha';
import HomeButton from '../components/HomeButton';

import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title
} from 'chart.js';

ChartJS.register(CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend);

const EmotionsDiaryPage = ({navigation}) => {
  const [checkInsList, setCheckIns] = useState([]);


    const getCheckInData = async () => {
      const checkInCollection = collection(db, "checkInEntry");
    await getDocs(checkInCollection).then(response =>{
      const checkIns = response.docs.map(doc => ({
        data: doc.data()
      }));
      setCheckIns(checkIns);
    }).catch(error => console.log(error.message));
        };

        useEffect(() => {
          getCheckInData();
        },[]);

       

   const checkIns = checkInsList.map(checkIn => {
    return checkIn.data;
   });

   

const emotionsCounter = (arr) => {
  const count = {};

  for (const element of arr) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
  return count;
};



const emotionsReported = (categoryLabel, arr) => { 
  checkIns.forEach((checkIn) => {
    for (const [key, value] of Object.entries(checkIn)){
      if (key == categoryLabel && value != ''){
        arr.push(value);
      }
    }
  })
}

const commentsReported = (arr) => {
  checkIns.forEach((checkIn) => {
    for (const [key, value] of Object.entries(checkIn)){
      const createdOn = checkIn.createdAt;
      if (key == "helpYouFeelBetter"){

        arr.push({comment: value ,createdOn: createdOn.toDate().toLocaleString()})
      }
    }  }
  )}


var feelingTodayArr = [];
var feelingAboutSchoolArr = [];
var feelingAboutHomeArr = [];

var feelingBetterComments = [];
commentsReported(feelingBetterComments);

emotionsReported("FeelingToday", feelingTodayArr);
emotionsReported("FeelingAboutSchool",feelingAboutSchoolArr);
emotionsReported("FeelingAboutHome", feelingAboutHomeArr);

const countedEmotionsToday = emotionsCounter(feelingTodayArr);
const countedEmotionsSchool = emotionsCounter(feelingAboutSchoolArr);
const countedEmotionsHome = emotionsCounter(feelingAboutHomeArr);

const chartOptions = {
  responsive: true
};



        const chartDataToday = {
          labels: Object.keys(countedEmotionsToday),
          datasets: [{
            label: 'Number of emotions reported',
            data: Object.values(countedEmotionsToday),
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
            
          }]
        }

        const chartDataSchool = 
        {
          labels: Object.keys(countedEmotionsSchool),
          datasets: [{
            label: 'Number of times reported',
            data: Object.values(countedEmotionsSchool),
            backgroundColor: 'rgba(62, 252, 142, 0.8)',
                    
          }]
        };

        const chartDataHome = {
          labels: Object.keys(countedEmotionsHome),
          datasets: [{
            label: 'Number of times reported',
            data: Object.values(countedEmotionsHome),
            backgroundColor: 'rgba(123, 190, 254, 0.5)'
            
          }]
        };


        let [fontsLoaded] = useFonts({
          Neucha_400Regular,
        });
        if(!fontsLoaded){ 
            return null;
        }


    return (
      <View style={styles.mainContainer}>
        <View style={styles.topHeader}>
          <Text style={styles.topHeaderText}>Emotions Diary</Text>
        </View>
        <View>
          <Text style={styles.feelBetterHeading}>General Daily Emotions</Text>
        </View>
       <Bar options={chartOptions} data={chartDataToday} />

       <View><Text style={styles.feelBetterHeading}>Emotions At School</Text></View>
       <Bar options={chartOptions} data={chartDataSchool} />

       <View><Text style={styles.feelBetterHeading}>Emotions At Home</Text></View>
       <Bar options={chartOptions} data={chartDataHome} />

      <View style={styles.feelBetterContainer}><Text style={[styles.feelBetterHeading, styles.feelBetterTitle]}>What can I do to help you feel better?</Text>
        {feelingBetterComments.map((comment, index) => {
          return(
            <View key={index}><Text style={[styles.topHeaderText, styles.italic]} key={index}>"{comment.comment}"</Text><Text style={[styles.topHeaderText, styles.topHeaderTextSmaller]}>Written on {comment.createdOn}</Text></View>
          )
        })}
      </View>
       <Pressable onPress={() => navigation.navigate('My Child And Me Page')}><HomeButton /></Pressable>

      </View>
    )
    }

const styles = StyleSheet.create({
  feelBetterContainer: {
    backgroundColor: "#56849E",
    alignItems:"center",
    textAlign:"center",
    marginTop: 10
  },
  italic: {
    fontFamily: "italic"
  },
    topHeader: {
        textAlign: "center",
        backgroundColor: "#56849E",
        width: "100%"
      },
      topHeaderText: {
        color: "#ffffff",
        paddingVertical: 6,
        fontSize: 26,
        fontFamily: "Neucha_400Regular"

      },
      topHeaderTextSmaller:{
        fontSize:14
      },
      mainContainer: {
        alignItems: "center",
        flex:1,
        justifyContent:"space-between"
      },
      diarySectionContainer: {
        backgroundColor: "#57849E",
      width: "90%",
    padding: 10,
    marginVertical: 8,
  borderRadius: 8, textAlign: "center"      },
      feelBetterText: {
        color: "#FCFCFC",
        fontSize: 18
      },
      feelBetterHeading: {
        marginVertical: 14,
        color: "#57849E",
        fontSize: 20,
        textDecorationLine: 'underline',
        textDecorationColor: "#57849E",
        fontFamily: "Neucha_400Regular"

      },
      feelBetterTitle:{
        color:"#FCFCFC",
        textDecorationColor: "#FCFCFC"
      },
      feelBetterTextDate: {
        marginTop: 4,
        color: "#FCFCFC",
        fontSize: 14,
        fontFamily: "Neucha_400Regular"

      }
});

export default EmotionsDiaryPage

/*  <View style={styles.diarySectionContainer}>
 {checkInsList && checkInsList.map((checkIn) => {
          return(<View key={checkIn.createdAt}><Text style={styles.feelBetterText}>"{checkIn.helpYouFeelBetter}"</Text><Text style={styles.feelBetterTextDate}>Written: {String(checkIn.createdAt.toDate())}</Text></View>);
        })}

        */