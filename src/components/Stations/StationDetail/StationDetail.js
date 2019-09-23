import React from "react";

const StationDetail = (props) => {
  const stationId = props.match.params.id

  return (
  
    <article>
      <h1>
        StationDetail {stationId}
      </h1>
    </article>
    
  )
}


export default StationDetail