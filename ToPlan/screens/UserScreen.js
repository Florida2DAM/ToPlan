import React from 'react';
import {FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {EventMiddle} from '../Components/eventMiddle/EventMiddle';
import {NavBar} from '../Components/navBar/NavBar';
import axios from 'axios';
import TagUser from '../Components/TagUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ip = '100.24.72.24';
const urlGetEventsById = 'http://' + ip + ':44360/api/Event/EventsUser?id=';
const urlGetUserById = 'http://' + ip + ':44360/api/User1?id=';
const urlTypes = 'http://' + ip + ':44360/api/TypePlan/ListDTO';

export class UserScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {
            options: [],
            userEmail: '',
            planes: [],
            user: {},
            displayErrorEvents: 'none',
        };
    }

    async getStorage() {
        try {
            this.setState({userEmail: await AsyncStorage.getItem('userKey')});


        } catch (e) {

        }
    }

    removeUserStorage = async () => {
        try {
            await AsyncStorage.removeItem('userKey');
        } catch (e) {

        }
    };
    getEventsByIdUser = async (user) => {

        try {
            axios
                .get(urlGetEventsById + user)
                .then(response => {
                    if (response.data === null || response.data.length === 0) {
                        this.setState({displayErrorEvents: 'flex'});
                    } else {
                        this.setState({planes: response.data});
                    }
                })
                .catch(function (error) {
                    alert(error);
                });
        } catch (error) {
            console.log(error);
        }
    };
    getUserById = async (user) => {
        try {
            axios
                .get(urlGetUserById + user)
                .then(response => {
                    if (response.data === null || response.data.length === 0) {
                        alert('Error. Try Again');
                    } else {
                        this.setState({user: response.data});
                    }
                })
                .catch(function (error) {
                    alert(error);
                });
        } catch (error) {
            console.log(error);
        }
    };

    detailsScreen = (evento) => {
        this.getStorage().then(r => {
            if (this.state.userEmail === null) {
                this.props.navigation.navigate('Login', {screen: 'Details'});
            } else {
                this.props.navigation.navigate('Details', {planScreen: evento});
            }
        });
    };
    logoutUser = () => {
        this.removeUserStorage().then(r => {
            this.props.navigation.navigate('Inicio');

        });
    };
    getTypes = async () => {
        try {
            axios
                .get(urlTypes)
                .then(response => {
                    if (response.data === null || response.data.length === 0) {

                    } else {
                        this.setState({options: response.data});
                    }
                });

        } catch (error) {
            console.log(error);
        }
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



    componentDidMount() {
        this.getStorage().then(r => {
            this.getUserById(this.state.userEmail);
            this.getEventsByIdUser(this.state.userEmail);
            this.getTypes();
        });

    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.contentContainer}>
                    <View style={styles.containerLogo}>
                        <Image
                            style={styles.mainLogo}
                            source={require('../Assets/LogoSimple.png')}/>
                    </View>
                    <View>
                        <TagUser email={this.state.userEmail} options={this.state.options} metodoPreference={() => alert('hola')}
                                 metodo={this.logoutUser} user={this.state.user}/>

                    </View>
                    <View style={{alignItems: 'center', marginTop: '50%', display: this.state.displayErrorEvents}}>
                        <Text>Todavia no has creado ningun evento</Text>
                    </View>


                    <FlatList
                        data={this.state.planes}
                        keyExtractor={(item, index) => index.toString()}
                        style={{padding: 5}}
                        renderItem={({item}) => (
                            <Pressable onPress={() => this.detailsScreen(item.EventId)}><EventMiddle
                                element={item}/></Pressable>)}>
                    </FlatList>

                </View>
                <View style={styles.navigationContainer}>
                    <NavBar create={this.createPlanScreen} user={this.userScreen} find={this.exploreScreen}/>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        flex: 1,

    },
    contentContainer: {
        flexDirection: 'column',
        flex: 4,


    },

    navigationContainer: {
        flexDirection: 'column',
        flex: 0,


    },
    containerLogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    mainLogo: {
        width: 56,
        height: 65,
    },
    userLogo: {
        width: 100,
        height: 100,
        marginTop: 20,
    },
    preferences: {
        width: 60,
        height: 60,
        marginLeft: 20,
    },
    containerUser: {
        backgroundColor: '#dddbdc',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        marginTop: 50,
        height: 200,

    },
    navContainer: {},
    containerInfo: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,

    },
    containerPreferences: {
        display: 'flex',
        flexDirection: 'row',
    },
});

export default UserScreen;
