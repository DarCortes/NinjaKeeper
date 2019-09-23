import React from 'react'
import ninjacat from "./../../assets/IMG/GatoNinja.png";
import './Home.scss';
const Home = () => (
  <div className="flex-direction">
    <div className="flex-container">
      <img className="gato-ninja" src={ninjacat} alt="gato ninja" width="393px" height="522px"/></div>
      
    <div className="flex-container">
    <div className="flex-descripcion">

      <h2>Ninja Keeper</h2>
    
    <h3>Son lockers inteligentes.</h3>
    <h3>Seguro, fácil y rápido. Abre y cierra con 
tu cel o con tu tarjeta Metro / Payback.</h3>

<h3>Tenemos estaciones 24/7, siempre vigiladas.</h3>

<h3>Útil cuando viajas, estás de compras, e inclusive 
cuando esperas algún paquete por internet.</h3>

  </div>
    </div>
    
  </div>
)

export default Home