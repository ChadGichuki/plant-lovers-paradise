import React, { useState } from "react";

function NewPlant({onNewPlant}){

    const [formData, setFormData] = useState({
        "name": "",
        "species": "",
        "best_climate": "",
        "water_frequency": "",
        "no_in_stock": "",
        "image": ""
    })


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
        fetch("http://localhost:9292/plants", {
            method: "POST",
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            onNewPlant(data)

            // reset the form input fields
            setFormData({
                "name": "",
                "species": "",
                "best_climate": "",
                "water_frequency": "",
                "no_in_stock": "",
                "image": ""
            })
        }) 
    }

    return(
        <>
        <h1>Graduate matured seedlings to the official catalogue.</h1>
        <form id="form" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Plant Name:</label><br/>
                <input type="text" id="name" className="form-control" name="name" placeholder="Plant Name" value={formData.name} onChange={handleFormChange}/><br/>
            </div>
            <div className="mb-3">
                <label htmlFor="species" className="form-label">Species:</label><br/>
                <input type="text" id="species" className="form-control" name="species" placeholder="Plant Species" value={formData.species} onChange={handleFormChange}/><br/>
            </div>
            <div className="mb-3">
                <label htmlFor="bestClimate" className="form-label">Best CLimate:</label><br/>
                <input type="text" id="bestClimate" className="form-control" name="best_climate" placeholder="Cool and Wet CLimate" value={formData.best_climate} onChange={handleFormChange}/><br/>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Watering Frequency:</label><br/>
                <input type="text" id="waterFrequency" className="form-control" name="water_frequency" placeholder="Once a week" value={formData.water_frequency} onChange={handleFormChange}/><br/>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">No of Germinated Seedlings:</label><br/>
                <input type="text" id="no_in_stock" className="form-control" name="no_in_stock" placeholder="10" value={formData.no_in_stock} onChange={handleFormChange}/><br/>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Image URL:</label><br/>
                <input type="text" id="image" className="form-control" name="image" placeholder="http://image.jpg" value={formData.image} onChange={handleFormChange}/><br/>
            </div>

            <input type="submit" value="Graduate" className="btn btn-primary"/>
        </form>
        </>
    )
}

export default NewPlant
