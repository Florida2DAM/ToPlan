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
                <pilaNavegacion.Screen options={{ headerShown: false }} name="Inicio" component={InicioScreen} />
                <pilaNavegacion.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
                <pilaNavegacion.Screen options={{ headerShown: false }} name="Explore" component={ExploreScreen} />
                <pilaNavegacion.Screen options={{ headerShown: false }} name="User" component={UserScreen} />
                <pilaNavegacion.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
                <pilaNavegacion.Screen options={{ headerShown: false }} name="Details" component={PlanDetailsScreen} />
                <pilaNavegacion.Screen options={{ headerShown: false }} name="CreatePlan" component={CreatePlanScreen} />

            </pilaNavegacion.Navigator>
        </NavigationContainer>
  );
};
}

const styleLogin = StyleSheet.create({

});

export default App;
