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


export class CreatePlanScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      date: '',
      activity: '',
      description: '',
    }

  }

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
                      <TextInput
                        style={styleCreate.inputPanels}
                      />
                    </View>
                    <View style={styleCreate.planOption}>
                      <Image style={styleCreate.Icons} source={require('../Assets/clock.png')} />
                      <TextInput
                        style={styleCreate.inputPanels}
                      />
                    </View>
                    <View style={styleCreate.planOption}>
                      <Image style={styleCreate.Icons} source={require('../Assets/tenis.png')} />
                      <TextInput
                        style={styleCreate.inputPanels}
                      />
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
