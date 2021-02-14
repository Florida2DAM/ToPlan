import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ButtonPlan from './button/ButtonPlan';
import DropDownPicker from "react-native-dropdown-picker";
import PreferencesComponent from './Preferences/PreferencesComponent';
import axios from 'axios';
const ip = '100.24.72.24';
const urlUpdatePreferences = 'http://' + ip + ':44360/api/User/Preferences?id='

export class TagUser extends Component {
    constructor(props) {
        super(props);
        this.state ={
            preferenceSelected:'',
        }
    }
    getPreference=({preference}) => {
        this.setState({preferenceSelected:preference})
    }
    addPreference = () => {
        alert(this.state.preferenceSelected);

        try {
            axios.put(urlUpdatePreferences+this.props.email+'&p='+this.state.preferenceSelected )
                .then((response) => {
                    if (response.data){
                        alert("Preference added");
                    }else {
                        alert('error');
                    }

                }, (error) => {
                    alert(error);
                })
                .catch(function(error) {
                    alert(error);
                });
        } catch (error) {
            /*console.log(err);*/
        }

    };


    render() {
        let user = this.props.user;
        return (
            <>
                <View style={styleTag.container}>
                    <View style={styleTag.containerLogo}>
                        <Image
                            style={styleTag.userLogo}
                            source={require('../Assets/user.png')}/>
                    </View>
                    <View style={styleTag.containerInfo}>
                        <Text style={{fontSize: 20}}>{user.Name}</Text>
                        <Text style={{fontSize: 18}}>{user.Email}</Text>
                        <Text style={{fontSize: 18}}>{user.FechaNacimiento}</Text>
                        <Text style={{fontSize: 18}}>{user.Preferences}</Text>
                        <PreferencesComponent vueltaPreference={this.getPreference} options={this.props.options}/>
                        <View style={styleTag.containerButton}>
                            <ButtonPlan metodo={this.props.metodo} size={100} topmargin={10} title={'Logout'}/>
                            <ButtonPlan metodo={this.addPreference} size={130} topmargin={10} title={'Add Preference'}/>

                        </View>
                    </View>
                </View>
            </>
        );
    }
}

const styleTag = StyleSheet.create({
        container: {
            backgroundColor: '#dddbdc',
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
        },
        containerLogo: {
            display: 'flex',
            flex: 1,
        },
        userLogo: {
            width: 100,
            height: 100,
            marginTop: 20,
        },
        containerInfo: {
            display: 'flex',
            flex: 2,
            flexDirection: 'column',
        },
        containerButton: {
            display:'flex',
            flexDirection:'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
    },
);

export default TagUser;
