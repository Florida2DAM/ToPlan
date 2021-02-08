import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {EventMiddle} from '../Components/eventMiddle/EventMiddle';
import {ButtonPlan} from "../Components/button/ButtonPlan"
import {NavBar} from "../Components/navBar/NavBar"



export class UserScreen extends React.Component {
    constructor(props) {
        super();
        this.state ={
            name:'TestName',
            surname:'TestSurName',
            mail:'test@test.com',
            phoneNumber:'testNumber',
            age:'23',
            birthDate:'test/test/test',
            planes:[{user: 'Rafa', location: 'Alaquas', date: '20/02/2021', category: 'Deportes', type: 'Football'}]
        }
    }
    render() {
        return (
                <View style={styles.mainContainer}>
                    <View style={styles.contentContainer}>
                    <View style={styles.containerLogo}>
                        <Image
                            style={styles.mainLogo}
                            source={require('../Assets/LogoSimple.png')}
                        />
                    </View>
                    <View style={styles.containerUser}>
                        <Image
                            style={styles.userLogo}
                            source={require('../Assets/user.png')}
                        />
                        <View style={styles.containerInfo}>
                            <Text style={{fontSize: 20}}>{this.state.name} {this.state.surname},{this.state.age}</Text>
                            <Text style={{fontSize: 18}}>{this.state.mail}</Text>
                            <Text style={{fontSize: 18}}>{this.state.phoneNumber}</Text>
                            <Text style={{fontSize: 18}}>{this.state.birthDate}</Text>


                            <ButtonPlan size={100} topmargin={10} title={'Edit'} />

                        </View>


                    </View>
                    <EventMiddle element={this.state.planes[0]} />
                    <EventMiddle element={this.state.planes[0]}/>
                    <Text style={{padding: 20, fontSize: 20}}>Plan Preferences</Text>
                    <View style={styles.containerPreferences}>
                        <Image
                            style={styles.preferences}
                            source={require('../Assets/ITALIAN.png')}
                        />
                        <Image
                            style={styles.preferences}
                            source={require('../Assets/ITALIAN.png')}
                        /><Image
                        style={styles.preferences}
                        source={require('../Assets/ITALIAN.png')}
                    />
                        <Image
                            style={styles.preferences}
                            source={require('../Assets/ITALIAN.png')}
                        />
                    </View>
                    </View>
                    <View style={styles.navigationContainer}>
                        <NavBar ></NavBar>
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
        backgroundColor: 'lightgray',
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
