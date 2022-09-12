import React, { useEffect, useState } from "react";
import Plant from "./Plant";
import PlantDetail from "./PlantDetail";

function Plants({handleSetPlants, plants, handleDeletedPlants, onNewPlant}){

    // State for detailed plant displayed lives here
    const [plantDetail, setPlantDetail] = useState(
        {    
        "id": 17,
        "name": "Monstera",
        "species": "Monstera adansonii",
        "best_climate": "Cool and wet climate",
        "water_frequency": "Once a week",
        "no_in_stock": 5,
        "image": "https://cdn.standardmedia.co.ke/images/monday/mrgzearkbazgdw4w621cc47da68d7.jpg",
        "created_at": "2022-09-08T20:37:28.961Z",
        "updated_at": "2022-09-08T20:37:28.961Z",
        "purchases": [
            {
                "id": 39,
                "plant_id": 17,
                "buyer_id": 36,
                "cost": 2380,
                "buyer": {
                    "id": 36,
                    "name": "Jerold Hamill",
                    "contact": 2902761311,
                    "feedback": "Et aperiam laboriosam qui."
                }
            }
        ]
    }
    )

    // On loading of Plants component, fetch plant data
    useEffect(() => {
        fetch("http://localhost:9292/plants")
        .then(res => res.json())
        .then(data => {
            handleSetPlants(data)
        })
    },[])

    function onPlantDelete(data){
        // let updatedPlants = plants.filter(plant => {
        //     return plant.id !== data.id
        // })
        handleDeletedPlants(data)
    }

    return(
        <>
            <h1 id="headline">This is a catalogue of the Plants Looking to find a home.</h1>
            <div className="flex">
                <div className="plants">
                    {plants.map(plant => {
                        return <Plant key={plant.id} id={plant.id} 
                        name={plant.name} species={plant.species} 
                        best_climate={plant.best_climate} water_frequency={plant.water_frequency} 
                        no_in_stock={plant.no_in_stock} image={plant.image} 
                        handlePlantDetail={(details) => setPlantDetail(details)}
                        handlePlantDelete = {onPlantDelete} onNewPlant={onNewPlant}/>
                    })}
                </div>
                <div className="details">
                    <PlantDetail details={plantDetail}/>
                </div>
            </div>
        </>


    )
}

export default Plants