import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Messages from '../Navigation/Messages/Messages'

const MessagesScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:"#fff"}}>
            <Messages />
        </SafeAreaView>
    )
}

export default MessagesScreen
