import React, { Component } from "react";
import { Button } from "react-native-elements";
import { StyleSheet, Text,Image,View } from 'react-native';

export class PlanPeople extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        let plan = this.props.element;
        return (
            <>
            <View style={stylePlanPeople.peopleView}>
                <Image style={stylePlanPeople.peopleImg} source={require('../../Assets/user.png')} />
                <Text style={stylePlanPeople.peopleText}>{plan}</Text>
            </View>
            </>
        );
    }
}
const stylePlanPeople = StyleSheet.create({
    peopleImg: {
        height: 40,
        width: 40
    },
    peopleText: {
        paddingTop:10,
        paddingLeft:20
    },
    peopleView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingTop:10

    }
}
);




export default PlanPeople;
