import './App.css';

import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MedicList from "./components/MedicsList";
import Login from "./components/Login";

import Browser from './components/Browser';

function App() {
  

  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/medics' component={MedicList} />
            <Route path='/search' component={Browser} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
