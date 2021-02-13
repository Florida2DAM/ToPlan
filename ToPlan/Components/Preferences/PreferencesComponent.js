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
import DropDownPicker from "react-native-dropdown-picker";



class PreferencesComponent extends React.Component {
    constructor(props) {
        super();
        this.state= {
            preference:'',
        }
    }
    render()
    {
        return (
            <>
                <View style={{display:"flex",flexDirection:"column"}}>
                    <DropDownPicker
                        items={this.props.options}
                        placeholder='Chose a type'
                        containerStyle={{height: 40, width: '80%'}}
                        onChangeItem={item =>this.props.vueltaPreference({preference:item.label})}
                    />

                </View>
            </>
        );

    }



};
const styles = StyleSheet.create({

    logo:{
        width:50,
        height:50,
    }
})
export default PreferencesComponent;
