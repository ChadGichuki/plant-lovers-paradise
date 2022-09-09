import React, { useEffect, useState } from "react";

function Buyers(){
    const [buyers, setBuyers] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/buyers")
        .then(res => res.json())
        .then(data => setBuyers(data))
    }, [])

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
            <tbody class="table-group-divider">
                {buyers.map(buyer => {
                    return(
                        <tr key={buyer.id}>
                            <td>{buyer.id}</td>
                            <td>{buyer.name}</td>
                            <td>{buyer.contact}</td>
                            <td>{buyer.purchases.count} {buyer.purchases.count === 1 ? "Purchase" : "Purchasess"}</td>
                            <td>{buyer.purchases[purchases.length-1].name}</td>
                            <td>{buyer.feedback}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}