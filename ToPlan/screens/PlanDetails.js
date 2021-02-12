import React, { Component } from 'react';
import {
  TextInput,
  Image,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  ActivityIndicatorComponent,
} from 'react-native';
import { Text } from 'react-native-elements';
import { NavBar } from '../Components/navBar/NavBar';
import ButtonPlan from '../Components/button/ButtonPlan';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PlanPeople from '../Components/planPeople/PlanPeople';
import axios from 'axios';

const urlEventsData = 'http://3.95.8.159:44360/api/Event4?id=';
const urlCheck = ' http://3.95.8.159:44360/api/Event/CheckUser?id=';
const urlAddUser = 'http://3.95.8.159:44360/api/Event/AddUser?id=';
const urlRemoveUser = 'http://3.95.8.159:44360/api/Event/RemoveUser?id=';



export class PlanDetailsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PlanObject: {},
      IdEvent: 1,
      IdUser: 'admin',
      messageBtn: '',
      visibilityBtnConfirm:'flex',
      visibilityBtnDeny:'none'
    }
  };

  componentDidMount = () => {
    this.getPlanData();
    this.getCheck();
  }

  getPlanData = () => {
    try {
      axios
        .get(urlEventsData + this.state.IdEvent)
        .then(response => {
          if (response.data === null || response.data.length === 0) {
            alert('error de conexion');
          } else {
            this.setState({ PlanObject: response.data });
          }
        })
        .catch(function (error) {
          alert(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  addUser = () =>{
    try{
        axios
        .put(urlAddUser+this.state.IdEvent+'&n='+this.state.IdUser)
        .then(this.setState({visibilityBtnConfirm:'none'}))
        .then(this.setState({visibilityBtnDeny:'flex'}))
        .then(this.setState({messageBtn:'Deny assistance'}))
        .then(this.getPlanData)
    }catch(e){
      console.log(e);
    }
  }

  RemoveUser = () =>{
    try{
        axios
        .put(urlRemoveUser+this.state.IdEvent+'&n='+this.state.IdUser)
        .then(this.setState({visibilityBtnConfirm:'flex'}))
        .then(this.setState({visibilityBtnDeny:'none'}))
        .then(this.setState({messageBtn:'Confirm assistance'}))
        .then(this.getPlanData)
    }catch(e){
      console.log(e);
    }
  }

  getCheck = async () =>{
    try{
        axios.get(urlCheck+this.state.IdEvent+'&n='+this.state.IdUser)
        .then(response =>{
            this.setState({aux:response.data});
            if(this.state.aux){
              this.setState({visibilityBtnDeny:'flex'});
              this.setState({visibilityBtnConfirm:'none'});
            }else{
              this.setState({visibilityBtnDeny:'none'});
              this.setState({visibilityBtnConfirm:'flex'});
            }
        })
    }catch (error){
      console.log(error);
    }
  }



  render() {
    return (
      <>
        <ScrollView>
          <View>
            <View style={styleDetails.loginContainer}>
              <View style={styleDetails.logoContainer}>
                <View style={styleDetails.logoSubContainer}>
                  <Image style={styleDetails.logo} source={require('../Assets/LogoSimple.png')} />
                </View>
                <View style={styleDetails.separador}>
                  <Text h3>PLAN DETAILS</Text>
                </View>
              </View>
              <View>
                <View style={[styleDetails.inputContainer, styleDetails.shadow]}>
                  <View style={styleDetails.menuContainer}>
                    <Text style={{ fontSize: 16 }}>{this.state.PlanObject.Description}</Text>
                  </View>
                  <View>
                    <View>
                      <View style={styleDetails.planOption}>
                        <Image style={styleDetails.Icons} source={require('../Assets/location.png')} />
                        <Text style={styleDetails.inputPanels}>{this.state.PlanObject.Direction}</Text>
                      </View>
                      <View style={styleDetails.planOption}>
                        <Image style={styleDetails.Icons} source={require('../Assets/clock.png')} />
                        <Text style={styleDetails.inputPanels}>{this.state.PlanObject.EventDate}</Text>
                      </View>
                      <View style={styleDetails.planOption}>
                        <Image style={styleDetails.Icons} source={require('../Assets/cine.png')} />
                        <Text style={styleDetails.inputPanels}>{this.state.PlanObject.Type}</Text>
                      </View>
                    </View>
                    <View style={styleDetails.separador}>
                      <Text h4>PLAN PEOPLE</Text>
                    </View>
                    <View>
                      {/* Aqui los componentes de las personas en una flatlist primero hacer pruebas*/}
                      <View style={styleDetails.planOption}>
                        <ScrollView>
                          <FlatList
                            data={this.state.PlanObject.Lista}
                            keyExtractor={(item, index) => index.toString()}
                            style={{ padding: 2, width: 500 }}
                            renderItem={({ item }) => (<PlanPeople element={item} />)}>
                          </FlatList>
                        </ScrollView>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styleDetails.confirmBtn, styleDetails.shadow, {display:this.state.visibilityBtnConfirm}]}>
                  <ButtonPlan metodo={this.addUser} title="Confirm Assistence"/>
                </View>
                <View style={[styleDetails.confirmBtn, styleDetails.shadow, {display:this.state.visibilityBtnDeny}]}>
                  <ButtonPlan metodo={this.RemoveUser} title="Deny Assistence"/>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styleDetails.navContainer}>
          <NavBar></NavBar>
        </View>
      </>
    );
  };
}

const styleDetails = StyleSheet.create({
  loginContainer: {
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
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    margin: 25,
    borderRadius: 5
  },
  Title: {
    flex: 5,
    backgroundColor: 'white',
    marginLeft: 25,
    marginRight: 25,
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
    margin: 25,

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
    backgroundColor: 'white',
    textAlignVertical: 'center'
  },
  planOption: {
    flexDirection: 'row',
    marginLeft: 55,
    marginRight: 25,
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  confirmBtn: {
    marginBottom: 25,
    marginLeft: 25,
    marginRight: 25
  },
  peopleImg: {
    height: 40,
    width: 40
  },
  peopleText: {
    height: 40,
    width: 200,
    backgroundColor: 'white',
    textAlignVertical: 'center',
  },
});

export default PlanDetailsScreen;
