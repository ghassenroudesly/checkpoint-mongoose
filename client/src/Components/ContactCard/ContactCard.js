import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import c_photo from "../../assets/403017_avatar_default_head_person_unknown_icon.png";
import editContactPic from "../../assets/favpng_user-profile-icon-design.png";
import deleteContactPic from "../../assets/pngfind.com-profile-icon-png-1699926.png";
import { Container, Row, Col } from "react-bootstrap";
import {
	deleteContact,
	getContact,
	toogleTrue,
} from "../../JS/actions/contact";

import "./ContactCard.css";

const ContactCard = ({ contact }) => {
	const dispatch = useDispatch();

	return (
		<div className="our-team">
			<div className="picture">
				<img className="img-fluid" src={c_photo} alt="Contact Pic" />
			</div>
			<div className="team-content">
				<h3 className="name">{contact.name}</h3>
				<h4 className="phoneNumber">{contact.phoneNumber}</h4>
			</div>
			<Container style={{ width: "18rem" }}>
				<Row>
					<Col>
						<Link to={`/editContact/${contact._id}`}>
							<button className="mngBtn">
								<img
									src={editContactPic}
									alt="Edit Contact Pic"
									className="mngImg"
									onClick={() => {
										dispatch(toogleTrue());
										dispatch(getContact(contact._id));
									}}
								/>
							</button>
						</Link>
					</Col>
					<Col>
						<button className="mngBtn">
							<img
								src={deleteContactPic}
								alt="Delete Contact Pic"
								className="mngImg"
								onClick={() => dispatch(deleteContact(contact._id))}
							/>
						</button>
					</Col>
				</Row>
			</Container>
			<div className="social">
				<h4>{contact.email}</h4>
			</div>
		</div>
	);
};

export default ContactCard;
