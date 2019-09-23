import React from 'react';

import {Route, Switch} from 'react-router-dom'

import './styles/App.scss';
import MainHeader from './components/MainHeader/MainHeader';
import Home from './components/Home/Home';
import PaymentMethods from './components/PaymentMethods/PaymentMethods';
import Stations from './components/Stations/Stations/Stations';
import Help from './components/Help/Help';
import StationDetail from './components/Stations/StationDetail/StationDetail';
import Benefits from './components/Benefits/Benefits';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <main>

        <Switch>
          
          <Route path="/pagos" exact component={PaymentMethods}/>
          <Route path="/estaciones" exact component={Stations}/>
          <Route path="/estaciones/:id" exact component={StationDetail}/>
          <Route path="/ayuda" exact component={Help}/>
          <Route path="/beneficios" exact component={Benefits}/>
          <Route path="/" exact component={Home}/>

        </Switch>

      </main>
      
    </div>
    
  );
}

export default App;
