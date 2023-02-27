import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { USERS } from '../../Data/Users'

const Stories = () => {
    return (
        <View style={{
            flexDirection:"row"
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View>
                    <Image source={require("../../assets/story.png")}
                    style={{
                        width:100,
                        height:150,
                        resizeMode:"contain"
                    }}
                    />
                </View>
                {USERS.map((story,index) => (
                    <View key={index}
                    style={{
                        position:"relative"
                    }}
                    >
                    <Image source={{ uri: story.upload_img }}
                     style={{
                         width:100,
                         height:170,
                         marginHorizontal:5,
                         borderRadius:10
                     }}
                    />
                    <Image source={{ uri: story.profile_img }} 
                     style={{
                         width:30,
                         height:30,
                         borderRadius:50,
                         borderColor:"#0000FF",
                         borderWidth:2,
                         position:'absolute',
                         top:5,
                         left:10
                     }}
                    />
                    <Text
                    style={{
                        position:"absolute",
                        left:10,
                        bottom:5,
                        color:"#fff"
                    }}
                    >{story.name.length > 10 ? story.name.slice(0,10) + "..." : story.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Stories
