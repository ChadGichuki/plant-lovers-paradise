import React, { useEffect } from "react";
import Plant from "./Plant";
import PlantDetail from "./PlantDetail";

function Plants({handleSetPlants, plants}){

    // State for detailed plant displayed lives here
    cont [plantDetail, setPlantDetail] = useState({})

    // On loading of Plants component, fetch plant data
    useEffect(() => {
        fetch("http://localhost:9292/plants")
        .then(res => res.json())
        .then(data => handleSetPlants(data))
    },[plants])

    return(
        <div className="flex">
            <div className="survey">
                <h1>This is a catalogue of the Plants Looking to find a home.</h1>
                {plants.map(plant => {
                    return <Plant key={plant.id} id={plant.id} name={plant.name} species={plant.species} best_climate={plant.best_climate} water_frequency={plant.water_frequency} no_in_stock={plant.no_in_stock} image={plant.image} handlePlantDetail={(details) => setPlantDetail(details)}/>
                })}
            </div>
            <div className="details">
                <PlantDetail details={plantDetail}/>
            </div>
        </div>

    )
}

export default Plants