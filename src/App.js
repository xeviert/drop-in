import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import Footer from './components/Footer';
import Register from './components/Register';
import Teachers from './components/Teachers';
import Login from './components/Login';
import Studios from './components/Studios';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/users' component={Users} />
        <Route path='/studios' component={Studios} />
        <Route path='/teachers' component={Teachers} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
