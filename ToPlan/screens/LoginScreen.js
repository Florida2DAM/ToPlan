import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,Image,TextInput,Button
} from 'react-native';
import {EventMiddle} from "../Components/eventMiddle/EventMiddle";
import {NavBar} from "../Components/navBar/NavBar";


export class LoginScreen extends React.Component {
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
                    <View style={styles.containerInfo}>
                        <Image
                            style={styles.userLogo}
                            source={require('../Assets/user.png')}
                        />
                        <Text style={styles.label}>UserName</Text>
                        <TextInput style={styles.textInputs} placeholder={"UserName"}>

                        </TextInput>
                        <Text style={styles.label}>Password</Text>
                        <TextInput style={styles.textInputs} placeholder={"Password"}>

                        </TextInput>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput style={styles.textInputs} placeholder={"E-mail"}>

                        </TextInput>
                        <Text style={styles.label}>Name</Text>
                        <TextInput style={styles.textInputs} placeholder={"Name"}>

                        </TextInput>



                    </View>
                    <Button title={"Sign Up"} color={"orange"}></Button>

                </View>
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

        marginTop:20,
        marginLeft:20
    },
    containerInfo:{
        alignSelf:"center",
        padding:20

    },
    mainLogo:{
        width: 56,
        height: 65,
    },
    userLogo:{
        width: 150,
        height: 150,
        alignSelf:"center"
    },
    textInputs:{
       borderWidth:1,
        borderColor:"black",
        borderRadius:7,
        width:320,
        marginTop:10
    },
    label:{
        fontSize:20,
        fontFamily:"Aeonik",
        marginTop:20
    },


});
