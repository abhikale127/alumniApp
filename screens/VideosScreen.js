import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Home/Header'
import NavbarTab from '../components/Home/NavbarTab'
import Watch from '../components/Videos/Video'
import { POSTS } from '../Data/Posts'

const VideosScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:"#fff"}}>
            <NavbarTab navigation={navigation}/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Watch />
            </ScrollView>
        </SafeAreaView>
    )
}

export default VideosScreen
