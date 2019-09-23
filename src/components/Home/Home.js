import React from 'react'
import ninjacat from "./../../assets/IMG/GatoNinja.png";
import './Home.scss';
const Home = () => (
  <div>
    

    <div className="flex-descripcion">
      <img src={ninjacat} alt="gato ninja" width="393px" height="522px"/>
      <p>Lockers inteligentes donde puedes dejar tus cosas.</p>
      <p>Seguro, fácil y rápido. Puedes abrir y cerrar con 
tu cel o con tu tarjeta Metro / Payback.</p>

<p>Tenemos estaciones 24/7, todo el tiempo vigiladas.</p>

<p>Útil cuando viajas, estás de compras, e inclusive 
cuando esperas algún paquete por internet.</p>



      
    </div>
  </div>
)

export default Home