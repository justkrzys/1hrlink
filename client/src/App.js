import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import LinkInput from "./LinkInput";
import Redirect from "./Redirect";
import Error from "./Error"

function App() {
  return (
      <Router>
        <Switch>
            <Route path = '/404' component={Error}/>
            <Route path = '/:id' component={Redirect} />
            <Route path = '/' component={LinkInput}/>
        </Switch>
      </Router>
  );
}

export default App;
