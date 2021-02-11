import React, { Component } from 'react';
import {
  TextInput,
  Image,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
} from 'react-native';
import { Text,Input } from 'react-native-elements';
import { NavBar } from '../Components/navBar/NavBar';
import ButtonPlan from '../Components/button/ButtonPlan';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

const urlTypes = 'http://3.95.8.159:44360/api/TypePlan/List';

export class CreatePlanScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      adress: '',
      date: new Date(Date.now()),
      activity: '',
      description: '',
      visibleDataTimePicker: false,
      options:[],
    }

  }
  showDate = () => {
    this.setState({ visibleDataTimePicker: true });
  };
  dateSelect = (e, dataNova) => {
    this.setState({visibleDataTimePicker:false})
    if (e.type === 'set') {
        this.setState({date:new Date(dataNova)});
    }
  };

  getTypes = async () =>{
    try{
      axios 
        .get(urlTypes)
        .then(response => {
          if (response.data === null || response.data.length === 0) {
            alert('error de conexion');
        }else {
            this.setState({options: response.data});
        }
        })

    }catch (error){
      console.log(err);
    }
  }

  componentDidMount = () => {
    this.getTypes(urlTypes)
  };

  render() {
    return (
      <>
        <View style={styleCreate.createContainer}>
          <View style={styleCreate.logoContainer}>
            <View style={styleCreate.logoSubContainer}>
              <Image style={styleCreate.logo} source={require('../Assets/LogoSimple.png')} />
            </View>
            <View style={styleCreate.separador}>
              <Text h3>CREATE PLAN</Text>
            </View>
          </View>
          <View>
            <ScrollView>
              <View style={[styleCreate.inputContainer, styleCreate.shadow]}>
                <View style={styleCreate.menuContainer}>
                  <View style={styleCreate.menuSeparator}><Image style={[styleCreate.Icons, styleCreate.TopIcons]} source={require('../Assets/FORK.png')} /></View>
                  <View style={styleCreate.menuSeparator}><Image style={[styleCreate.Icons, styleCreate.TopIcons]} source={require('../Assets/tenis.png')} /></View>
                  <View style={styleCreate.menuSeparator}><Image style={[styleCreate.Icons, styleCreate.TopIcons]} source={require('../Assets/ocio.png')} /></View>
                </View>
                <View>
                  {/* Hacer un componente de esto pero me saltaban errores al crearlo */}
                  <View>
                    <View style={styleCreate.planOption}>
                      <Image style={styleCreate.Icons} source={require('../Assets/location.png')} />
                      <Input placeholder='Location' value={this.state.location} onChangeText={(text) => this.setState({location:text})}/>
                    </View>
                    <View style={styleCreate.planOption}>
                      <Image style={styleCreate.Icons} source={require('../Assets/location.png')} />
                      <Input placeholder='Adress' value={this.state.adress} onChangeText={(text) => this.setState({adress:text})}/>
                    </View>
                    <View style={styleCreate.planOption}>
                      <Pressable onPress={this.showDate}>
                      <Image style={styleCreate.Icons} source={require('../Assets/clock.png')} />
                      </Pressable>
                      <Input placeholder='Date' value={this.state.date.toDateString()}/>
                        {this.state.visibleDataTimePicker=== true ? (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={this.state.date}
                                mode='date'
                                display="default"
                                onChange={this.dateSelect}
                            />):null
                        }
                    </View>
                    <View style={styleCreate.planOption}>
                      <Image style={styleCreate.Icons} source={require('../Assets/tenis.png')} />
                    </View>
                  </View>
                  <TextInput style={styleCreate.description} />
                </View>
                <View>
                  <ButtonPlan metodo={this.loginCheck} title={'Create Plan'} />
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styleCreate.navContainer}><NavBar></NavBar></View>
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

  inputContainer: {
    flex: 5,
    backgroundColor: '#ffcc57',
    margin: 25,
    borderRadius: 5
  },
  navContainer: {
    flex: 0,
  },
  logo: {
    resizeMode: 'stretch',
    width: 100,
    height: 100,
    margin: 25
  },
  menuContainer: {
    flexDirection: 'row',
    margin: 25

  },
  menuSeparator: {
    alignItems: 'center',
    flex: 1,
    margin: 10
  },
  Icons: {
    height: 40,
    width: 40
  },
  TopIcons: {
    backgroundColor: 'white',
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  description: {
    height: 130,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    marginLeft: 25,
    marginTop: 10,
    marginRight: 25
  },
  inputPanels: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white'
  },
  planOption: {
    flexDirection: 'row',
    marginLeft: 55,
    marginRight: 25,
    marginBottom: 10,
    justifyContent: 'space-between'
  }
});

export default CreatePlanScreen;
