import React, { Component } from "react";
import { Button } from "react-native-elements";
import {StyleSheet} from 'react-native';



export class ButtonPlan extends Component {
    constructor(props){
    super(props);
}

    render(){
        return(
            <>
            <Button title={this.props.title} onPress={this.props.metodo} buttonStyle={styleButton.button}></Button>
            </>
        );
    }
}
const styleButton = StyleSheet.create({
    button: {
      backgroundColor: '#ffcc57',
      width:300,

    },
  }
);




export default ButtonPlan;
