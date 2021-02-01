import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,Image
} from 'react-native';
import {EventMiddle} from "./EventMiddle";
import {NavBar} from "./NavBar";


export class UserScreen extends React.Component {
    render() {
        return (
            <ScrollView>
            <View style={styles.mainContainer}>
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
                        <Text style={{fontSize:23}}>test test,34</Text>
                        <Text style={{fontSize:18}}>test test,34</Text>
                        <Text style={{fontSize:18}}>test test,34</Text>
                        <Text style={{fontSize:18}}>test test,34</Text>

                    </View>


                </View>
                <EventMiddle></EventMiddle>
                <EventMiddle></EventMiddle>
                <Text style={{padding:20,fontSize:20}}>Plan Preferences</Text>
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
                <NavBar styles={{justifyContent:"flex-end"}}></NavBar>
            </ScrollView>


    )
    }

}
const styles = StyleSheet.create({
mainContainer:{
    display:"flex",
    flexDirection:"column",

},
containerLogo:{
    display: "flex",
    flexDirection:"row",
    justifyContent:"center",
    marginTop:20
},
mainLogo:{
    width: 56,
    height: 65,
},
userLogo:{
    width: 130,
    height:130,
},
preferences:{
    width: 60,
    height:60,
    marginLeft:20
},
containerUser:{
  backgroundColor:"lightgray",
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-around",
    padding:10,
    marginTop: 50,
    height:150

},
    containerInfo:{
        display:"flex",
        flexDirection:"column",
        padding:10

    },
containerPreferences:{
    display:"flex",
    flexDirection:"row",
}
});
