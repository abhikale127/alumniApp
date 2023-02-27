import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavbarTab from '../components/Home/NavbarTab'
import Pages from '../components/pages/pages'

const PagesScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:"#fff"}}>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <Pages />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PagesScreen
