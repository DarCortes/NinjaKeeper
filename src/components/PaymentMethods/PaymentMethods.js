import React from 'react'
import './PaymentMethods.scss'
import tarjetametro from "./../../assets/IMG/tarjetadelmetro.jpg";

const PaymentMethods = () => (
  <div>
    
    <div class="Imagen-tarjeta">
  < img className="tarjeta-metro" src={tarjetametro} alt="Tarjeta de credito"/>
 <h2>Paga con:</h2> 
 <div>
   <ul>
   <li class="flex-item"> Payback</li>
        <li class="flex-item">Tarjeta Metro</li>
   </ul>
 </div>
 
  </div>
  </div>

)

export default PaymentMethods