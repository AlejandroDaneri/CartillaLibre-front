import './App.css';

import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MedicList from "./components/MedicsList";
import Login from "./components/Login";

function App() {

  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/medics' component={MedicList} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
