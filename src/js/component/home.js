import React from "react";

import Nav from "./Nav";
import Jumbotron from "./Jumbotron";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Nav />
			<Jumbotron />
		</>
	);
}
