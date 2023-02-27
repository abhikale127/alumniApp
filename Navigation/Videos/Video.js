import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { USERS } from "../../Data/Users";
import YoutubePlayer from "react-native-youtube-iframe"

const Watch = ({ post }) => {
  return (
    <View>
      <Text style={{fontSize:18,fontWeight:"bold",paddingVertical:10,paddingLeft:5}}>Videos</Text>
       
       {/* SingleVideo */}
        <View style={{
          paddingVertical:10,
          paddingHorizontal:10,
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-between"
        }}>
          <View style={{
            flexDirection:"row",
            alignItems:"center"
          }}>
          <Image source={{uri: "https://yt3.ggpht.com/tizGJv6p6UKdu86hnKw-NwHDmjM8mFxtwG8XwAgjNtZDpTs9sy9mJa3VQmMYwAEY-AZmurnz=s176-c-k-c0x00ffffff-no-rj-mo"}} style={{width:30,height:30,borderRadius:50,}}/>
          <Text style={{fontSize:16}}>{"  "}T-series</Text>
          </View>
          <>
          <Text>...{"  "}</Text>
          </>
        </View>
      <View> 
          <YoutubePlayer 
          height={300}
          play={true}
          videoId={"KbTqF8o7LTY"} 
          />
      </View>

      <View style={{
   flexDirection:"row",
   justifyContent:"space-between",
   alignItems:"center",
   marginTop:-98
    }}>
      {/* Likes */}
      <View
      style={{
        flexDirection:"row",
        alignItems:"center",
        width:100,
        height:40,
        borderRadius:30,
        backgroundColor:"#F0F2F5",
        justifyContent:"center",
        marginTop:20,
        marginLeft:5,
     }}>
        <TouchableOpacity>
         <Image source={require("../../assets/reacts/like.png")} 
          style={{
              width:20,
              height:20,
              resizeMode:"contain"
          }}
         />
        </TouchableOpacity>
        <Text>{"  "}122k</Text>
      </View>
      {/* comments */}
      <View
      style={{
        flexDirection:"row",
        alignItems:"center",
        width:100,
        height:40,
        borderRadius:30,
        backgroundColor:"#F0F2F5",
        justifyContent:"center",
        marginTop:20,
        marginLeft:5,
     }}>
        <TouchableOpacity>
         <Image source={require("../../assets/reacts/comment.png")} 
          style={{
              width:18,
              height:18,
              resizeMode:"contain",
              borderRadius:50,
          }}
         />
        </TouchableOpacity>
        <Text>{"  "}11.7k</Text>
      </View>
      {/* share */}
     
      <View
      style={{
        flexDirection:"row",
        alignItems:"center",
        width:100,
        height:40,
        borderRadius:30,
        backgroundColor:"#F0F2F5",
        justifyContent:"center",
        marginTop:20,
        marginLeft:5,
     }}>
        <TouchableOpacity>
         <Image source={require("../../assets/reacts/share.png")} 
          style={{
              width:20,
              height:20,
              resizeMode:"contain"
          }}
         />
        </TouchableOpacity>
        <Text>{"  "}22.1k</Text>
      </View>
    </View>

      <View style={{
          paddingVertical:10,
          paddingHorizontal:10,
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-between"
        }}>
          <View style={{
            flexDirection:"row",
            alignItems:"center"
          }}>
          <Image source={{uri: "https://yt3.ggpht.com/KtRVDKFfXO96nEoglJ_epy1clktDJNKJjEPtNmvIBsNLuCi9yGMuyK3MywMiqJadqsFPxJbAhA=s48-c-k-c0x00ffffff-no-rj"}} style={{width:30,height:30,borderRadius:50,}}/>
          <Text style={{fontSize:16}}>{"  "}Programmer Shahriar Sajeeb</Text>
          </View>
          <>
          <Text>...{"  "}</Text>
          </>
        </View>
      <View> 
          <YoutubePlayer 
          height={300}
          play={true}
          videoId={"hGAaWhxUPfY"} 
          />
      </View>
   
      <View style={{
   flexDirection:"row",
   justifyContent:"space-between",
   alignItems:"center",
   marginTop:-98
    }}>
      {/* Likes */}
      <View
      style={{
        flexDirection:"row",
        alignItems:"center",
        width:100,
        height:40,
        borderRadius:30,
        backgroundColor:"#F0F2F5",
        justifyContent:"center",
        marginTop:30,
        marginLeft:5,
     }}>
        <TouchableOpacity>
         <Image source={require("../../assets/reacts/like.png")} 
          style={{
              width:20,
              height:20,
              resizeMode:"contain"
          }}
         />
        </TouchableOpacity>
        <Text>{"  "}122k</Text>
      </View>
      {/* comments */}
      <View
      style={{
        flexDirection:"row",
        alignItems:"center",
        width:100,
        height:40,
        borderRadius:30,
        backgroundColor:"#F0F2F5",
        justifyContent:"center",
        marginTop:10,
        marginLeft:5,
     }}>
        <TouchableOpacity>
         <Image source={require("../../assets/reacts/comment.png")} 
          style={{
              width:18,
              height:18,
              resizeMode:"contain",
              borderRadius:50,
          }}
         />
        </TouchableOpacity>
        <Text>{"  "}11.7k</Text>
      </View>
      {/* share */}
     
      <View
      style={{
        flexDirection:"row",
        alignItems:"center",
        width:100,
        height:40,
        borderRadius:30,
        backgroundColor:"#F0F2F5",
        justifyContent:"center",
        marginTop:10,
        marginLeft:5,
     }}>
        <TouchableOpacity>
         <Image source={require("../../assets/reacts/share.png")} 
          style={{
              width:20,
              height:20,
              resizeMode:"contain"
          }}
         />
        </TouchableOpacity>
        <Text>{"  "}22.1k</Text>
      </View>
    </View>

      

      <View style={{
          paddingVertical:10,
          paddingHorizontal:10,
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-between"
        }}>
          <View style={{
            flexDirection:"row",
            alignItems:"center"
          }}>
          <Image source={{uri: "https://yt3.ggpht.com/ytc/AKedOLS2BKsBSELDD3OKRKRTxBKl1AtZiU6vpgfwmEq4VQ=s48-c-k-c0x00ffffff-no-rj"}} style={{width:30,height:30,borderRadius:50,}}/>
          <Text style={{fontSize:16}}>{"  "}Noble Man</Text>
          </View>
          <>
          <Text>...{"  "}</Text>
          </>
        </View>
      <View> 
          <YoutubePlayer 
          height={300}
          play={true}
          videoId={"FmXLVKFpzcA"} 
          />
      </View>

      <View style={{
   flexDirection:"row",
   justifyContent:"space-between",
   alignItems:"center",
    }}>
      {/* Likes */}
      <View
      style={{
        flexDirection:"row",
        alignItems:"center",
        width:100,
        height:40,
        borderRadius:30,
        backgroundColor:"#F0F2F5",
        justifyContent:"center",
        marginTop:10,
        marginLeft:5,
     }}>
        <TouchableOpacity>
         <Image source={require("../../assets/reacts/like.png")} 
          style={{
              width:20,
              height:20,
              resizeMode:"contain"
          }}
         />
        </TouchableOpacity>
        <Text>{"  "}122k</Text>
      </View>
      {/* comments */}
      <View
      style={{
        flexDirection:"row",
        alignItems:"center",
        width:100,
        height:40,
        borderRadius:30,
        backgroundColor:"#F0F2F5",
        justifyContent:"center",
        marginTop:10,
        marginLeft:5,
     }}>
        <TouchableOpacity>
         <Image source={require("../../assets/reacts/comment.png")} 
          style={{
              width:18,
              height:18,
              resizeMode:"contain",
              borderRadius:50,
          }}
         />
        </TouchableOpacity>
        <Text>{"  "}11.7k</Text>
      </View>
      {/* share */}
     
      <View
      style={{
        flexDirection:"row",
        alignItems:"center",
        width:100,
        height:40,
        borderRadius:30,
        backgroundColor:"#F0F2F5",
        justifyContent:"center",
        marginTop:10,
        marginLeft:5,
     }}>
        <TouchableOpacity>
         <Image source={require("../../assets/reacts/share.png")} 
          style={{
              width:20,
              height:20,
              resizeMode:"contain"
          }}
         />
        </TouchableOpacity>
        <Text>{"  "}22.1k</Text>
      </View>
    </View>


    </View>
  );
};

export default Watch;
