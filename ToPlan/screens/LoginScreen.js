import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonPlan from '../Components/button/ButtonPlan';



export class LoginScreen extends Component {

    query = (url, param) => {

        axios.get(url + '=' + param).then((respuesta) => {
            if (respuesta.data.length === 0) {
                alert("ningun usuario coincide con el nombre introducido");
            } else {
                this.setState({users: respuesta.data});
            }
        }).catch(e => {
            console.log("Error de conexion con la API")
        })
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
                            <Input placeholder='Email' leftIcon={<Icon name='user' size={24} color='black'/>}/>
                            <Input placeholder='Password' secureTextEntry={true}
                                   leftIcon={<Icon name='lock' size={24} color='black'/>}/>
                        </View>
                        <ButtonPlan size={300} topmargin={10} title={"Login"} ></ButtonPlan>
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
