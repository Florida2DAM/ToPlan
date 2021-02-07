import React, {Component} from "react";
import axios from "axios";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import "./StyleEvents.css";
import {TabPanel, TabView} from "primereact/tabview";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';


export class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            EventId: '',
            date: '',
            city: '',
            province: '',
            description: '',
            maxMembers: '',
            TypePlanId: [],
            Members:'',
            UserId:'',
            Type:''
        }
    }

    componentDidMount() {
        axios.get("http://54.162.15.195:44360/api/TypePlan/List",{},{headers:{'Access-Control-Allow-Origin': '*'}}).then((response =>{
            console.log(response)
            this.setState({TypePlanId: response.data})
        })).catch((error => {
            console.log(error)
        }));
    }


    onSubmitInsertEvent = () => {

        let event = {
            Date: this.state.date,
            City: this.state.city,
            Province: this.state.province,
            Description: this.state.description,
            MaxMembers: this.state.maxMembers,
            PlanId: this.state.TypePlanId,
        };

        axios.post('https://localhost:44317/api/Event', event)
            .then((response) => {
                console.log("Insert successfully");
            }, (error) => {
                console.log(error);
            });
    }

    onSubmitUpdate = () => {

        const promiseUpdate = axios.put("https://localhost:44379/api/Eventos/Put/id=" + this.state.EventId + "&f=" + this.state.date + "&c=" + this.state.city + "&p=" + this.state.province + "&d=" + this.state.description, {}, {headers: {'Access-Control-Allow-Origin': '*'}}
        ).then(response => {
            console.log("Update succesfully: " + response)
        }).catch(e => {
            console.log(e);
        });

    }

    onInputEventId = (event) => {
        this.setState({
            EventId: event.target.value
        });
    }

    onInputDate = (event) => {
        this.setState({
            date: event.target.value
        });
    }

    onInputCity = (event) => {
        this.setState({
            city: event.target.value
        });
    }

    onInputProvince = (event) => {
        this.setState({
            province: event.target.value
        });
    }

    onInputDescription = (event) => {
        this.setState({
            description: event.target.value
        });
    }

    onInputUserId = (event) => {
        this.setState({
            UserId: event.target.value
        });
    }

    onInputMembers = (event) => {
        this.setState({
            Members: event.target.value
        });
    }

    onSubmitDeleteEvent = () => {

        let promisePost = axios.delete("https://localhost:44360/api/Event?id=" + this.state.EventId, {}, {headers: {'Access-Control-Allow-Origin': '*'}}
        ).then(response => {
            console.log("Delete successfully")
        }).catch(e => {
            console.log(e)

        });
    }


    onInputChange = (event) => {
        this.setState({
            EventId: event.target.value
        });
    }

    onInputChangeType = (event) => {
        this.setState({
            Type: event.target.value
        });
    }



    render() {
        return (
            <div className="groupUpdate">
                <div className="tabview-demo">
                    <div className="card">
                        <TabView>
                            <TabPanel header="Modificar">
                                <div className="grupo">
                                    <div className="update">
                                        <h5>Update Event</h5>
                                        <InputText placeholder={"EventId"} type={'number'}
                                                   name="EventId" value={this.state.EventId}
                                                   onChange={this.onInputEventId}
                                        />
                                        <InputText placeholder={"EventDate"} type={'text'}
                                                   name="EventDate" value={this.state.date}
                                                   onChange={this.onInputDate}
                                        />

                                        <InputText placeholder={"EventCity"} type={'text'}
                                                   name="EventDate" value={this.state.city}
                                                   onChange={this.onInputCity}
                                        />

                                        <InputText placeholder={"EventProvince"} type={'text'}
                                                   name="EventDate" value={this.state.province}
                                                   onChange={this.onInputProvince}
                                        />

                                        <InputText placeholder={"EventDescription"} type={'text'}
                                                   name="EventDate" value={this.state.description}
                                                   onChange={this.onInputDescription}
                                        />
                                        <p>
                                            <Button label={"Update Event"} onClick={this.onSubmitUpdate}/>
                                        </p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel header="Insertar">
                                <div className="update">
                                    <h5>Insert Event</h5>
                                    <div>
                                        <InputText placeholder={"UserId"} type={'text'}
                                                   name="UserId" value={this.state.UserId}
                                                   onChange={this.onInputUserId}
                                        />
                                        <InputText placeholder={"EventDate"} type={'text'}
                                                   name="EventDate" value={this.state.date}
                                                   onChange={this.onInputDate}
                                        />
                                        <InputText placeholder={"EventCity"} type={'text'}
                                                   name="EventDate" value={this.state.city}
                                                   onChange={this.onInputCity}
                                        />
                                        <InputText placeholder={"EventProvince"} type={'text'}
                                                   name="EventDate" value={this.state.province}
                                                   onChange={this.onInputProvince}
                                        />
                                        <InputText placeholder={"EventDescription"} type={'text'}
                                                   name="EventDate" value={this.state.description}
                                                   onChange={this.onInputDescription}
                                        />
                                        <InputText placeholder={"Event Members"} type={'number'}
                                                   name="Event Members" value={this.state.Members}
                                                   onChange={this.onInputMembers}
                                        />
                                        <select name="TypePlan" className="InputType" onChange={this.onInputChangeType}>
                                            {this.state.TypePlanId.map(element =>(
                                                <option key={element.id} value={element.id}>Test</option>
                                            ))}
                                        </select>
                                    </div>
                                    <p><Button label={"Insert Event"} onClick={this.onSubmitInsertEvent}/></p>
                                </div>
                            </TabPanel>
                            <TabPanel header="Eliminar">
                                <div className="update">
                                    <h5>Delete Event</h5>
                                    <div>
                                        <InputText placeholder={"EventId"} type={'number'}
                                                   name="eventIdDelete" value={this.state.EventId}
                                                   onChange={this.onInputChange}/>

                                    </div>
                                    <p><Button label={"Delete Event"} onClick={this.onSubmitDeleteEvent}/></p>
                                </div>
                            </TabPanel>
                            <TabPanel header="Filtrar">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati
                                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
                                    animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                                    distinctio.
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                    minus.</p>
                            </TabPanel>
                        </TabView>
                    </div>
                </div>
            </div>


        )
    }
}
