import * as React from "react";
import {Text, TouchableOpacity, View, StyleSheet, TextInput, KeyboardAvoidingView, ToastAndroid, Platform, Alert } from "react-native"
import db from "../config"


export default class WriteStory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            author: "",
            story: "",
        }
    }
    
    sendStory = async(title, author, story)=>{
        db.collection("stories").add({
            Title: title,
            Author: author, 
            Story: story
        })
        this.setState ({
            title: "",
            author: "",
            story: "",
        })
        Alert.alert("The story has been sent")
    }
   
    render(){
        return(
        <View>        
            <TextInput placeholder = "Story Title" onChangeText = {(text) => {
                this.setState({
                    title: text
                })
            }} value = {this.state.title}></TextInput>
            <TextInput placeholder = "Story Author" onChangeText = {(text) => {
                this.setState({
                    author: text
                })
            }} value = {this.state.author}></TextInput>
            <TextInput placeholder = "Write Story Here"  multiline = {true} style = {styles.inputBox} onChangeText = {(text) => {
                this.setState({
                    story: text
                })
            }} value = {this.state.story}></TextInput>
            <TouchableOpacity onPress = {()=>{this.sendStory(this.state.title, this.state.author, this.state.story)}}><Text>Send Your Story</Text></TouchableOpacity>
        
        
        </View>
        
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    scanButton:{
      backgroundColor: '#66BB6A',
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0
    }
  });
  