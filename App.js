import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReadStory from "./Screens/readStory"
import WriteStory from "./Screens/writeStory"
import {createAppContainer} from 'react-navigation'; 
import { createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
  return (
      <AppContainer></AppContainer>
  );
  }
}

const tabNavigator = createBottomTabNavigator({
  ReadStory: ReadStory,
  WriteStory: WriteStory,
})
const AppContainer = createAppContainer(tabNavigator)