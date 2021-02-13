/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
} from 'react-native';
import axios from 'axios';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";



class PreferencesComponent extends React.Component {
    constructor(props) {
        super();
        this.state={
            opacityCinema:.2,
            opacityOcio:.2,
            opacityPark:.2,
            opacityMuseum:.2,
            preferences: '',

            pressedCinema:false,
            pressedMuseum:false,
            pressedSport:false,
            pressedFood:false,


            changedOpacity:false
        }
        this.updatePreferences=this.updatePreferences.bind(this)
    }
    render()
    {
        const user=[this.props.user]

        return (
            <>
                <View style={{display:"flex",flexDirection:"column"}}>
                    
                </View>
            </>
        );

    }
    updatePreferences = () => {

        let date = this.user.date;
        let birthDate = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
        let user = {
            UserId: this.user.Email,
            Name: this.user.Name,
            Surname: this.user.Surname,
            Password: this.user.Password,
            FechaNacimiento: this.user.FechaNacimiento,
            Preferences: this.state.preferences,
        };

        try {
            axios.post('http://3.95.8.159:44360/api/User', user)
                .then((response) => {
                    alert("Insertado correctamente");
                }, (error) => {
                    alert(error);
                })
                .catch(function(error) {
                    alert(error);
                });
        } catch (error) {
            /*console.log(err);*/
        }
    }


};
const styles = StyleSheet.create({

    logo:{
        width:50,
        height:50,
    }
})
export default PreferencesComponent;
