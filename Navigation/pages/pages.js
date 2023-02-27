import React from 'react'
import { View, Text, Image } from 'react-native'

const pages = () => {
    return (
        <View>
            <Text style={{fontSize:18,fontWeight:"bold",paddingVertical:10,paddingLeft:5}}>Pages</Text>
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                paddingVertical:10,
                paddingHorizontal:10
            }}>
                <Image source={{uri:"https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-1/cp0/p50x50/253712150_404786061308855_7776186557263532782_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=1eb0c7&_nc_eui2=AeHvN8pBbqymTURr0yuygob7B92lElB9_vQH3aUSUH3-9MfnuIBpqbK3z0yjCLjxYhltOuFm_bFyprBbfk27WO6Q&_nc_ohc=N38ktLtlOwIAX88E7Zb&_nc_ht=scontent.fdac99-1.fna&oh=f2f473aed90c78fb92f64f09cec2deb4&oe=61B0EDA4"}}
                style={{
                    width:30,
                    height:30,
                    borderRadius:50,
                }}
                />
                <View style={{
                    flexDirection:"column"
                }}>
                <Text>{"  "}চারু-অলংকার</Text>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                 <View style={{width:10,height:10,backgroundColor:"blue",marginLeft:5,borderRadius:50}}></View>
                <Text>{"  "}25 new</Text>
                </View>
                </View>
            </View>
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                paddingVertical:10,
                paddingHorizontal:10
            }}>
                <Image source={{uri:"https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-1/cp0/p50x50/254632626_108840441607684_4439661332764159343_n.png?_nc_cat=108&ccb=1-5&_nc_sid=1eb0c7&_nc_eui2=AeHD6CQX9FzhJBlaqepmJzPP95BEVqIpFLb3kERWoikUtk8JWPXU12PK1BmRsINNU_akaVKWmJGfz8TdUNUb7f-S&_nc_ohc=hD0pTAE_77QAX8PhJ5q&_nc_ht=scontent.fdac99-1.fna&oh=7ce492741646c62d72870163b06d7df6&oe=61AF218F"}}
                style={{
                    width:30,
                    height:30,
                    borderRadius:50,
                }}
                />
                <View style={{
                    flexDirection:"column"
                }}>
                <Text>{"  "}programmer Shahriar Sajeeb</Text>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                 <View style={{width:10,height:10,backgroundColor:"blue",marginLeft:5,borderRadius:50}}></View>
                <Text>{"  "}12 new</Text>
                </View>
                </View>
            </View>
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                paddingVertical:10,
                paddingHorizontal:10
            }}>
                <Image source={{uri:"https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-1/cp0/p50x50/215427271_120044126985220_2206230757480816019_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=1eb0c7&_nc_eui2=AeGpJGYWvmnOYxStUS-WZkZqg9KtLrWiqIuD0q0utaKoi_T8zDdubjUp3lM18YBQqUHv8YJUmXU-WkQ9HolrIYOv&_nc_ohc=MeJ8lUCSABMAX_Tw690&tn=BRkT4253YD7ex5s1&_nc_ht=scontent.fdac99-1.fna&oh=c69d5c4fa3a75221de9a7690c53d91d8&oe=61B03936"}}
                style={{
                    width:30,
                    height:30,
                    borderRadius:50,
                }}
                />
                <View style={{
                    flexDirection:"column"
                }}>
                <Text>{"  "}𝕮𝖍𝖔𝖈𝕺𝖑𝖆𝖙𝖊</Text>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                 <View style={{width:10,height:10,backgroundColor:"blue",marginLeft:5,borderRadius:50}}></View>
                <Text>{"  "}70 new</Text>
                </View>
                </View>
            </View>
        </View>
    )
}

export default pages
