import React, {useState} from "react";

function Plant({id, name, species, best_climate, water_frequency, no_in_stock, image, handlePlantDetail, handlePlantDelete, onUpdatePlant}){

    const [formData, setFormData] = useState({
        "no_in_stock": ""
    })

    function handleViewDetailsClick(e){
        fetch(`http://localhost:9292/plants/${id}`)
        .then(res => res.json())
        .then(data => handlePlantDetail(data))
    }

    function handleDeleteClick(e){
        fetch(`http://localhost:9292/plants/${id}`, {
            method: "DELETE",
            headers: {"Content-type": "Application/json"}
        })
        .then(res => res.json())
        .then(data => handlePlantDelete(data))
    }

    function handleFormChange(event){
        const name = event.target.name;
        let value = event.target.value;

        setFormData({
            ...formData,
            [name]: value,
          });
    }

    function handleFormSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/plants/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            onUpdatePlant(data)

            // reset the form input fields
            setFormData({
                "no_in_stock": ""
            })
        }) 
    }

    return(
    <div className="card" style={{"width": "35rem"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={image} alt={name} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <p className="card-title"><strong>{name}</strong></p>
                    <p className="card-title">Species: {species}</p>
                    <p className="card-title">Best Climate: {best_climate}</p>
                    <p className="card-title">Watering Frequency: {water_frequency}</p>
                    <p className="card-title">Stock: {no_in_stock}</p>
                    <button className="btn btn-primary" onClick={handleViewDetailsClick}>View Purchases</button>
                    <button className="btn btn-primary" onClick={handleDeleteClick}>Delete</button>
                    <form id="form" onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Update Remaining Stock:</label><br/>
                            <input type="text" id="name" className="form-control" name="no_in_stock" placeholder={no_in_stock} value={formData.no_in_stock} onChange={handleFormChange}/><br/>
                        </div>
                        <input type="submit" value="Update" className="btn btn-primary"/>
                    </form>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Plant