import React, { useEffect, useState } from "react";

function Buyers(){
    const [buyers, setBuyers] = useState([])

    useEffect(
        fetch("http://localhost:9292/buyers")
    )
}