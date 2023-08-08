import React, {useEffect, useState} from "react";

const AgePredictorApp = () => {
    const[name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [result, setResult] = useState(false);

    function validateSubmission() {
        if (name == "") {
            alert("The nameless are without age.")
        }
        else {
            setResult(true);
            fetchAge();
        }
    }

    function fetchAge() {
        fetch("https://api.agify.io/?name=" + name)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            setName(data.name);
            setAge(data.age)
        })
    }

    useEffect(() => {
        fetchAge();
    }, [])

    return (
        <>
            <h1 className="title">Age Predictor 🔮</h1>
            <h2>Enter a name and I will predict the age: </h2>
            <input
                type = "text"
                onChange={event => setName(event.target.value)}
                value={name}
            />
            <button onClick={validateSubmission}>Predict Age</button>
            <button onClick={() => setResult(false)}>Clear</button>
            <h2 className={result ? "predictedAge visible" : "predictedAge hidden"}>{name} is {age} years old.</h2>
        </>
    );
};

export default AgePredictorApp;