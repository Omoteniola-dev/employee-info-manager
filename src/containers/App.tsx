import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from './HomePage';
import Preview from "./Preview";

const App = () => {
  
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
}

export default App;
