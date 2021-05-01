import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from './HomePage';
import Preview from "./Preview";

class App extends Component {
  
  render(){
    return(
      <Router>
        <div className="App">
             <Switch>
                <Route path="/" exact component={Preview} />
                <Route path="/HomePage" component={HomePage} />
            </Switch>
      </div>
      </Router>
     
    )
};
}

export default App;
