import React, { Component } from "react";
import { Button } from "react-native-elements";
import { StyleSheet } from 'react-native';



export class PlanPeople extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Image style={stylePlanPeople.peopleImg} source={require('./Assets/user.png')} />
                <Text style={stylePlanPeople.peopleText}>Adrián Pérez</Text>
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
        height: 40,
        width: 200,
        backgroundColor: 'white',
        textAlignVertical: 'center',
    },
}
);




export default PlanPeople;
