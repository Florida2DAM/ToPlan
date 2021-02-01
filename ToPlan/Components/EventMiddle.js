import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,Image
} from 'react-native';

export class EventMiddle extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.leftInfo}>
                    <View style={styles.place}>
                        <Image
                            style={styles.Icons}
                            source={require('../Assets/location.png')}
                        />
                        <Text>Test</Text>

                    </View>
                    <View style={styles.place}>
                        <Image
                            style={styles.Icons}
                            source={require('../Assets/clock.png')}
                        />
                        <Text>Test</Text>

                    </View>
                </View>
                <View style={styles.middleInfo}>

                        <Text>Test</Text>
                        <Image
                            style={styles.userLogo}
                            source={require('../Assets/user.png')}
                        />




                </View>
                <View style={styles.rigthInfo}>
                    <View style={styles.place}>

                        <Text >Test</Text>
                        <Image
                            style={styles.Icons}
                            source={require('../Assets/tenis.png')}
                        />

                    </View>
                    <View style={styles.place}>

                        <Text>Test</Text>
                        <Image
                            style={styles.Icons}
                            source={require('../Assets/tenis.png')}
                        />

                    </View>

                </View>

            </View>
        )
    }

}
const styles = StyleSheet.create({
    mainContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor:"orange",
        marginLeft:15,
        marginRight:15,
        marginTop:15,
        borderRadius:15,
        padding:8
    },
    leftInfo:{
        display: "flex",
        flexDirection:"column",
    },middleInfo:{
        display: "flex",
        justifyContent:"center",

        flexDirection:"column",

    },
    rigthInfo:{
        display: "flex",
        flexDirection:"column",
    },Icons:{
        height:30,
        width:30
    },userLogo:{
        height:50,
        width:50
    },

    place:{
        padding: 8,
        display:"flex",
        flexDirection:"row"
    }

});
