import React from "react";

function PlantDetail({details}){
    const {id, name, species, best_climate, water_frequency, no_in_stock, image, purchases} = details
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
                    <p className="card-title">In Stock: {no_in_stock}</p>
                    <p className="card-title">Past Purchases: {no_in_stock}</p>
                    <div className="card-title">
                        {purchases.map(purchase => {
                            return(
                            <ul key={purchase.id}> 
                                <li>{purchase.buyer.name}</li>
                                <li>{purchase.buyer.contact}</li>
                                <li>{purchase.buyer.feedback}</li>
                                <li>Total cost: {purchase.cost}</li>
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