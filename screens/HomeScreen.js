import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Navigation/Home/Header'
import Post from '../Navigation/Home/Post'
import PostOption from '../Navigation/Home/PostOption'
import { POSTS } from '../Data/Posts'

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:"#fff"}}>
            <Header />
            
             <ScrollView showsVerticalScrollIndicator={false}>
            <PostOption />
          
            {POSTS.map((post,index) =>(
                <Post post={post} key={index}/>
            ))}
            
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default HomeScreen
