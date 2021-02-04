/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
} from 'react-native';


import { Text } from 'react-native-elements';


import { EventMiddle } from './Components/eventMiddle/EventMiddle';
import { NavBar } from './Components/navBar/NavBar';
import RegisterScreen from "./screens/RegisterScreen";
import UserScreen from "./screens/UserScreen";

export class App extends Component{
  constructor(props){
    super(props);

    this.state = {}

  }

  render() {
    return (
      <>
          <UserScreen></UserScreen>
    </>
  );
};
}

const styleLogin = StyleSheet.create({

});

export default App;
