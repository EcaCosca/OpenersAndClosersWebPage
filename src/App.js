import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Accesorios from './pages/Accesorios';
import electricos from './pages/electricos';
import electronicos from './pages/electronicos';
import electromagneticos from './pages/electromagneticos';
// import CerradurasSeguridad from './pages/CerradurasSeguridad';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Accesorios" component={Accesorios} />
        <Route path="/electricos" component={electricos} />
        <Route path="/electronicos" component={electronicos} />
        <Route path="/electromagneticos" component={electromagneticos} />
        {/* <Route path="/CerradurasSeguridad" component={CerradurasSeguridad} /> */}
      </Switch>

    </Router>
  );
}

export default App;
