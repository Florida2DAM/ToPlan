import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonPlan from '../Components/button/ButtonPlan';
import axios from 'axios';
const urlCheckEmail ='http://3.95.8.159:44360/api/User/Check?id=';
const urlGetUser ='http://3.95.8.159:44360/api/User/GetUserId?id=';



export class LoginScreen extends Component {
    constructor(props) {
        super();
        this.state={
            email:'',
            checkE:false,
        }
    }




    checkEmail = async (email) => {
        let exist;
        try {
            axios
                .get(urlCheckEmail+email)
                .then(response => {
                        return response.data;


                })
                .catch(function(error) {
                    alert(error);
                });
        } catch (error) {
            console.log(error);
        }

    };
    checkPassword = async (email) => {
        let user=[];
        try {
            axios
                .get(urlGetUser+email)
                .then(response => {
                    //alert(response.data);
                    user = response.data;
                })
                .catch(function(error) {
                    alert(error);
                });
        } catch (error) {
            console.log(error);
        }


    }

    login = () => {

        if (this.checkEmail(this.state.email)===true) {
            alert('existe');
        }
        this.setState({checkE:false});






    }

    transitionScreen = () => {

        // añadir codigo para comprar si el usuario existe en la base de datos.

        alert('Loggin OK');


    }
    registerScreen = () => {
        this.props.navigation.navigate('Register');
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
                            <Input placeholder='Email' value={this.state.email} onChangeText={(text) => this.setState({email:text})} leftIcon={<Icon name='user' size={24} color='black'/>}/>
                            <Input placeholder='Password' secureTextEntry={true}
                                   leftIcon={<Icon name='lock' size={24} color='black'/>}/>
                        </View>
                        <View style={styleLogin.buttonsContainer}>
                            <View><ButtonPlan metodo={this.login} size={140} topmargin={10} title={'Login'} /></View>
                            <View><ButtonPlan metodo={this.registerScreen} size={140} topmargin={10} title={'Register'} /></View>

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
        display:'flex',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
});

export default LoginScreen;
