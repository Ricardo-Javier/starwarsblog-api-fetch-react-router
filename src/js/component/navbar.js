import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar">
			<div className="container">
				<a className="navbar-brand" href="#">
					<img className="logo" src="https://www.pngkey.com/png/full/0-9734_star-wars-logo-pixel-art.png" />
				</a>
				<div className="dropdown nl-auto">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<ul className="favorite">
							{store.favorites.map((favorite, index) => {
								return (
									<li
										className="favorites"
										onClick={() => {
											actions.deleteFavorites(favorite);
										}}
										key={index}>
										{favorite.name}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
