import React from "react";
import fakeStations from '../../../FakeStations'
import "./StationDetail.scss"
const StationDetail = (props) => {
  const stationId = props.match.params.id
  const station = fakeStations[stationId]
  return (
  
    <article className="Station-detail">
      <h1>
        {station.title}
      </h1>
      <p>
        {station.address}
      </p>

    </article>
    
  )
}


export default StationDetail