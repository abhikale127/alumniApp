import React from 'react'
import { View, Text, Image, TouchableOpacity, Button, Pressable } from 'react-native'
import { USERS } from '../../Data/Users'

const FRIENDS = [
    {
        profile_img:"https://img.freepik.com/free-icon/user_318-372646.jpg?size=338&ext=jpg&ga=GA1.2.1808174785.1665687235&semt=ais",
        username:"Faysal Ahmed",
        time:"1year ago"
    },
    {
        profile_img:"https://img.freepik.com/free-icon/nurse_318-201545.jpg?size=338&ext=jpg&ga=GA1.2.1808174785.1665687235&semt=ais",
        username:"Hasib Rahman",
        time:"1week ago"
    },
    {
        profile_img:"https://img.freepik.com/free-icon/man_318-233556.jpg?size=338&ext=jpg&ga=GA1.2.1808174785.1665687235&semt=ais",
        username:"Ayondrila Maria",
        time:"1day ago"
    },
    {
        profile_img:"https://img.freepik.com/free-icon/man_318-860806.jpg?size=338&ext=jpg&ga=GA1.1.1808174785.1665687235&semt=ais",
        username:"Fatima Hussain",
        time:"2 weeks ago"
    },
    {
        profile_img:"https://img.freepik.com/free-icon/man_318-157508.jpg?size=338&ext=jpg&ga=GA1.2.1808174785.1665687235&semt=ais",
        username:"Tanmi Akand",
        time:"2hr ago"
    },
    {
        profile_img:"https://img.freepik.com/free-icon/user_318-195114.jpg?size=338&ext=jpg&ga=GA1.2.1808174785.1665687235&semt=ais",
        username:"Hasib Rahman",
        time:"1week ago"
    },
    {
        profile_img:"https://img.freepik.com/free-icon/girl_318-205922.jpg?size=338&ext=jpg&ga=GA1.2.1808174785.1665687235&semt=ais",
        username:"Tamanna Bhatia",
        time:"4 weeks ago",
    },
]


const Friends = () => {
    return (
        <View>
            <View style={{
                justifyContent:"space-between",
                flexDirection:"row",
                paddingRight:20,
                paddingTop:5
            }}>
            <Text style={{
                paddingLeft:20,
                fontSize:20,
                fontWeight:"900"
            }}>Friends</Text>
            <TouchableOpacity>
            <Text style={{
                color:"blue"
            }}>
                See All
            </Text>
            </TouchableOpacity>
            </View>
            {FRIENDS.map((friend,index) =>(
                  <View style={{
                      flexDirection:"row",
                      alignItems:"center",
                  }}>
                     {/* Left */}
                     <View style={{
                         paddingVertical:5,
                         paddingLeft:10
                     }}>
                         <Image source={{uri: friend.profile_img}} 
                         style={{
                             width:70,
                             height:70,
                            
                         }}
                         />
                     </View>
                     {/* Right */}
                     <View style={{
                         flexDirection:"column",
                         flex:1
                     }}>
                         <View style={{
                             flexDirection:"row",
                             justifyContent:"space-between",
                             alignItems:"center",
                             flex:1,
                             paddingHorizontal:10
                         }}>
                             <View>
                                 <Text>{friend.username}</Text>
                                </View>
                                <View>
                                <Text>{friend.time}</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{
                                    flexDirection:"row",
                                    paddingLeft:10
                                }}>
                                    <View>
                               <Pressable titleSize={15}>
                                   <Text style={{
                                       backgroundColor:`#9400d3`,
                                       paddingHorizontal:20,
                                       paddingVertical:8,
                                       color:"#fff",
                                       borderRadius:8,
                                       fontSize:15
                                   }}>Connect</Text>
                               </Pressable>
                                </View>
                                <View style={{marginLeft:20}}>
                                <Pressable titleSize={15}>
                                   <Text style={{
                                       backgroundColor:"#D8DADF",
                                       paddingHorizontal:20,
                                       paddingVertical:8,
                                       color:"#000",
                                       borderRadius:8,
                                       fontSize:15
                                   }}>Reject</Text>
                               </Pressable>
                                </View>
                                </View>
                             </View>
                         </View>
                    </View>
            ))}
        </View>
    )
}

export default Friends
