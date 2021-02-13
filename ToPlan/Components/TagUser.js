import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ButtonPlan from './button/ButtonPlan';

export class TagUser extends Component {
    constructor(props) {
        super(props);
    }

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
                        <View style={styleTag.containerButton}>
                            <ButtonPlan metodo={this.props.metodo} size={100} topmargin={10} title={'Logout'}/>
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
            justifyContent: 'space-around',
            alignItems: 'center',
        },
    },
);

export default TagUser;
