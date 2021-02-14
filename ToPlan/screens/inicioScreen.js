/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

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

const urlEventsByDate = 'http://54.234.64.228:44360/api/Event3';



export class InicioScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userEmail:'',
            planes: [],
        };
    }
    storeData = async (idUser) => {
        try {
            await AsyncStorage.setItem('userKey', idUser)
        } catch (e) {
            alert(e)
        }
    }
    async getStorage() {
        try{
            this.setState({userEmail: await AsyncStorage.getItem('userKey')});

        }catch (e) {

        }
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
            console.log(error);
        }
    };

    removeValue = async () => {
        try {
            await AsyncStorage.removeItem('userKey');
        } catch(e) {
            // remove error
        }

        console.log('Done.')
    }

    /*dropStoreg = () =>  {
        setInterval(function(){

                AsyncStorage.removeItem('userKey');
                alert('hola');

        },90000);


    }*/

    componentDidMount = () => {
      this.getEventsByDate(urlEventsByDate);



    };

    detailsScreen = (evento) => {
        this.getStorage().then(r => {
            if (this.state.userEmail === null){
                this.props.navigation.navigate('Login',{screen:'Details',planScreen:evento});
            }else {this.props.navigation.navigate('Details',{planScreen:evento});}
        })



    }
    registerScreen = () => {
        this.props.navigation.navigate('Register');
    };
    userScreen = () => {
        this.getStorage().then(r => {
            if (this.state.userEmail === null){
                this.props.navigation.navigate('Login',{screen:'User'});
            }else {this.props.navigation.navigate('User');}
        })
    }
    exploreScreen = () => {
        this.getStorage().then(r => {
            if (this.state.userEmail === null){
                this.props.navigation.navigate('Login',{screen:'Explore'});
            }else {this.props.navigation.navigate('Explore');}
        })
    }
    createPlanScreen = () => {

        this.getStorage().then(r => {
            if (this.state.userEmail === null){
                this.props.navigation.navigate('Login',{screen:'CreatePlan'});
            }else {this.props.navigation.navigate('CreatePlan');}
        })

    }

    render() {
        return (
            <>
                <View style={styleLogin.loginContainer}>
                    <View style={styleLogin.logoContainer}>
                        <Image style={styleLogin.logo} source={require('../Assets/LogoSimple.png')}/>

                        <Text h3>ToPlan</Text>
                    </View>
                    <View style={styleLogin.inputContainer}>
                        <FlatList
                            data={this.state.planes}
                            keyExtractor={(item, index) => index.toString()}
                            style={{padding: 5}}
                            renderItem={({item}) => (<Pressable onPress={() => this.detailsScreen(item.EventId)}><EventMiddle element={item}/></Pressable>)}>
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
