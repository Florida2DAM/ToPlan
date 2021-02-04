import React from 'react';
import {Button, CheckBox, Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import ExploreScreen from './ExploreScreen';
import {Linking} from "react-native";
import {ButtonPlan} from "../Components/button/ButtonPlan"


export class LoginScreen extends React.Component {
    constructor(props) {
        super();
        this.state={url:'http://google.com'}
    }
    setLink = () =>{
        const link=this.props.linkTerms;
    Linking.openURL(link.toString())

    }
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
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput style={styles.textInputs} placeholder={"E-mail"}>

                        </TextInput>

                        <Text style={styles.label}>Name</Text>
                        <TextInput style={styles.textInputs} placeholder={"Name"}>

                        </TextInput>
                        <Text style={styles.label}>Surname</Text>
                        <TextInput style={styles.textInputs} placeholder={"UserName"}>

                        </TextInput>
                        <Text style={styles.label}>Date</Text>
                        <TextInput style={styles.textInputs} placeholder={"Birth Date"}>

                        </TextInput>
                        <Text style={styles.label}>Password</Text>
                        <TextInput style={styles.textInputs} placeholder={"Password"}>



                        </TextInput>
                        <Text style={styles.label}>ConfirmPassword</Text>
                        <TextInput style={styles.textInputs} placeholder={"Password"}>



                        </TextInput>
                        <View style={styles.containerCheckBox} >
                            <CheckBox>

                            </CheckBox>
                            <Text style={{color: 'blue',marginTop:8
                            } }
                                  onPress={() => Linking.openURL('http://google.com')}>
                                Aceptar Terminos y Condiciones
                            </Text>
                        </View>







                    </View>
                    <View style={styles.containerCheckBox}>
                        <ButtonPlan title={"Sign Up"} color={"orange"} style={styles.button} ></ButtonPlan>

                    </View>

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
    containerCheckBox:{
    display:"flex",
    flexDirection: "row",
    justifyContent:"space-around",
        marginTop:8
    },
    containerInfo:{
        alignSelf:"center",
        padding:20

    },
    containerButton:{
        display:"flex",
        flexDirection: "row",
        justifyContent:"center",


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
export default LoginScreen;
