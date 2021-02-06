import React,{Component} from "react";
import axios from "axios";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";

export class UpdateEvents extends Component{

    constructor(props) {
        super();
        this.state={

        }
    }

    onSubmitUpdate() {

        let promisePost = axios.put("https://localhost:44379/api/Eventos/Put/id=", {}, {headers: {'Access-Control-Allow-Origin': '*'}}
        ).then(response => {

        }).catch(e => {
            console.log(e);
        });

    }

    onInputchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return(
            <div>
                <InputText /*EventId*/ placeholder={"Update Event"} type={'number'}
                                       name="eventIdUpdate"  value={this.state.EventIdUpdate}
                                       onChange={this.onInputchange}
                />
                <Button label={"Delete Event"}  onClick={this.onInputchange}/>
            </div>
        );
    }

}