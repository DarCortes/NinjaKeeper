import React from "react";

import { Link } from 'react-router-dom' 

import "../StationList/StationList.scss"

const StationPreview = ({id, title}) => (
  <article className="StationPreview">
    <Link to={`/estaciones/${id}`}>
      <h1>
        { title }
      </h1>
    </Link>
  </article>
)


export default StationPreview