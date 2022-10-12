import React from 'react'
import { View, Text, Pressable } from 'react-native'

const ProfileCard = ({item}) => {
    return (
        <View>
                <Text>Name: {item.name}</Text>
                <Text>Age: {item.age}</Text>
                <Pressable onPress={() => deleteUser(item.id)}>
                    <Text>Delete User</Text>
                </Pressable>

        </View>
    )
}

export default ProfileCard