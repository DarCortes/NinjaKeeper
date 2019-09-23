import React from "react";
import StationPreview from "../StationPreview/StationPreview";
import "./StationList.scss";
import fakeStations from '../../../FakeStations'


const StationList = () => {
    const renderStations = fakeStations.map(eachStation => ( <
        StationPreview id = { eachStation.id }
        title = { eachStation.title }
        key = { eachStation.id }
        />
    ))

    return (

        <ul className = "StationList" >

        { renderStations }

        </ul>
    )
}


export default StationList