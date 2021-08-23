import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/users' component={Users} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
