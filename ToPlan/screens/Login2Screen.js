import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonPlan from './Components/button/ButtonPlan';

export class LoginScreen extends Component {

    render() {
        return (
            <>
                <ScrollView>
                    <View style={styleLogin.loginContainer}>
                        <View style={styleLogin.logoContainer}>
                            <Image style={styleLogin.logo} source={require('./Assets/LogoSimple.png')}/>
                        </View>
                        <View style={styleLogin.inputContainer}>
                            <Input placeholder='Email' leftIcon={<Icon name='user' size={24} color='black'/>}/>
                            <Input placeholder='Password' secureTextEntry={true}
                                   leftIcon={<Icon name='lock' size={24} color='black'/>}/>
                        </View>
                        <ButtonPlan metodo={this.loginCheck} title={'Login'}/>
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
        // #dddbdc
    },
    logo: {},
});

export default LoginScreen;
