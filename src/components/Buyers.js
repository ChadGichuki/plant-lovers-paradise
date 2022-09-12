import React, { useEffect, useState } from "react";

function Buyers({deletedPlants}){
    const [buyers, setBuyers] = useState([])

    useEffect(() => {
        fetch("https://serene-garden-41047.herokuapp.com/buyers")
        .then(res => res.json())
        .then(data => setBuyers(data))
    }, [deletedPlants])

    return(
        <table className="table table-striped-columns">
            <thead>
                <tr>
                <th>Buyer No.</th>
                <th>Name</th>
                <th>Contact</th>
                <th>No. of Purchases</th>
                <th>Most Recent Purchase</th>
                <th>Feedback</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {buyers.map(buyer => {
                    return(
                        <tr key={buyer.id}>
                            <td>{buyer.id}</td>
                            <td>{buyer.name}</td>
                            <td>{buyer.contact}</td>
                            <td>{buyer.purchases.length} {buyer.purchases.length === 1 ? "Purchase" : "Purchases"}</td>
                            <td>{buyer.purchases.length === 0 ? "None" : buyer.purchases[buyer.purchases.length-1].plant.name}</td>
                            <td>{buyer.feedback}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Buyers