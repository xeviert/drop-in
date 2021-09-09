import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './routes/About';
import Home from './routes/Home';
import Users from './routes/Users';
import Register from './routes/Register';
import Teachers from './routes/Teachers';
import Login from './routes/Login';
import Studios from './routes/Studios';

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
