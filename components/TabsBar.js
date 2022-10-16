import React from 'react'
import { View, Pressable } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TabsBar = ({navigation}) => {
    return (
      <View>
        <Pressable onPress={() => navigation.navigate('My Child And Me')}> <MaterialCommunityIcons name="home" size={38} color="#FFFFFF" /></Pressable>
      </View>
    );
}


export default TabsBar