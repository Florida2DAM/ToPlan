import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonPlan from '../Components/button/ButtonPlan';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const urlCheckEmail = 'http://54.234.64.228:44360/api/User/Check?id=';
const urlGetUser = 'http://54.234.64.228:44360/api/User/GetUserId?id=';
const errorInputEmail = React.createRef();
const errorInputPassword = React.createRef();


export class LoginScreen extends Component {
    exist: Promise<false>;

    constructor(props) {
        super();
        this.state = {
            email: '',
            verify: false,
            user: [],
            password: '',
            errorEmail: '',
            errorPassword: '',

        };
    }
    storeData = async (idUser) => {
        try {
            await AsyncStorage.setItem('userKey', idUser)
        } catch (e) {
            alert(e)
        }
    }


    checkEmail = (email) => {
        try {
            axios
                .get(urlCheckEmail + email)
                .then(response => {
                    if (response.data) {
                        this.checkPassword(this.state.email);

                    } else {
                        alert('Email not exist');
                    }
                })
                .catch(function (error) {
                    alert(error);
                });
        } catch (error) {
            console.log(error);
        }
        return this.exist;

    };

    checkPassword = async (email) => {
        try {
            axios
                .get(urlGetUser + email)
                .then(response => {
                    this.setState({user: response.data}, () => {

                        if (this.state.password === this.state.user[0].Password) {
                            this.transitionScreen(this.props.route.params.screen, this.props.route.params.planScreen);
                        } else {
                            this.setState({errorPassword: 'PASWORD OR EMAIL WRONG'});
                            errorInputPassword.current.shake();
                        }
                    });

                })
                .catch(function (error) {
                    alert(error);
                });
        } catch (error) {
            console.log(error);
        }


    };
    resetError = () => {
        this.setState({errorEmail: ''});
        this.setState({errorPassword: ''});
    };

    login = () => {
        this.resetError();
        if (this.state.email.length <= 10) {
            this.setState({errorEmail:'INSERT A VALID EMAIL'});

            errorInputEmail.current.shake();
        } else if (this.state.password.length === 0) {
            this.setState({errorPassword: 'INSERT PASSWORD'});
            errorInputPassword.current.shake();
        } else {
            this.checkEmail(this.state.email);
        }
    };


    transitionScreen = (pantallaDestino, evento) => {
        this.storeData(this.state.email).then(r => {});
        this.props.navigation.navigate(pantallaDestino,{planScreen:evento});
    };
    registerScreen = () => {
        this.props.navigation.navigate('Register');
    };
    componentDidMount() {

    }


    render() {
        return (
            <>
                <ScrollView>
                    <View style={styleLogin.loginContainer}>
                        <View style={styleLogin.logoContainer}>
                            <Image style={styleLogin.logo} source={require('../Assets/LogoSimple.png')}/>
                        </View>
                        <View style={styleLogin.inputContainer}>
                            <Input ref={errorInputEmail} placeholder='Email' value={this.state.email}
                                   errorStyle={{color: 'red'}} errorMessage={this.state.errorEmail}
                                   onChangeText={(text) => this.setState({email: text})}
                                   leftIcon={<Icon name='user' size={24} color='black'/>}/>
                            <Input ref={errorInputPassword} placeholder='Password' secureTextEntry={true}
                                   errorStyle={{color: 'red'}} errorMessage={this.state.errorPassword}
                                   value={this.state.password} onChangeText={(text) => this.setState({password: text})}
                                   leftIcon={<Icon name='lock' size={24} color='black'/>}/>
                        </View>
                        <View style={styleLogin.buttonsContainer}>
                            <View><ButtonPlan metodo={this.login} size={140} topmargin={10} title={'Login'}/></View>
                            <View><ButtonPlan metodo={this.registerScreen} size={140} topmargin={10}
                                              title={'Register'}/></View>

                        </View>

                    </View>
                </ScrollView>
            </>
        );
    };
}

const styleLogin = StyleSheet.create({
    loginContainer: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    logoContainer: {
        marginTop: 50,
        alignItems: 'center',
    },
    inputContainer: {
        marginTop: 50,
        width: '80%',
    },
    buttonsContainer: {
        display: 'flex',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
});

export default LoginScreen;
