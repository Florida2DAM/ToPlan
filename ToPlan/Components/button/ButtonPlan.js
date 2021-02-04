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
            <Button title={this.props.title} onPress={this.props.metodo} buttonStyle={[styleButton.button,{width:this.props.size,marginTop:this.props.topmargin}]}></Button>
            </>
        );
    }
}
const styleButton = StyleSheet.create({
    button: {
      backgroundColor: '#ffcc57',
    },
  }
);




export default ButtonPlan;
