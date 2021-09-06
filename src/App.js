import React from 'react';
import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import Sidebar from './components/Sidebar/index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import SignIn from './pages/signin';
import Accesorios from './pages/Accesorios';
import electricos from './pages/electricos';
import electronicos from './pages/electronicos';
import electromagneticos from './pages/electromagneticos';
import seguridad from './pages/seguridad';
import CreateUser from './components/Createuser/CreateUser'
import contacto from './pages/contacto';
import privacidad from './pages/privacidad';
import cookies from './pages/cookies';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/Accesorios" component={Accesorios} />
        <Route path="/electricos" component={electricos} />
        <Route path="/electronicos" component={electronicos} />
        <Route path="/electromagneticos" component={electromagneticos} />
        <Route path="/seguridad" component={seguridad} />
        <Route path="/create" component={CreateUser} />
        <Route path="/contacto" component={contacto} />
        <Route path="/privacidad" component={privacidad} />
        <Route path="/cookies" component={cookies} />
      </Switch>

    </Router>
  );
}

export default App;
