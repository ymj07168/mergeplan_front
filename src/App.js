import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Planner from './pages/Planner';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import PrivateRoute from "./lib/PrivateRoute";
import PublicRoute from './lib/PublicRoute';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <PublicRoute component={Home} path='/' exact />
          <PrivateRoute component={Account} path='/account' exact />
          <PrivateRoute component={Planner} path='/planner' exact />
          <PublicRoute restricted component={SignIn} path='/sign-in' exact />
          <PublicRoute restricted component={SignUp} path='/sign-up' exact />
          {/* <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;