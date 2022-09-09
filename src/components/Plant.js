import React, { useState } from "react";

function Plant({id, name, species, best_climate, water_frequency, no_in_stock, image, handlePlantDetail}){

    function handleViewDetailsClick(e){
        fetch(`http://localhost:9292/plants/${id}`)
        .then(res => res.json())
        .then(data => handlePlantDetail(data))
    }

    return(
    <div className="card" style={{"width": "35rem"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={image} alt={name} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <p className="card-title">{name}</p>
                    <p className="card-title">Species: {species}</p>
                    <p className="card-title">Best Climate: {best_climate}</p>
                    <p className="card-title">Watering Frequency: {water_frequency}</p>
                    <p className="card-title">Stock: {no_in_stock}</p>
                    <button className="btn btn-primary" onClick={handleViewDetailsClick}>View Purchases</button>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Plant