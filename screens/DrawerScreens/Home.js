import * as React from "react";
import { useScrollToTop } from "@react-navigation/native";
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../Navigation/Home/Header'
import Post from '../../Navigation/Home/Post'
import PostOption from '../../Navigation/Home/PostOption'
import { POSTS } from '../../Data/Posts'

const Home = (navigation) => {
  // on active tab press, scroll to top
  const ref = React.useRef(null);
  useScrollToTop(ref);

  // local state
  const [showHeader, setShowHeader] = React.useState(true);

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
  );
};

export default Home;
