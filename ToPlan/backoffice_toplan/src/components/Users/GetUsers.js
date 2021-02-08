import axios from 'axios';
import * as React from "react";
import { Button } from 'primereact/button';
import './Users.css'
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";



export class GetUsers extends React.Component
{

    constructor(props) {
        super(props);
        this.state={
            users:[]
        }
    }
    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }



    render(){
        const columns = [
            {field: 'UserId', header: 'Email'},
            {field: 'Name', header: 'nombre'},
            {field: 'Surname', header: 'Surname'},
            {field: 'Password', header: 'password'},
            {field: 'Preferences', header: 'Preferences'},
            {field: 'FechaNacimineto', header: 'birthDate'},
        ];
        const dynamicColumns = columns.map((col,i) => {
            return <Column className={'column'} key={col.field} field={col.field} header={col.header}  />;
        });
        return(
            <div>

                <label>Get All User &nbsp;</label>

                <Button onClick={this.getAllEvents()} icon={'pi pi-check'} ></Button>
                <div>
                    <div className="card">
                        <DataTable value={this.state.users} >
                            {dynamicColumns}
                        </DataTable>
                    </div>
                </div>
            </div>

        );

    }
}
