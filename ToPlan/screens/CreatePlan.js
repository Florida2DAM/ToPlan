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
      options:[],
      type:0,
      max:'0',
      errorProvince:'',
      errorCity:'',
      errorAdress:'',
      errorType:'',
      errorMembers:'',
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

  createEvent = async () =>{
    let date = this.state.date;
    let event = {
      EventDate: date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate(),
      City: this.state.city,
      Province: this.state.province,
      Description: this.state.description,
      MaxMembers:Number.parseInt(this.state.max,10),
      Direccion:this.state.adress,
      UserId:"admin",
      TypePlanId:this.state.type,
    }
    try{
      axios
        .post("http://3.95.8.159:44360/api/Event",event)
        .then((response) => {
          alert("Insertado correctamente");
      }, (error) => {
          alert(error);
      })
      .catch(function(error) {
          alert(error);
      });
    }catch (error){
      console.log(err);
    }
  }

  checkConditions = () => {
    this.resetError();
    let aux = true;

    if (this.state.province.length <= 2){
        this.setState({errorProvince:'INSERT A VALID PROVINCE'});
        errorInputProvince.current.shake();
        aux = false;
    }
    if (this.state.city.length <= 2){
        this.setState({errorCity:'INSERT A VALID CITY'});
        errorInputCity.current.shake();
        aux = false;
    }
    if (this.state.adress.length <= 2){
        this.setState({errorAdress:'INSERT A VALID ADRESS'});
        errorInputAdress.current.shake();
        aux = false;
    }
    if(this.state.type ===0){
      this.setState({errorType:'INSERT A VALID TYPE'});
      aux = false;
    }
    if(Number.parseInt(this.state.max,10) ===0){
      this.setState({errorMembers:'INSERT A VALID NUMBER OF MEMBERS'});
      aux = false;
    }
    alert
    if(aux){
        this.createEvent();
    }

}

resetError = () => {
  this.setState({errorProvince:''});
  this.setState({errorAdress:''});
  this.setState({errorCity:''});
  this.setState({errorType:''});
  this.setState({errorMembers:''});
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
                <View>
                  {/* Hacer un componente de esto pero me saltaban errores al crearlo */}
                  <View>
                    <View style={styleCreate.planOption}>

                      <Input ref={errorInputProvince} placeholder='Province' value={this.state.province} errorStyle={{ color: 'red' }} errorMessage={this.state.errorProvince} onChangeText={(text) => this.setState({province:text})}/>
                      <Input ref={errorInputCity} placeholder='City' value={this.state.city} errorStyle={{ color: 'red' }} errorMessage={this.state.errorCity} onChangeText={(text) => this.setState({city:text})}/>
                      <Input ref={errorInputAdress} placeholder='Adress' value={this.state.adress} errorStyle={{ color: 'red' }} errorMessage={this.state.errorAdress} onChangeText={(text) => this.setState({adress:text})}/>
                    </View>

                    <View style={styleCreate.planOption}>
                      <Pressable onPress={this.showDate}>
                      <Image style={styleCreate.Icons} source={require('../Assets/clock.png')} />
                      </Pressable>
                      <Input placeholder='Date'  value={this.state.date.toDateString()}/>
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
                      <DropDownPicker
                      items={this.state.options}
                      placeholder='Chose a type'
                      containerStyle={{height: 40,width:200}}
                      onChangeItem={item=> this.setState({type:item.value})}
                      />
                    </View>
                    <Text style={styleCreate.errorType}>{this.state.errorType}</Text>
                    <View style={styleCreate.planOption}>
                      <Text style={styleCreate.members}>Max Members:</Text>
                      <TextInput
                      style={{fontSize:20,paddingRight:50}}
                      keyboardType = 'numeric'
                      onChangeText = {(text)=> this.setState({max:text})}
                      value = {this.state.max}
                      />
                    </View>
                    <Text style={styleCreate.errorMembers}>{this.state.errorMembers}</Text>
                  </View>
                  <TextInput
                  multiline={true}
                  style={styleCreate.description}
                  placeholder='Description...'
                  value={this.state.description}
                  onChangeText={(text) => this.setState({description:text})}
                  />
                </View>
              </View>
              <View>
                <ButtonPlan metodo={this.checkConditions} title={'Create Plan'}/>
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
    marginRight: 25,
    justifyContent: 'flex-start',
    textAlignVertical: "top",
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
  },
  members: {
    fontSize:20,
    paddingTop:10,
    fontWeight:'bold',
  },
  errorType:{
    textAlign:'center',
    color:'red'
  },
  errorMembers:{
    textAlign:'center',
    color:'red'
  }
});

export default CreatePlanScreen;
