import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Clientes from './components/Clientes/index';
import Contratos from './components/Contratos';
import Navegacion from './components/Navegacion';
import Cuentas from './components/Cuentas';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navegacion />
      <Switch>
        <Route path="/clientes" component={Clientes} />
        <Route path="/contratos" component={Contratos} />
        <Route path="/cuentas" component={Cuentas} />
        <Route path="/" component={Contratos} />
      </Switch>
      <ToastContainer/>
    </Router>
  );
}

export default App;
