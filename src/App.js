import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Planner from './pages/Planner';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/account' component={Account} />
          <Route path='/planner' component={Planner} />
          <Route path='/sign-in' component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;