import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Accesorios from './pages/Accesorios';
import electricos from './pages/electricos';
import electronicos from './pages/electronicos';
import electromagneticos from './pages/electromagneticos';
import seguridad from './pages/seguridad';
import { FooterContainer } from './components/containers/footer.js'

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
        <Route path="/seguridad" component={seguridad} />
      </Switch>
      <FooterContainer />

    </Router>
  );
}

export default App;
