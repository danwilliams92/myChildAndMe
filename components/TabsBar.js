import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyChildAndMePage from '../pages/MyChildAndMePage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileSelectPage from '../pages/ProfileSelectPage';
//import NamingYourFeelingsPage from './NamingYourFeelingsPage';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const TabsBar = () => {
    return (
      <>
        <Tab.Navigator screenOptions={{header: () => null}}>
          <Tab.Screen name="My Child And Me" component={MyChildAndMePage} options={{tabBarLabel: '', tabBarIcon: () => <MaterialCommunityIcons name="home" size={38} color="#FFFFFF" /> }}/>
        </Tab.Navigator>
      </>
    );
}


export default TabsBar

//          <Tab.Screen name="Profile Select" component={ProfileSelectPage} />
