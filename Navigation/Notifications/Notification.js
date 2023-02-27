import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { USERS } from '../../Data/Users'

const Notification = () => {
    return (
        <View>
            <View>
            <Pressable titleSize={18}>
                <Text style={{
                    fontWeight:"900",
                    fontSize:18,
                    color:"#ff00ff",
                    height:40,
                    width:"90%",
                    backgroundColor:"#D8DADF",
                    marginHorizontal:10,
                    marginVertical:10,
                    paddingTop:7,
                    textAlign:"center"
                }}>Mark All as Read</Text>
            </Pressable>
            
                {USERS.map((post,index) =>(
                    <View key={index} style={{ 
                        borderBottomWidth:1,
                        borderBottomColor:"#D8DADF",
                        flexDirection:"row",
                        alignItems:"center"
                        }}>
                        <Image source={{uri:post.profile_img}} style={{
                            width:30,
                            height:30,
                            borderRadius:50,
                            marginVertical:10,
                        }}/>
                        <View>
                            <View style={{flexDirection:"row",alignItems:"center",paddingVertical:10}}>
                                <Text style={{fontSize:17,fontWeight:"bold"}} lineBreakMode={true}>{"  "}{post.name}</Text>
                                <Text style={{fontSize:17}}>{"  "}{post.Notification}</Text>
                                </View>
                                <Text>{" "}{post.time}</Text>
                            </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default Notification
