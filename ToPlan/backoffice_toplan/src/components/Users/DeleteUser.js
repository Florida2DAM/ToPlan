import axios from 'axios';
import * as React from "react";
import {Button} from 'primereact/button';
import './Users.css'
import {InputText} from "primereact/inputtext";
import 'primeicons/primeicons.css';



export class DeleteUser extends React.Component {
    constructor(props) {
        super(props);
        this.onInputchange = this.onInputchange.bind(this);

        this.state = {}
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)

    }

    UpdateUser() {
        const promise = axios.get("http://54.162.15.195:44360/api/Users", {headers: {'Access-Control-Allow-Origin': '*'}})
        const promiseResult = promise.then((resolveResult) => {
                const result = resolveResult.data
                console.log(result)
            }
            , (rejectedResult) => {
                console.error(rejectedResult.statusText)
            });
    }

    render() {
        return (
            <div>
                <label>Delete User &nbsp;</label>

                <InputText  icon="pi pi-check" placeholder={"User Mail"} name="userId" value={this.state.userId} onChange={this.onInputchange}/>


                <Button onClick={this.UpdateUser()}  icon={'pi pi-times'}/>
            </div>


        )

    }
}

