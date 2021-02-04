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

export class InicioScreen extends Component {
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
                        <View style={styleLogin.logoSubContainer}>
                        <Image style={styleLogin.logo} source={require('./Assets/LogoSimple.png')}/>
                        </View>                    
                        <View style={styleLogin.separador}>
                        <Text h3>FIND PLAN</Text>
                        </View>
                    </View>
                    <View style={styleLogin.inputContainer}>
                      <View style={styleLogin.menuContainer}>
                        <View style={styleLogin.menuSeparator}><Image style={styleLogin.Icons} source={require('./Assets/FORK.png')}/></View>
                        <View style={styleLogin.menuSeparator}><Image style={styleLogin.Icons} source={require('./Assets/tenis.png')}/></View>
                        <View style={styleLogin.menuSeparator}><Image style={styleLogin.Icons} source={require('./Assets/ocio.png')}/></View>
                      </View>
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
      flexDirection:'row',
        flex: 1,
        alignItems: 'center',
    },
    logoSubContainer: {
      flex:1,

    },
    separador:{
      alignItems:'center',
      flex:2,
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
        width: 100,
        height: 100,
    },
    menuContainer:{
      flexDirection:'row',
    },
    menuSeparator:{
      alignItems:'center',
      flex:1,     

    },
    Icons:{
      height:30,
      width:30,
  },
});

export default InicioScreen;
