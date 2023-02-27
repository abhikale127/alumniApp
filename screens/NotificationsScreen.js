import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Notification from '../Navigation/Notifications/Notification'

const NotificationsScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:"#fff"}}>
            <Notification />
        </SafeAreaView>
    )
}

export default NotificationsScreen
