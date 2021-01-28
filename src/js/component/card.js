import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Single } from "../views/single";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="card">
			<img src={props.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a className="btn" onClick={handleShow}>
					{props.btnText}
				</a>
				<Single handleClose={handleClose} show={show} item={props.item} />
				<a className="btn-heart">
					<FontAwesomeIcon icon={faHeart} onClick={() => actions.addFavorites(props.item)} />
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	btnLink: PropTypes.string,
	btnText: PropTypes.string,
	item: PropTypes.object
};

export default Card;
