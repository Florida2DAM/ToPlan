import React from 'react';
import {
    Linking,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Pressable, Alert,
} from 'react-native';
import {CheckBox, Input} from 'react-native-elements';
import {ButtonPlan} from "../Components/button/ButtonPlan"
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
const errorInputEmail = React.createRef();
const errorInputName = React.createRef();
const errorInputSurname = React.createRef();
const errorInputPassword = React.createRef();


export class RegisterScreen extends React.Component {
    constructor(props) {
        super();
        this.state={
            url:'http://google.com',
            errorEmail:'',
            errorName:'',
            errorSurname:'',
            errorPassword:'',
            checked:false,
            visibleDataTimePicker: false,
            email:'',
            name:'',
            surname:'',
            date: new Date(Date.now()),
            password:'',
            confirmPassword:'',
        }
    }
    setLink = () =>{
        const link=this.props.linkTerms;
    Linking.openURL(link.toString())

    }

    postUser = async () => {
        let date = this.state.date;
        let birthDate = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
        let user = {
            UserId: this.state.email,
            Name: this.state.name,
            Surname: this.state.surname,
            Password: this.state.password,
            FechaNacimiento: birthDate,
        };

            try {
                axios.post('http://3.95.8.159:44360/api/User/WithoutPreferences', user)
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
    checkConditions = () => {
        this.resetError();

        if (this.state.email.length <= 2){
            this.setState({errorEmail:'INSERT A VALID EMAIL'});
            errorInputEmail.current.shake();
        }
        else if (this.state.name.length <= 2){
            this.setState({errorName:'INSERT A VALID NAME'});
            errorInputName.current.shake();
        }
        else if (this.state.surname.length <= 2){
            this.setState({errorSurname:'INSERT A VALID SURNAME'});
            errorInputSurname.current.shake();
        }
        else if (this.state.password.length <= 8 || this.state.password.length >= 13){
            this.setState({errorPassword:'PASSWORD 8-12 CHARACTERS'});
            errorInputPassword.current.shake();
        }
        else if (!this.state.checked){
            alert('Debes aceptar los terminos y condiciones');
        }
        else if (this.state.password !== this.state.confirmPassword){
            this.setState({errorPassword:'PASSWORD NOT EQUALS'});
            errorInputPassword.current.shake();
        }else{
            this.postUser();
        }

    }
    resetError = () => {
        this.setState({errorEmail:''});
        this.setState({errorName:''});
        this.setState({errorSurname:''});
        this.setState({errorPassword:''});
    }


    dateSelect = (e, dataNova) => {
        this.setState({visibleDataTimePicker:false})
        if (e.type === 'set') {
            this.setState({date:new Date(dataNova)});
        }
    }
    showDate = () => {
        this.setState({ visibleDataTimePicker: true });
    };

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

                        <Input ref={errorInputEmail} placeholder='Email' value={this.state.email} errorStyle={{ color: 'red' }} errorMessage={this.state.errorEmail} onChangeText={(text) => this.setState({email:text})}  leftIcon={<Icon name='envelope' size={24} color='black'/>}/>
                        <Input ref={errorInputName} placeholder='Name' value={this.state.name} errorStyle={{ color: 'red' }} errorMessage={this.state.errorName} onChangeText={(text) => this.setState({name:text})} leftIcon={<Icon name='user' size={24} color='black'/>}/>
                        <Input ref={errorInputSurname} placeholder='Surname' value={this.state.surname} errorStyle={{ color: 'red' }}  errorMessage={this.state.errorSurname} onChangeText={(text) => this.setState({surname:text})} leftIcon={<Icon name='user' size={24} color='black'/>}/>
                        <Input placeholder='Date' value={this.state.date.toDateString()} leftIcon={<Pressable onPress={this.showDate}><Icon name='calendar' size={24} color='black'/></Pressable>}/>
                        {this.state.visibleDataTimePicker=== true ? (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={this.state.date}
                                mode='date'
                                display="default"
                                onChange={this.dateSelect}
                            />):null
                        }

                        <Input ref={errorInputPassword} placeholder='Password' value={this.state.password} errorStyle={{ color: 'red' }} errorMessage={this.state.errorPassword} onChangeText={(text) => this.setState({password:text})} secureTextEntry={true}
                               leftIcon={<Icon name='lock' size={24} color='black'/>}/>
                        <Input ref={errorInputPassword} placeholder='Confirm Password' value={this.state.confirmPassword} errorStyle={{ color: 'red' }} errorMessage={this.state.errorPassword} onChangeText={(text) => this.setState({confirmPassword:text})} secureTextEntry={true}
                               leftIcon={<Icon name='lock' size={24} color='black'/>}/>
                        <View style={styles.containerCheckBox}>
                            <CheckBox checked={this.state.checked}
                                      onPress={() => this.setState({checked: !this.state.checked})}/>
                            <Text style={{color: 'blue',marginTop:8}} onPress={() => Linking.openURL('http://google.com')}>Aceptar Terminos y Condiciones</Text>
                        </View>
                    </View>
                        <ButtonPlan metodo={this.checkConditions} title={'Sign Up'} color={'orange'} style={styles.button} />
                </View>
            </ScrollView>


        )
    }

}
const styles = StyleSheet.create({

    mainContainer:{
        display:"flex",
        flex:1,
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
        marginTop:8,
        alignItems:'center',
    },
    checkBox: {
        display:'flex',
        alignItems:'center',
    },
    containerInfo:{
        padding:20,
        alignItems:'center',

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
export default RegisterScreen;
