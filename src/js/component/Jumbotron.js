import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export default function Jumbotron() {
	return (
		<div className="Jumbo">
			<div className="jumbotron jumbotron1">
				<h1 className="display-4 heading">
					Dulce
					{"'"}s Flower Market
				</h1>
				<p className="lead" />
				<hr className="my-4" />
				<p />
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</div>
		</div>
	);
}
