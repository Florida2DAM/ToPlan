import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    View,
} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {EventMiddle} from './Components/eventMiddle/EventMiddle';
import {NavBar} from './Components/navBar/NavBar';

export class App extends Component {
    constructor(props) {
        super(props);

    this.state = {}

  }

  render() {
    return (
      <>
      <NavigationContainer>
        <Text>hola mundo</Text>
      </NavigationContainer>
      
    </>
  );
};
}

const styleLogin = StyleSheet.create({

});

export default App;
