import React from "react";

export default function Cards() {
	let packages = [
		{
			picture:
				"https://benwhiteflorist.com/wp-content/uploads/2019/02/WimberleyRanch-rs-400x400.jpg",
			name: "Birthday Package",
			info: "There's no better place than your moms house :)"
		},
		{
			picture:
				"https://benwhiteflorist.com/wp-content/uploads/2019/02/Sultry-rs-400x400.jpg",
			name: "Thank you Package",
			info: "info2"
		},
		{
			picture:
				"https://i.odealarose.com/12/images/produits/roses-gold-rose-bouquet-ode-a-la-rose-400x400-25862.jpg",
			name: "Holiday Packages",
			info: "info3"
		}
	];

	return (
		<div className="card-deck" id="profiles">
			{packages.map((makecards, index) => {
				return (
					<div key={index} className="card">
						<img
							className="card-img-top"
							src={makecards.picture}
							alt="Card image cap"
						/>
						<div className="cardBody">
							<h5 className="cardTitle">{makecards.name}</h5>
							<p className="cardText">{makecards.info}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
