import React, {Component} from "react";
import axios from "axios";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";

export class DeleteEvents extends Component {


    constructor(props) {
        super(props);
        this.state = {
            EventId: '',
        }
    }

    onSubmitDeleteEvent = () => {

        let promisePost = axios.delete("https://localhost:44360/api/Event?id=" + this.state.EventId, {}, {headers: {'Access-Control-Allow-Origin': '*'}}
        ).then(response => {

        }).catch(e => {
            console.log(e)

        });
    }


    onInputChange=(event) => {
        this.setState({
            EventId: event.target.value
        });
    }

    render() {
        return (
            <div>
                <InputText placeholder={"EventId"} type={'number'}
                           name="eventIdDelete" value={this.state.EventId}
                           onChange={this.onInputChange}/>
                <Button label={"Delete Event"} onClick={this.onSubmitDeleteEvent}/>
                <p>{this.state.EventId}</p>
            </div>
        );
    }

}