import React, { Component } from 'react';
import {
  TextInput,
  Image,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import { Text } from 'react-native-elements';
import { NavBar } from '../Components/navBar/NavBar';
import ButtonPlan from '../Components/button/ButtonPlan';


export class PlanDetailsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planTitle: "Cinema",
      planDescription: "The idea is to go see the movie before dinner, to be able to eat popcorn! \nThe movie that we are going to see will be 'Godzilla vs Kong' , at the moment we are all Team Godzilla but there is room for someone Team Kong",
      planLocation: "Av de la Vital, 10, Valencia",
      planTime: "14/02/21",
      planSubtype: "Cines",

    }

    getPlanDescription = async () => {
      try {
          axios
              .get(urlEventsBySport)
              .then(response => {
                  if (response.data === null || response.data.length === 0) {
                      alert('error de conexion');
                  }else {
                      this.setState({sports: response.data});
                  }
              })
              .catch(function(error) {
                  alert(error);
              });
      } catch (error) {
          console.log(err);
      }
  };


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
                    <Text style={{ fontSize: 16 }}>{this.state.planDescription}</Text>
                  </View>
                  <View>
                    <View>
                      <View style={styleDetails.planOption}>
                        <Image style={styleDetails.Icons} source={require('../Assets/location.png')} />
                        <Text style={styleDetails.inputPanels}>{this.state.planLocation}</Text>
                      </View>
                      <View style={styleDetails.planOption}>
                        <Image style={styleDetails.Icons} source={require('../Assets/clock.png')} />
                        <Text style={styleDetails.inputPanels}>{this.state.planTime}</Text>
                      </View>
                      <View style={styleDetails.planOption}>
                        <Image style={styleDetails.Icons} source={require('../Assets/cine.png')} />
                        <Text style={styleDetails.inputPanels}>{this.state.planSubtype}</Text>
                      </View>
                    </View>
                    <View style={styleDetails.separador}>
                      <Text h4>PLAN PEOPLE</Text>
                    </View>
                    <View>
                      {/* Aqui los componentes de las personas en una flatlist primero hacer pruebas*/}
                      <View>
                        <View style={styleDetails.planOption}>
                          <Image style={styleDetails.peopleImg} source={require('../Assets/user.png')} />
                          <Text style={styleDetails.peopleText}>Adrián Pérez</Text>
                        </View>
                        <View style={styleDetails.planOption}>
                          <Image style={styleDetails.peopleImg} source={require('../Assets/user.png')} />
                          <Text style={styleDetails.peopleText}>Rafa Olaya</Text>
                        </View>
                        <View style={styleDetails.planOption}>
                          <Image style={styleDetails.peopleImg} source={require('../Assets/user.png')} />
                          <Text style={styleDetails.peopleText}>Jordi Cervera</Text>
                        </View>

                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styleDetails.confirmBtn, styleDetails.shadow]}>
                  <ButtonPlan metodo={this.loginCheck} title={'Confirm assistance'} />
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
