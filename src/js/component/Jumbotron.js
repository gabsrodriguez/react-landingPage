import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export default function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4 heading">Dulce's Flower Market</h1>
			<p className="lead" />
			<hr className="my-4" />
			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Learn more
			</a>
		</div>
	);
}
