import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const PostOption = () => {
    return (
        <View 
        style={{
            paddingHorizontal:10,
            margin : 2,
            marginBottom :7,
            display:"flex",
            justifyContent:"space-around"


        }}
        >

            <View
            style={{
                flexDirection:"row",
                alignItems:"center",
                height :80
               
            }}
            >
                <View>
                    <TouchableOpacity>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/206/206853.png?w=740&t=st=1677487963~exp=1677488563~hmac=76ae1e9d120522a0e65b5d87b4cecf8ed327b32f6442d4659fa37ad44428133f"}} 
                    style={{
                        width:50,
                        height:50,
                        borderRadius:50,
                    }}
                     />
                   </TouchableOpacity>
                </View>
                  <View style={{
                      justifyContent:"flex-start"
                }}>
                      <TouchableOpacity>
                      <Image source={require("../../assets/images/placeholder.jpg")}
                       style={{
                           width:280,
                           height:65,
                           resizeMode:"contain"
                       }}
                      />
                      </TouchableOpacity>
                  </View>
                  <View>
                      <TouchableOpacity>
                      <Image source={require("../../assets/images/download.png")} 
                      style={{
                          height:40,
                          width:40,
                          resizeMode:"contain"
                      }}
                      />
                      </TouchableOpacity>
                  </View>
            </View>

            <View style={{
                marginTop: -20
            }}>
              
            </View>
        </View>
    )
}

export default PostOption;

