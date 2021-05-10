import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from './HomePage';
import Preview from "./Preview";
import CreateProfile from "./CreateProfile";
import LogIn from "../components/CreateProfile/LogIn"

const App = () => {
  
    return(
      <Router>
        <div className="App">
             <Switch>
                <Route path="/" exact component={Preview} />
                <Route path="/homepage" component={HomePage} />
                <Route path="/createprofile" component={CreateProfile} />
                <Route path="/login" component={LogIn} />
            </Switch>
      </div>
      </Router>
     
    )
}

export default App;
