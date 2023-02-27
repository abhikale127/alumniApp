import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'


const NavbarTab = ({navigation}) => {
    return (
        <View>
            <View style={{
                flexDirection:"row",
                justifyContent:"space-around",
                borderBottomColor:"#05050538",
                borderBottomWidth:1
            }}>    
               {/* Home */}
                   <TouchableOpacity onPress={() => navigation.push("HomeScreen")}>
                         <Image source={{uri: "https://img.icons8.com/nolan/1x/home-page.png"}} 
                         style={{
                             width:50,
                             height:50,
                             resizeMode:"contain"
                         }}
                         />
                    </TouchableOpacity>
                    {/* Friends */}
                    <TouchableOpacity onPress={() => navigation.push("FriendScreen")}>
                         <Image source={{uri: "https://img.icons8.com/nolan/256/contact-card.png"}} 
                         style={{
                             width:50,
                             height:50,
                             resizeMode:"contain"
                         }}
                         />
                    </TouchableOpacity>
                    {/* Messages */}
                    <TouchableOpacity onPress={() => navigation.push("MessagesScreen")}>
                         <Image source={{uri: "https://img.icons8.com/nolan/256/1A6DFF/C822FF/speech-bubble-with-dots.png"}} 
                         style={{
                             width:50,
                             height:50,
                             resizeMode:"contain"
                         }}
                         />
                    </TouchableOpacity>
                    {/* Notifications */}
                    <TouchableOpacity onPress={() => navigation.push("NotificationsScreen")}>
                         <Image source={{uri: "https://img.icons8.com/nolan/256/1A6DFF/C822FF/google-alerts.png"}} 
                         style={{
                             width:50,
                             height:50,
                             resizeMode:"contain"
                         }}
                         />
                         {/* Videos */}
                    </TouchableOpacity>
                    
                    
            </View>
        </View>
    )
}

export default NavbarTab
