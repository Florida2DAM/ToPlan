import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,Image
} from 'react-native';



export class NavBar extends React.Component {
    render() {
        return (
            <ScrollView>
            <View style={styles.footerNavbar}>
                <Image
                    style={styles.icons}
                    source={require('../Assets/home.png')}
                />
                <Image
                    style={styles.icons}

                    source={require('../Assets/user.png')}
                /><Image
                style={styles.icons}

                source={require('../Assets/lupa.png')}
            />

            </View>
            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({
    footerNavbar:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor:"grey",


    },
    icons:{
        height:40,
        width:40,
    }
});
