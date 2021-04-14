import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import db from '../config'
import { ScrollView } from 'react-native-gesture-handler';

export default class ReadStory extends React.Component{
  
constructor(){
super();
this.state = {
 allStories: [],
 search: "",
 lastVisStory: ""
}
}

componentDidMount = async() =>{
  const query = await db.collection("stories").limit(10).get()
  query.docs.map((doc)=>{
    this.setState({
      allStories: [],
      lastVisStory: doc
    })
  })
}

searchStories = async(text) => {
//story name search

const transaction = await db.collection("stories").where('title' , "==", text ).get()
transaction.docs.map((doc) => {
  this.setState({
    allStories: [...this.state.allStories, doc.data()],
    lastVisStory: doc
  })
})
}

moreStories = async() => {
  var text = this.state.search.toUpperCase()
  const query = await db.collection("stories").where('title' , "==", text ).startAfter(this.state.lastVisibleTransaction).get()  
  query.docs.map((doc)=>{
      this.setState({
          allStories: [...this.state.allStories, doc.data()],
          lastVisStory: doc
      })
  })
}
render(){
    return(
      <View style={styles.container}>
      <View style={styles.searchBar}>
      <TextInput
      style = {styles.bar}
      placeholder = "Enter Story Here"
      onChangeText={(text)=>{this.setState({search:text})}}/>
      <TouchableOpacity
      style = {styles.searchButton}
      onPress={()=>{this.searchStories(this.state.search)}}
      ><Text>Search</Text></TouchableOpacity>
      </View>
      <FlatList
      data = {this.state.allStories}
      renderItem={({item})=>(
          <View style={{borderBottomWidth: 2}}>
          <Text>{"Author: " + item.Author}</Text>
          <Text>{"Title: " + item.Title}</Text>
          <Text>{"Story: " + item.Story}</Text>
          </View>
      )}
      keyExtractor = {(item, index) => index.toString()}
      onEndReached = {this.moreStories}
      onEneReachedTreshold = {0.7}
      />
      </View>
    );   
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

