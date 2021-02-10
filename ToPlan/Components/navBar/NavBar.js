import 'react-native-gesture-handler';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Image, Pressable,
} from 'react-native';



export class NavBar extends React.Component {
    render() {
        return (
            <View style={styles.footerNavbar}>
                <Pressable onPress={this.props.create}>
                    <Image
                    style={styles.icons}
                    source={require('../../Assets/plus.png')}/>
                </Pressable>
                <Pressable onPress={this.props.user}>
                    <Image
                        style={styles.icons}
                        source={require('../../Assets/user.png')}/>
                </Pressable>
                <Pressable onPress={this.props.find}>
                    <Image
                        style={styles.icons}
                        source={require('../../Assets/lupa.png')}/>
                </Pressable>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    footerNavbar:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor:"white",


    },
    icons:{
        height:40,
        width:40,
    }
});
