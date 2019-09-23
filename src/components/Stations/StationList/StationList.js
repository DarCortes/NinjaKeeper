import React from "react";
import StationPreview from "../StationPreview/StationPreview";

const fakeStations = [{
        id: 0,
        title: "Centro"
    },
    {
        id: 1,
        title: "Coyoacán"
    },
    {
        id: 2,
        title: "Buenavista"
    },
    {
        id: 4,
        title: "Cuatro Caminos"
    },
]

const StationList = () => {
    const renderStations = fakeStations.map(eachStation => ( <
        StationPreview id = { eachStation.id }
        title = { eachStation.title }
        key = { eachStation.id }
        />
    ))

    return (

        <
        ul className = "StationList" >

        { renderStations }

        <
        /ul>
    )
}


export default StationList