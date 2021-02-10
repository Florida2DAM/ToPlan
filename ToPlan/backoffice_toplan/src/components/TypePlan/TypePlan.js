import React, {Component, useState} from "react";
import axios from "axios";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import "../Events/StyleEvents.css";
import {TabPanel, TabView} from "primereact/tabview";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import {Dropdown} from "primereact/dropdown";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {InputTextarea} from "primereact/inputtextarea";
import {InputMask} from "primereact/inputmask";


export class TypePlan extends Component{

    constructor(props) {
        super(props);
        this.state ={
            TypePlans:[],
            Data:'',
        }
    }

    componentDidMount() {
        axios.get("http://3.95.8.159:44360/api/TypePlan/List", {}, {headers: {'Access-Control-Allow-Origin': '*'}}).then((response => {
            this.setState({TypePlans: response.data})
            console.log(response);
        })).catch((error => {
            console.log(error)
        }));
    }

    onInputTypeFilter = (event)=>{
        this.setState({Data:event.target.value});
    }

    render() {
        return(
            <div>
                <div className="groupUpdate">
                    <div className="tabview-demo">
                        <div className="card">
                            <TabView>
                                <TabPanel header="Modificar">

                                </TabPanel>
                                <TabPanel header="Insertar">

                                </TabPanel>
                                <TabPanel header="Eliminar">

                                </TabPanel>
                                <TabPanel header="Filtrar">
                                    <div className="InputFiltrado">
                                        <Dropdown autoWidth={true} value={this.state.Data}
                                                  options={this.state.TypePlans.map(elem => (elem.Subtype))}
                                                  onChange={this.onInputTypeFilter} placeholder="Select a Subtype Plan"/>
                                    </div>
                                    <div className="DataTable">
                                        <DataTable value={this.state.TypePlans}>
                                            <Column field="TypePlanId" header="TypeId"/>
                                            <Column field="Name" header="Name"/>
                                            <Column field="Subtype" header="Subtype"/>
                                        </DataTable>
                                    </div>
                                </TabPanel>
                            </TabView>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}