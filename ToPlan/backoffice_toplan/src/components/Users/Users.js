import * as React from "react";
import {GetUsers} from "./GetUsers";
import {DeleteUser} from "./DeleteUser";
import {UpdateUser} from "./UpdateUser";
import {TabPanel, TabView} from "primereact/tabview";
import {TabMenu} from "primereact/tabmenu";
import axios from "axios";
import {Button} from "primereact/button";
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {InputText} from "primereact/inputtext";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-orange/theme.css';
import 'primereact/resources/primereact.css';


export class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            users:[{Admin:''}],
            userId:'',
            checker:''
        }
        this.getAllUsers = this.getAllUsers.bind(this);
        this.checkerUser = this.checkerUser.bind(this);
        this.onInputchange = this.onInputchange.bind(this);

    }


render(){
    const columns = [
        {field: 'UserId', header: 'Email'},
        {field: 'Name', header: 'nombre'},
        {field: 'Surname', header: 'Surname'},
        {field: 'Password', header: 'password'},
        {field: 'Preferences', header: 'Preferences'},
        {field: 'FechaNacimiento', header: 'birthDate'},

    ];
    const dynamicColumns = columns.map((col,i) => {
        return <Column className={'column'}  key={col.field} field={col.field} header={col.header}  />;
    });

    return(
        <div className={'mainContainer'}>
            <TabView>

            <TabPanel header={'Get'}>
                <div className={'grupo'}>
                    <div className={'separador'}>
                        <label>Get All User &nbsp;</label>

                        <Button onClick={this.getAllUsers} icon={'pi pi-check'} ></Button>
                        <DataTable value={this.state.users} >
                        {dynamicColumns}
                            <Column className={'column'} key={'Admin'} field={'Admin'} header={'Admin'}   />
                    </DataTable>
                    </div>

                </div>
            </TabPanel>
                <TabPanel header={'Update'}>
                    <div className={'grupo'}>
                        <div className={'separador'}>
                            <label>Update User&nbsp;</label>
                            <InputText placeholder={"User Mail"} className={'inputText'} name="userId"  onChange={this.onInputchange}/>
                            <Button onClick={this.checkerUser} icon={'pi pi-check'} ></Button>

                            <DataTable value={this.state.users} >
                                {dynamicColumns}
                            </DataTable>
                        </div>

                    </div>
                </TabPanel>
            </TabView>




        </div>
    )
}
    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    getAllUsers(){
        console.log('hola')
        const promise = axios.get('http://54.162.15.195:44360/api/Users', {headers: {'Access-Control-Allow-Origin': '*'}})
            const promiseResult = promise.then((respuesta) => {
            this.setState({users: respuesta.data});
            if(this.state.users.Admin== true){
                this.setState(this.state.users.Admin == 'true')
            }
        }).catch(e => {
            console.log(e);
        });
        console.log(this.state.users)
    }

    checkerUser =() => {
        const promise = axios.get('http://54.162.15.195:44360/api/User/Check?id='+this.state.userId, {headers: {'Access-Control-Allow-Origin': '*'}})
        const promiseResult = promise.then((resolveResult) => {
                console.log(resolveResult);

            }
            , (rejectedResult) => {

                console.error(rejectedResult.statusText)
            });

    }


}
