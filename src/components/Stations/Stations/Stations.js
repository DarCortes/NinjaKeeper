import React from 'react'
import StationList from '../StationList/StationList'
import './Stations.scss';

const Stations = () => (
  <div className="imagen-ciudad">
    <h2 >
      Estaciones 24/7
    </h2>
<div className="flex-container">
  <StationList/>
  </div>
    
    
  </div>
)

export default Stations