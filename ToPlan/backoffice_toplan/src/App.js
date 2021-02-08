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




function App() {
  return (
      <div className="App">
          <Router>
              <div className={"link"}>
                  <nav className={"navBar"}>
                      <Link className={"link"} to="/users">Users &nbsp; &nbsp;</Link><br/>
                      <Link className={"link"} to="/events">Events</Link>
                  </nav>
                  <Switch>
                      <Route path="/users">
                          <Users />
                      </Route>
                      <Route path="/events">
                          <Events/>
                      </Route>


                  </Switch>
              </div>
          </Router>




      </div>
  );
}

export default App;
