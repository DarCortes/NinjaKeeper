import React from 'react'
import './PaymentMethods.scss'
import tarjetametro from "./../../assets/IMG/tarjetadelmetro.jpg";

const PaymentMethods = () => (
  <div>
    <h2>Puedes pagar con dos sencillas opciones:</h2>
    <div class="Imagen-tarjeta">
  < img className="tarjeta-metro" src={tarjetametro} alt="Tarjeta de credito"/>
  <h4>
    La misma tarjeta Metro, funciona para pagar, abrir y cerrar
  </h4>
  </div>
  </div>

)

export default PaymentMethods