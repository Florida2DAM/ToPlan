import axios from 'axios';
import * as React from "react";
import {Button} from 'primereact/button';
import './Users.css'
import {InputText} from "primereact/inputtext";
import 'primeicons/primeicons.css';


export class UpdateUser extends React.Component {


    constructor(props) {
        super(props);
        this.onInputchange = this.onInputchange.bind(this);
        this.checkerUser = this.checkerUser.bind(this);

        this.state = {
            isHidden: true,
            products :{
                email:'test@test',
                nombre:'test',
                surname:'surnametest',
                preferences:'testPreferences',
                birthDate:'test-test-test',
                password:'testPassword'
            },

        }
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)

    }

    UpdateUser() {
        const promise = axios.put(this.props.ApiConnection+this.state.userId, {headers: {'Access-Control-Allow-Origin': '*'}})
        const promiseResult = promise.then((resolveResult) => {
                const result = resolveResult.data
                console.log(result)
            }
            , (rejectedResult) => {
                console.error(rejectedResult.statusText)
            });
    }
    /*checkerUser(){
        //FUNCION DE CHECKEAR
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
*/


    render() {
        const Child = () => (
            <div className='edit'>
                 <label>Email &nbsp;</label>
                <InputText placeholder={"User Mail"} className={'inputText'} name="userId" value={this.state.userId} onChange={this.onInputchange}/>
                <label>Name &nbsp;</label>
                <InputText placeholder={"User Mail"} className={'inputText'} name="userName" value={this.state.userId} onChange={this.onInputchange}/>
                <label>Surname &nbsp;</label>
                <InputText placeholder={"User Mail"} className={'inputText'} name="userSurname" value={this.state.userId} onChange={this.onInputchange}/>
                <label>Birth Date &nbsp;</label>
                <InputText placeholder={this.state.products.nombre}  className={'inputText'} name="userDate" value={this.state.userId} onChange={this.onInputchange}/>
                <Button   onClick={this.UpdateUser}  icon="pi pi-check"/>

            </div>
        )
        return (
            <div className={'mainContainterUpdate'} >
                <label>Update User &nbsp;</label>
                <InputText placeholder={"User Mail"} className={'inputText'} name="userId" value={this.state.userId} onChange={this.onInputchange}/>


                <Button   onClick={this.checkerUser}  icon="pi pi-check"/>

                <div className={'editContainer'}>
                    {!this.state.isHidden && <Child />}
                </div>
            </div>



        )

    }

}

