import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modal, Button } from "react-bootstrap";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<Modal centered className="modal" show={props.show} onHide={props.handleClose}>
			<Modal.Header className="modal-header" closeButton>
				<Modal.Title>{props.item.name}</Modal.Title>
			</Modal.Header>
			<Modal.Body className="modal-body">{props.description}</Modal.Body>
			<Modal.Footer className="modal-footer">
				<Button variant="secondary" onClick={props.handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={props.handleClose}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

Single.propTypes = {
	handleClose: PropTypes.func,
	show: PropTypes.bool,
	item: PropTypes.object,
	description: PropTypes.string
};
