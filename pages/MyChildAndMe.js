import React from 'react'
import { View, Text } from 'react-native'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyChildAndMePage from './MyChildAndMePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { NavigationContainer } from '@react-navigation/native';
import EmotionsDiaryPage from './EmotionsDiaryPage';
import EmotionsCheckInPage from './EmotionsCheckInPage';
import HelpWithEmotionsPage from './HelpWithEmotionsPage'
import CopingStrategiesPage from './CopingStrategiesPage';
import NamingYourFeelingsPage from './NamingYourFeelingsPage';

//const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const MyChildAndMe = () => {
    return (
        <Stack.Navigator initialRouteName="Emotions Diary" screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="My Child And Me Page" component={MyChildAndMePage} screenOptions={{headerShown: false}} />
        <Stack.Screen name="Emotions Diary" component={EmotionsDiaryPage} screenOptions={{headerShown:false}}/>
        <Stack.Screen name="Emotions Check In" component={EmotionsCheckInPage} screenOptions={{headerShown:false}}/>
        <Stack.Screen name="Help With Emotions" component={HelpWithEmotionsPage}  screenOptions={{headerShown:false}}/>
        <Stack.Screen name="Coping Strategies" component={CopingStrategiesPage} screenOptions={{headerShown: false}} />
        <Stack.Screen name="Naming Your Feelings" component={NamingYourFeelingsPage} screenOptions={{headerShown: false}} />

    </Stack.Navigator>
    );
}

export default MyChildAndMe
