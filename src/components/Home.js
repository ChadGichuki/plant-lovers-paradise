import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="home">
            <h1>Welcome To The Plant Lovers Paradise!</h1>
            <h3>Where every plant finds a home.</h3>
            <p>Pssstt! Did you know that indoor plants boost productivity?</p>
            <Link to="/plants" className="homebtn">Our Plants</Link>
        </div>

    )
}

export default Home