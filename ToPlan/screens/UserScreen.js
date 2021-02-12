import React from 'react';
import {FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {EventMiddle} from '../Components/eventMiddle/EventMiddle';
import {NavBar} from "../Components/navBar/NavBar"
import axios from 'axios';
import TagUser from '../Components/TagUser';
const urlGetEventsById = 'http://3.95.8.159:44360/api/Event/EventsUser?id=';
const urlGetUserById = 'http://3.95.8.159:44360/api/User1?id=';

export class UserScreen extends React.Component {
    constructor(props) {
        super();
        this.state ={
            planes:[],
            user:{},
        }
    }
    getEventsByIdUser = async (user) => {
        try {
            axios
                .get(urlGetEventsById + user )
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
    }
    getUserById = async (user) => {
        try {
            axios
                .get(urlGetUserById + user )
                .then(response => {
                    if (response.data === null || response.data.length === 0) {
                        alert('error de conexion');
                    }else {
                        this.setState({user: response.data});
                    }
                })
                .catch(function(error) {
                    alert(error);
                });
        } catch (error) {
            console.log(error);
        }
    }
    exploreScreen = () => {
        this.props.navigation.navigate('Explore');
    }
    createPlanScreen = () => {
        this.props.navigation.navigate('CreatePlan');

    }

    componentDidMount() {
        this.getEventsByIdUser('admin');
        this.getUserById('rafa@mail.com');
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
                            <TagUser user={this.state.user}/>





                    </View>

                        <FlatList
                            data={this.state.planes}
                            keyExtractor={(item, index) => index.toString()}
                            style={{padding: 5}}
                            renderItem={({item}) => (<Pressable onPress={this.loginScreen}><EventMiddle element={item}/></Pressable>)}>
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
        flex:1

    },
    contentContainer: {
        flexDirection: 'column',
        flex:4



    },

    navigationContainer: {
        flexDirection: 'column',
        flex:0


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
        marginTop:20
    },
    preferences: {
        width: 60,
        height: 60,
        marginLeft: 20,
    },
    containerUser: {
        backgroundColor: '#dddbdc',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        marginTop: 50,
        height: 200,

    },
    navContainer: {

    },
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
