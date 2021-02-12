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
import axios from 'axios';

const urlEventsByDate = 'http://3.95.8.159:44360/api/Event3';



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
                .get(urlEventsByDate)
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
      this.getEventsByDate(urlEventsByDate);


    };
    nextScreen = () => {
        //this.props.navigation.navigate('Login');
        this.props.navigation.navigate('Details')
    }
    loginScreen = () => {
        this.props.navigation.navigate('Login',{screen:'Details'});
        //this.props.navigation.navigate('Details')
    }
    userScreen = () => {
        this.props.navigation.navigate('User');
    }
    exploreScreen = () => {
        this.props.navigation.navigate('Explore');
    }
    createPlanScreen = () => {
        this.props.navigation.navigate('CreatePlan');

    }

    render() {
        return (
            <>
                <View style={styleLogin.loginContainer}>
                    <View style={styleLogin.logoContainer}>
                        <Pressable onPress={this.loginScreen}><Image style={styleLogin.logo} source={require('../Assets/LogoSimple.png')}/></Pressable>

                        <Text h3>ToPlan</Text>
                    </View>
                    <View style={styleLogin.inputContainer}>
                        <FlatList
                            data={this.state.planes}
                            keyExtractor={(item, index) => index.toString()}
                            style={{padding: 5}}
                            renderItem={({item}) => (<Pressable onPress={this.loginScreen}><EventMiddle element={item}/></Pressable>)}>
                        </FlatList>
                    </View>
                    <View style={styleLogin.navContainer}><NavBar create={this.createPlanScreen} user={this.userScreen} find={this.exploreScreen}/></View>
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
