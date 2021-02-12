import React, {Component} from 'react';
import {
    TextInput,
    Image,
    StyleSheet,
    View,
    ScrollView,
    Pressable,
} from 'react-native';
import {Text, Input} from 'react-native-elements';
import {NavBar} from '../Components/navBar/NavBar';
import ButtonPlan from '../Components/button/ButtonPlan';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const urlTypes = 'http://3.95.8.159:44360/api/TypePlan/ListDTO';
const errorInputProvince = React.createRef();
const errorInputCity = React.createRef();
const errorInputAdress = React.createRef();

export class CreatePlanScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            province: '',
            adress: '',
            date: new Date(Date.now()),
            activity: '',
            description: '',
            visibleDataTimePicker: false,
            options: [],
            type: 0,
            max: '',
            errorProvince: '',
            errorCity: '',
            errorAdress: '',
            errorType: '',
            errorMembers: '',
        };

    }

    showDate = () => {
        this.setState({visibleDataTimePicker: true});
    };
    dateSelect = (e, dataNova) => {
        this.setState({visibleDataTimePicker: false});
        if (e.type === 'set') {
            this.setState({date: new Date(dataNova)});
        }
    };

    getTypes = async () => {
        try {
            axios
                .get(urlTypes)
                .then(response => {
                    if (response.data === null || response.data.length === 0) {
                        alert('error de conexion');
                    } else {
                        this.setState({options: response.data});
                    }
                });

        } catch (error) {
            console.log(err);
        }
    };

    createEvent = async () => {
        let date = this.state.date;
        let event = {
            EventDate: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
            City: this.state.city,
            Province: this.state.province,
            Description: this.state.description,
            MaxMembers: Number.parseInt(this.state.max, 10),
            Direccion: this.state.adress,
            UserId: 'admin',
            TypePlanId: this.state.type,
        };
        try {
            axios
                .post('http://3.95.8.159:44360/api/Event', event)
                .then((response) => {
                    alert('Insertado correctamente');
                }, (error) => {
                    alert(error);
                })
                .catch(function (error) {
                    alert(error);
                });
        } catch (error) {
            console.log(err);
        }
    };

    checkConditions = () => {
        this.resetError();
        let aux = true;

        if (this.state.province.length <= 2) {
            this.setState({errorProvince: 'INSERT A VALID PROVINCE'});
            errorInputProvince.current.shake();
            aux = false;
        }
        if (this.state.city.length <= 2) {
            this.setState({errorCity: 'INSERT A VALID CITY'});
            errorInputCity.current.shake();
            aux = false;
        }
        if (this.state.adress.length <= 2) {
            this.setState({errorAdress: 'INSERT A VALID ADRESS'});
            errorInputAdress.current.shake();
            aux = false;
        }
        if (this.state.type === 0) {
            this.setState({errorType: 'INSERT A VALID TYPE'});
            aux = false;
        }
        if (Number.parseInt(this.state.max, 10) === 0) {
            this.setState({errorMembers: 'INSERT A VALID NUMBER OF MEMBERS'});
            aux = false;
        }
        alert;
        if (aux) {
            this.createEvent();
        }

    };

    resetError = () => {
        this.setState({errorProvince: ''});
        this.setState({errorAdress: ''});
        this.setState({errorCity: ''});
        this.setState({errorType: ''});
        this.setState({errorMembers: ''});
    };

    componentDidMount = () => {
        this.getTypes(urlTypes);
    };

    render() {
        return (
            <>
                <View style={styleCreate.createContainer}>
                    <View style={styleCreate.logoContainer}>
                        <View style={styleCreate.logoSubContainer}>
                            <Image style={styleCreate.logo} source={require('../Assets/LogoSimple.png')}/>
                        </View>
                        <View style={styleCreate.separador}>
                            <Text h3>CREATE PLAN</Text>
                        </View>
                    </View>
                    <View style={styleCreate.textContainer}>
                        <View style={[styleCreate.inputContainer, styleCreate.shadow]}>

                            <View style={styleCreate.planOption}>
                                <ScrollView>

                                    <Input ref={errorInputProvince} style={styleCreate.Input} placeholder='Province'
                                           value={this.state.province} errorStyle={{color: 'red'}}
                                           errorMessage={this.state.errorProvince}
                                           onChangeText={(text) => this.setState({province: text})}
                                           leftIcon={<Icon name='globe' size={24} color='black'/>}/>
                                    <Input ref={errorInputCity} placeholder='City' value={this.state.city}
                                           errorStyle={{color: 'red'}} errorMessage={this.state.errorCity}
                                           onChangeText={(text) => this.setState({city: text})}
                                           leftIcon={<Icon name='building' size={24} color='black'/>}/>
                                    <Input ref={errorInputAdress} placeholder='Adress' value={this.state.adress}
                                           errorStyle={{color: 'red'}} errorMessage={this.state.errorAdress}
                                           onChangeText={(text) => this.setState({adress: text})}
                                           leftIcon={<Icon name='location-arrow' size={24} color='black'/>}/>

                                    <Input placeholder='Date' value={this.state.date.toDateString()} disabled={true} leftIcon={<Pressable onPress={this.showDate}><Icon name='calendar' size={24} color='black'/></Pressable>}/>
                                    {this.state.visibleDataTimePicker === true ? (
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            value={this.state.date}
                                            mode='date'
                                            display="default"
                                            onChange={this.dateSelect}
                                        />) : null
                                    }
                                    <DropDownPicker
                                        items={this.state.options}
                                        placeholder='Chose a type'
                                        containerStyle={{height: 40, width: '100%'}}
                                        onChangeItem={item => this.setState({type: item.value})}
                                    />
                                    <Text style={styleCreate.errorType}>{this.state.errorType}</Text>
                                    <View style={styleCreate.maxMembers}>
                                        <Text style={styleCreate.members}>Max Members:</Text>
                                        <TextInput
                                            style={{fontSize: 20, paddingRight: 50}}
                                            placeholder={'Max'}
                                            keyboardType='numeric'
                                            onChangeText={(text) => this.setState({max: text})}
                                            value={this.state.max}
                                        />
                                        <Text style={styleCreate.errorMembers}>{this.state.errorMembers}</Text>
                                    </View>
                                    <TextInput
                                        multiline={true}
                                        style={styleCreate.textInputDescription}
                                        placeholder='Description...'
                                        value={this.state.description}
                                        onChangeText={(text) => this.setState({description: text})}/>
                                </ScrollView>
                            </View>
                        </View>

                    </View>
                    <View style={styleCreate.navContainer}><ButtonPlan metodo={this.checkConditions}
                                                                       title={'Create Plan'}/><NavBar/>
                    </View>
                </View>
            </>
        );
    };
}

const styleCreate = StyleSheet.create({
    createContainer: {
        backgroundColor: 'white',
        flex: 1,
    },
    logoContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    logoSubContainer: {
        flex: 1,
    },
    separador: {
        alignItems: 'center',
        flex: 2,
    },
    navContainer: {
        flex: 0,
    },
    logo: {
        resizeMode: 'stretch',
        width: 100,
        height: 100,
        margin: 25,
    },
    menuContainer: {
        flexDirection: 'row',
        margin: 25,

    },


    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    textInputDescription: {
        height: 130,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',

        marginTop: 10,
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
    },

    planOption: {
        flexDirection: 'column',
        width: '100%',
    },

    errorType: {
        textAlign: 'center',
        color: 'red',
    },
    inputContainer: {
        alignItems: 'center',
        backgroundColor: '#ffcc57',
        padding: 10,
        borderRadius: 5,
    },
    errorMembers: {
        textAlign: 'center',
        color: 'red',
    },
    maxMembers: {
        display: 'flex',
        flexDirection: 'row',
    },
    members: {
        fontSize: 20,
        paddingTop: 10,
        fontWeight: 'bold',
    },
    textContainer: {
        padding: 25,
        display: 'flex',
        flex: 4,
    },


});

export default CreatePlanScreen;
