import React, {Component} from 'react';
import {
    FlatList,
    Image, Pressable,
    StyleSheet,
    View,
} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {EventMiddle} from '../Components/eventMiddle/EventMiddle';
import {NavBar} from '../Components/navBar/NavBar';
import axios from 'axios';

const urlEventsBySport = 'http://3.95.8.159:44360/api/Event/Sport';
const urlEventsByLeisure = 'http://3.95.8.159:44360/api/Event/Leisure';
const urlEventsByGastronomy = 'http://3.95.8.159:44360/api/Event/Gastronomy';

export class ExploreScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            leisure: [],
            sports: [],
            gastronomy: [],
            type: [],
            sportVisibility:'none',
            gastronomyVisibility:'flex',
            leisureVisibility:'none',

        };
    }

    getEventsBySports = async () => {
        try {
            axios
                .get(urlEventsBySport)
                .then(response => {
                    if (response.data === null || response.data.length === 0) {
                        alert('error de conexion');
                    }else {
                        this.setState({sports: response.data});
                    }
                })
                .catch(function(error) {
                    alert(error);
                });
        } catch (error) {
            console.log(err);
        }
    };
    getEventsByLeisure = async () => {
        try {
            axios
                .get(urlEventsByLeisure)
                .then(response => {
                    if (response.data === null || response.data.length === 0) {
                        alert('error de conexion');
                    }else {
                        this.setState({leisure: response.data});
                    }
                })
                .catch(function(error) {
                    alert(error);
                });
        } catch (error) {
            /*console.log(err);*/
        }
    };
    getEventsByGastronomy = async () => {
        try {
            axios
                .get(urlEventsByGastronomy)
                .then(response => {
                    if (response.data === null || response.data.length === 0) {
                        alert('error de conexion');
                    }else {
                        this.setState({gastronomy: response.data});
                    }
                })
                .catch(function(error) {
                    alert(error);
                });
        } catch (error) {
            /*console.log(err);*/
        }
    };

    componentDidMount = () => {
        this.getEventsBySports();
        this.getEventsByLeisure();
        this.getEventsByGastronomy();
        this.setState({type: this.state.sports});

    };

    showGastronomy = () => {
        this.setState({sporVisibility: 'none'});
        this.setState({leisureVisibility: 'none'});
        this.setState({gastronomyVisibility: 'flex'});
    }
    showSports = () => {
        this.setState({sporVisibility: 'flex'});
        this.setState({leisureVisibility: 'none'});
        this.setState({gastronomyVisibility: 'none'});
    }
    showLeisure = () => {
        this.setState({sporVisibility: 'none'});
        this.setState({leisureVisibility: 'flex'});
        this.setState({gastronomyVisibility: 'none'});
    }

    render() {
        return (
            <>
                <View style={styleLogin.loginContainer}>
                    <View style={styleLogin.logoContainer}>
                        <View style={styleLogin.logoSubContainer}>
                        <Image style={styleLogin.logo} source={require('../Assets/LogoSimple.png')}/>
                        </View>
                        <View style={styleLogin.separador}>
                        <Text h3>FIND PLAN</Text>
                        </View>
                    </View>
                    <View style={styleLogin.inputContainer}>
                      <View style={styleLogin.menuContainer}>
                        <View style={styleLogin.menuSeparator}>
                            <Pressable onPress={this.showGastronomy}><Image style={styleLogin.Icons} source={require('../Assets/FORK.png')}/></Pressable>
                        </View>
                        <View style={styleLogin.menuSeparator}>
                            <Pressable onPress={this.showSports}><Image style={styleLogin.Icons} source={require('../Assets/tenis.png')}/></Pressable>
                        </View>
                        <View style={styleLogin.menuSeparator}>
                            <Pressable onPress={this.showLeisure}><Image style={styleLogin.Icons} source={require('../Assets/ocio.png')}/></Pressable>
                        </View>
                      </View>
                        <FlatList
                            data={this.state.sports}
                            keyExtractor={(item, index) => index.toString()}
                            style={{padding: 5, display:this.state.sportVisibility }}
                            renderItem={({item}) => (<EventMiddle element={item}/>)}>
                        </FlatList>
                        <FlatList
                            data={this.state.leisure}
                            keyExtractor={(item, index) => index.toString()}
                            style={{padding: 5, display:this.state.leisureVisibility }}
                            renderItem={({item}) => (<EventMiddle element={item}/>)}>
                        </FlatList>
                        <FlatList
                            data={this.state.gastronomy}
                            keyExtractor={(item, index) => index.toString()}
                            style={{padding: 5, display:this.state.gastronomyVisibility }}
                            renderItem={({item}) => (<EventMiddle element={item}/>)}>
                        </FlatList>
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

export default ExploreScreen;
