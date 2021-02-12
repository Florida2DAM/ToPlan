import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
// Imports de pantallas.
import InicioScreen from './screens/inicioScreen';
import LoginScreen from './screens/LoginScreen';
import ExploreScreen from './screens/ExploreScreen';
import UserScreen from './screens/UserScreen';
import RegisterScreen from './screens/RegisterScreen';
import CreatePlanScreen from './screens/CreatePlan';
import PlanDetailsScreen from './screens/PlanDetails';

const pilaNavegacion = createStackNavigator();
const user = React.createRef()

export class App extends Component {
    constructor(props) {
        super(props);
    this.state = {}

  }

  render() {
    return (
        <NavigationContainer>
            <pilaNavegacion.Navigator>
                <pilaNavegacion.Screen name="Inicio" component={InicioScreen} />
                <pilaNavegacion.Screen name="Login" component={LoginScreen} />
                <pilaNavegacion.Screen name="Explore" component={ExploreScreen} />
                <pilaNavegacion.Screen name="User" component={UserScreen} />
                <pilaNavegacion.Screen name="Register" component={RegisterScreen} />
                <pilaNavegacion.Screen name="Details" component={PlanDetailsScreen} />
                <pilaNavegacion.Screen name="CreatePlan" component={CreatePlanScreen} />

            </pilaNavegacion.Navigator>
        </NavigationContainer>
  );
};
}

const styleLogin = StyleSheet.create({

});

export default App;
