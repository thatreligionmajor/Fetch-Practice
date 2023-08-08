import React, { useEffect, useState } from "react";
import Home from "./home";

const CatApp = () => {
    const [catFact, setCatFact] = useState("");
    const [factLength, setFactLength] = useState(0);

    const loadCatFact = () => {
        fetch("https://catfact.ninja/fact")
        .then(response => {
            if(response.ok) {
                console.log("The response is successful!")
                return response.json()
            }
            // instead of response.ok:
			// if (response.status === 200) {} ...
            else {
                throw new Error(response.statusText)
            }
        })
        .then(data => {
            console.log(data.fact)
            setCatFact(data.fact)
            setFactLength(data.length)
    })
    .catch(error => console.log("Uh-oh, there was a problem: \n", error));
}

useEffect(() => {
    loadCatFact();
}, [])

    return(
        <>
        <span className="catApp">
            <h1>Cat App 🐱</h1>
            <p className = "catFact">{catFact}</p>
            <button onClick={loadCatFact}> 🐾 click for fact 🐾 </button>
        </span>
        </>
    );
};

export default CatApp;