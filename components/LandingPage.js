import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Button, TextInput, ScrollView,ImageBackground } from 'react-native';

import coverImg from "../assets/1.jpg";
const LandingPage = () => {
  return (
    <View>
      <View style={{width:"94%", flexDirection:"row", margin:"3%"}}>
       <View style={{width:"10%", }}>
        <Text style={{fontSize:30, marginHorizontal:10}}>NoSTRA</Text>
       </View>

       <View style={{width:"60%", flexDirection:"row", justifyContent:"center"}}>
       <Text style={{fontSize:20, marginHorizontal:10}}>Shop</Text>
       <Text style={{fontSize:20, marginHorizontal:10}}>Most Wanted</Text>
       <Text style={{fontSize:20, marginHorizontal:10}}>New Arrival</Text>
       <Text style={{fontSize:20, marginHorizontal:10}}>Brands</Text>
       </View>

       <View style={{width:"30%", flexDirection:"row",  }}>
       <View style={{width:"70%", height:50, flexDirection:"row",  backgroundColor:"gray", marginLeft:20}}>
        <View style={{width:"10%",  height:40, margin:5,backgroundColor:"black", borderRadius:50}}/>
        <Text style={{fontSize:18, marginLeft: 10, color:"white", width:"80%", height:"100%", justifyContent:"center",padding:10}}>Search</Text>
       </View>
       <View style={{width:40,  height:40, margin:5,backgroundColor:"black", borderRadius:50}}/>
       <View style={{width:40,  height:40, margin:5,backgroundColor:"black", borderRadius:50}}/>
       </View>


      </View>

      <View style={{width:"94%", height:700, marginHorizontal:"3%"}}>
<Image source={coverImg} style={{width:"100%", height:"100%"}}/>

<View style={{backgroundColor:"rgba(0,0,0,0.5)", width:"100%", height:"100%", position:"absolute", top:0, left:0, zIndex:10}}/>
<View style={{backgroundColor:"rgba(0,0,0,0.5)", width:"100%", height:"100%", position:"absolute", top:0, left:0, zIndex:20}}>
    <Text style={{color:"white"}}>Level Up Your Style With Our Summer Collection</Text>
</View>
      </View>
    </View>
  )
}

export default LandingPage

const styles = StyleSheet.create({})