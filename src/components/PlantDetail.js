import React from "react";

function PlantDetail({details}){
    const {name, species, best_climate, water_frequency, no_in_stock, image, purchases} = details
    return(
    <div id="specialCard" className="card" style={{"width": "30rem"}}>
        <div className="row g-0">
            <h3>Detailed View:</h3>
            <div className="col-md-8">
                <img src={image} alt={name} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <p className="card-title"><strong>{name}</strong></p>
                    <p className="card-title">Species: {species}</p>
                    <p className="card-title">Best Climate: {best_climate}</p>
                    <p className="card-title">Watering Frequency: {water_frequency}</p>
                    <p className="card-title">In Stock: {no_in_stock}</p>
                    <p className="card-title">Past Purchases: {purchases.length}</p>
                    <div className="card-title">
                        {purchases.map(purchase => {
                            return(
                            <ul className="boughtBy" key={purchase.id}> 
                                <li id="first">Buyer {purchase.buyer.id}</li>
                                <li>Name: {purchase.buyer.name}</li>
                                <li>Contact: {purchase.buyer.contact}</li>
                                <li>Total cost: Ksh.{purchase.cost}</li>
                            </ul>
                            ) 
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PlantDetail