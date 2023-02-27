import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Friends from '../Navigation/Friends/Friends'


const FriendScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:"#fff"}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Friends />
            </ScrollView>
        </SafeAreaView>
    )
}

export default FriendScreen
