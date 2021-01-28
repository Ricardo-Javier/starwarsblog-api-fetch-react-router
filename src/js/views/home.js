import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const buildRow = data =>
		data.map((item, index) => {
			return (
				<Card
					className="card col m-auto"
					key={index}
					img={""}
					title={item.name}
					description={""}
					btnLink={""}
					btnText={"+"}
					item={item}
				/>
			);
		});

	return (
		<div className="wrapper-body">
			<div className="wrapper-card">
				<h1 className="title">Planets</h1>
				<div className="scrolling-wrapper">{buildRow(store.planets)}</div>
			</div>
			<div className="wrapper-card">
				<h1 className="title">Characters</h1>
				<div className="scrolling-wrapper">{buildRow(store.people)}</div>
			</div>
			<div className="wrapper-card">
				<h1 className="title">Vehicles</h1>
				<div className="scrolling-wrapper">{buildRow(store.vehicles)}</div>
			</div>
		</div>
	);
};
