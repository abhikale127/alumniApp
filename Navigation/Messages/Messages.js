import React from 'react'
import { View, Text, Image } from 'react-native'
import { USERS } from '../../Data/Users'

const Messages = () => {
    return (
        <View>
           <Text style={{fontSize:20,fontWeight:"900",paddingLeft:10,paddingVertical:10,borderBottomColor:"#D8DADF",borderBottomWidth:1}}>Messages</Text>

           {USERS.map((message,index) =>(
               <View style={{
                   flexDirection:"row",
                   paddingTop:20
               }}
               key={index}
               >
               <Image source={{uri: message.profile_img}} style={{width:35,height:35,borderRadius:50,}} />
               <View style={{
                   flexDirection:"column",
                   position:"relative",
               }}>
               <Text style={{fontWeight:"900",fontSize:17}}>{"   "}{message.name}</Text>
               <Text style=
               {{
                   color:"#fff", 
                   position:"absolute",
                   bottom:3,
                   left:5,
                   height:15,
                   width:15,
                   alignItems:"center",
                   justifyContent:"center",
                   backgroundColor:"red",
                   borderRadius:50,
                   fontSize:11,
                   fontWeight:"900",
                   paddingLeft:3
                   }}>{message.unread}</Text>
               <Text style={{fontWeight:"900",fontSize:17,color:"black"}}>{"      "}{message.messages}</Text>
               </View>
               </View>
           ))}
        </View>
    )
}

export default Messages
