/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, {Component} from 'react';
import {
    FlatList,
    Image, Pressable,
    StyleSheet,
    View,
} from 'react-native';
import {Text} from 'react-native-elements';
import {EventMiddle} from '../Components/eventMiddle/EventMiddle';
import {NavBar} from '../Components/navBar/NavBar';
import axios, {Axios} from 'axios';

import LoginScreen from './LoginScreen';
import ButtonPlan from '../Components/button/ButtonPlan';

const url = 'http://3.95.8.159:44360/api/Event3';



export class InicioScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            planes: [],
        };
    }
    getEventsByDate = async () => {
        try {
            axios
                .get(url)
                .then(response => {
                    if (response.data === null || response.data.length === 0) {
                        alert('error de conexion');
                    }else {
                        this.setState({planes: response.data});
                    }
                })
                .catch(function(error) {
                    alert(error);
                });
        } catch (error) {
            console.log(err);
        }
    };

    componentDidMount = () => {
      this.getEventsByDate(url);


    };
    nextScreen = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <>
                <View style={styleLogin.loginContainer}>
                    <View style={styleLogin.logoContainer}>
                        <Pressable onPress={this.nextScreen}><Image style={styleLogin.logo} source={require('../Assets/LogoSimple.png')}/></Pressable>

                        <Text h3>ToPlan</Text>
                    </View>
                    <View style={styleLogin.inputContainer}>
                        <FlatList
                            data={this.state.planes}
                            keyExtractor={(item, index) => index.toString()}
                            style={{padding: 5}}
                            renderItem={({item}) => (<EventMiddle element={item}/>)}>
                        </FlatList>
                        <ButtonPlan metodo={this.nextScreen} size={100} topmargin={10} title={'aceptar'} />
                    </View>
                    <View style={styleLogin.navContainer}><NavBar/></View>
                </View>
            </>
        );
    };
}

const styleLogin = StyleSheet.create({
    loginContainer: {
        backgroundColor: 'white',
        flex: 1,

    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
    },
    inputContainer: {
        flex: 3,
        // #dddbdc
    },
    navContainer: {
        flex: 0,

    },
    logo: {
        resizeMode: 'stretch',
        width: 150,
        height: 150,

    },
});

export default InicioScreen;
