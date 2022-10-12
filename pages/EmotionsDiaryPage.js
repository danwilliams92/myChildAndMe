import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
//import TabsBar from '../components/TabsBar'
import { Doughnut } from 'react-chartjs-2';
import {db} from '../firebase';
import { collection, getDocs, doc } from '@firebase/firestore';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const EmotionsDiaryPage = () => {
const [checkInsList, setCheckIns] = useState([]);
    const checkInCollection = collection(db, "checkInEntry");
    const getCheckInData = async () => {
          const data = await getDocs(checkInCollection);
          data.docs.forEach(checkIn => setCheckIns([...checkInsList, checkIn.data()]));
        };

        useEffect(() => {
          getCheckInData();
        },[]);

        const chartDataToday = {
          labels: ['Okay', 'Safe', 'Happy', 'Sad', 'Angry/Frustrated', 'Anxious', 'Afraid', 'Tired'],
          datasets: [{
            label: '# of emotions experienced',
            data: [1,3,2,1,1,2,1,2],
            backgroundColor: ['rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'],
            borderWidth: 2
          }]
        }
    return (
        <View style={styles.mainContainer}>
                  <View style={styles.topHeader}>

        <Text style={styles.topHeaderText}>Emotions Diary</Text>
        </View>
       
        <Doughnut data={chartDataToday} />
        <Text>General daily emotions</Text>

        <Doughnut data={chartDataToday} />
        <Text>Emotions at home</Text>

        <Doughnut data={chartDataToday} />
        <Text>Emotions at school</Text>
        <Text style={styles.feelBetterHeading}>What can I do to help you feel better?</Text>

        <View style={styles.diarySectionContainer}>
 {checkInsList && checkInsList.map((checkIn) => {
          return(<View key={checkIn.createdAt}><Text style={styles.feelBetterText}>"{checkIn.helpYouFeelBetter}"</Text><Text style={styles.feelBetterTextDate}>Written: {String(checkIn.createdAt.toDate())}</Text></View>);
        })}

        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topHeader: {
        textAlign: "center",
        backgroundColor: "#56849E",
        width: "100%"
      },
      topHeaderText: {
        color: "#ffffff",
        paddingVertical: 6,
        fontSize: 26,
      },
      mainContainer: {
        alignItems: "center",
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
        marginVertical: 10,
        color: "#57849E",
        fontSize: 20,
        textDecorationLine: 'underline',
        textDecorationColor: "57849E"
      },
      feelBetterTextDate: {
        marginTop: 4,
        color: "#FCFCFC",
        fontSize: 14
      }
});

export default EmotionsDiaryPage
