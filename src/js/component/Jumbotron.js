import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export default function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4 heading text-center">
				Dulce
				{"'"}s Flower Market
			</h1>
			<p className="lead" />
			<hr className="my-4" />
			<p />
			<a className="btn btn-primary btn-lg btn1" href="#" role="button">
				Place an Order
			</a>
		</div>
	);
}
