import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    FlatList,
    Image,
    StyleSheet,
    View,
} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {EventMiddle} from './Components/eventMiddle/EventMiddle';
import {NavBar} from './Components/navBar/NavBar';
// Imports de pantallas.
import InicioScreen from './screens/InicioScreen';
import LoginScreen from './screens/LoginScreen';
import ExploreScreen from './screens/ExploreScreen';
import UserScreen from './screens/UserScreen';
import RegisterScreen from './screens/RegisterScreen';

const pilaNavegacion = createStackNavigator();




export class App extends Component {
    constructor(props) {
        super(props);

    this.state = {}

  }


  render() {
    return (
        <NavigationContainer>
            <pilaNavegacion.Navigator>
                <pilaNavegacion.Screen name="Inicio" component={InicioScreen} />
                <pilaNavegacion.Screen name="Login" component={LoginScreen} />
            </pilaNavegacion.Navigator>
        </NavigationContainer>
  );
};
}

const styleLogin = StyleSheet.create({

});

export default App;
