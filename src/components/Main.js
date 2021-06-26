import React from 'react';
import Navbar from "./Navbar/Navbar"
import Home from "./Home/Home"
import Models from "./Models/Models"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Main() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/models' component={Models} />
      </Switch>
    </Router>
  );
}

export default Main;
