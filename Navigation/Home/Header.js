import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'


const Header = () => {
    return (
        <View style={{
            backgroundColor : `#ba55d3`,
            flexDirection:"row",
            justifyContent:"space-between",
            paddingHorizontal:10,
            height :55
        }}>
            <View>
                <TouchableOpacity>
                <Image source={require("../../assets/images/logo.png")} 
                style={{
                    width:100,
                    height:50,
                    resizeMode:"contain"
                }}
                />
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection:"row"
            }}> 
            <TouchableOpacity>
                <Image source={require("../../assets/images/search.png")} style={{width:50,height:50, resizeMode:"contain"}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require("../../assets/images/navbar.png")} style={{width:35,height:35, resizeMode:"contain",paddingTop:50}}/>
            </TouchableOpacity>
            </View>

        </View>
    )
}

export default Header
