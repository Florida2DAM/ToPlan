import './App.css';
import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {GetUsers} from "./components/Users/GetUsers";
import {UpdateUser} from "./components/Users/UpdateUser";
import {DeleteUser} from "./components/Users/DeleteUser";
import {Users} from "./components/Users/Users";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-orange/theme.css';
import 'primereact/resources/primereact.css';
import {Events} from "./components/Events/Events";
import {TypePlan} from "./components/TypePlan/TypePlan";




function App() {
  return (
      <div className="App">
      </div>
  );
}

export default App;
