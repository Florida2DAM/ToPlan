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

export class App extends Component {
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
                
            </>
        );
    };
}

const styleLogin = StyleSheet.create({
    
});

export default App;
