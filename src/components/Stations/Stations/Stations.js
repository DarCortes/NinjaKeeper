import React from 'react'
import StationList from '../StationList/StationList'
import './Stations.scss';
import vistanubes from '../../../assets/IMG/vistanubes.png';

const Stations = () => (
  <div>
    <div>
      <img className="vistanubes" src={vistanubes} alt="vista de ciudad nublada"/>

    </div>
    <h2>
      Estaciones 24/7
    </h2>

    <StationList/>
    
  </div>
)

export default Stations