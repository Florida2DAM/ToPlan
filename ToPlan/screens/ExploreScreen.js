/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    View,
} from 'react-native';
import {Text} from 'react-native-elements';
import {EventMiddle} from './Components/eventMiddle/EventMiddle';
import {NavBar} from './Components/navBar/NavBar';

export class ExploreScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            planes: [{user: 'Rafa', location: 'Alaquas', date: '20/02/2021', category: 'Deportes', type: 'Football'},
                {user: 'Rafa', location: 'Alaquas', date: '20/02/2021', category: 'Deportes', type: 'Football'},
                {user: 'Rafa', location: 'Alaquas', date: '20/02/2021', category: 'Deportes', type: 'Football'},
                {user: 'Rafa', location: 'Alaquas', date: '20/02/2021', category: 'Deportes', type: 'Football'}],
        };
    }

    render() {
        return (
            <>
                <View style={styleLogin.loginContainer}>
                    <View style={styleLogin.logoContainer}>
                        <Image style={styleLogin.logo} source={require('./Assets/LogoSimple.png')}/>
                        <Text h3>ToPlan</Text>
                    </View>
                    <View style={styleLogin.inputContainer}>
                        <FlatList
                            data={this.state.planes}
                            keyExtractor={(item, index) => index.toString()}
                            style={{padding: 5}}
                            renderItem={({item}) => (<EventMiddle element={item}></EventMiddle>)}>
                        </FlatList>
                    </View>
                    <View style={styleLogin.navContainer}><NavBar></NavBar></View>
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

export default ExploreScreen;
