import React, {useEffect, useState} from "react";
import CatApp from "./catApp";
import AgePredictorApp from "./agePredictorApp";

//create your first component
const Home = () => {

	// const randomFact = fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		console.log(data)
	// 	})

	return (
		<body>
			<CatApp />
			<AgePredictorApp />
		</body>
	);
	
	};

export default Home;
