import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import MyChildAndMePage from './MyChildAndMePage';
import CopingStrategiesPage from './CopingStrategiesPage';
//import { NavigationContainer } from '@react-navigation/native';

const CopingStrategies = () => {
    return (
        <Tab.Navigator initialRouteName="Coping Strategies">
          <Tab.Screen name="My Child And Me" component={MyChildAndMePage} />
          <Tab.Screen name="Coping Strategies" component={CopingStrategiesPage} />
        </Tab.Navigator>
    )
}

export default CopingStrategies
