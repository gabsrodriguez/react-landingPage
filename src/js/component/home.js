import React from "react";

import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Nav />
			<Jumbotron />
			<Cards />
		</>
	);
}
