import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toogleFalse } from "../../JS/actions/contact";

import "./NavBar.css";

const NavBar = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<Container style={{ width: "35rem" }}>
				<Row>
					<Col>
						<Link to="/" style={{ textDecoration: "none" }}>
							<button className="navButton">Contact List</button>
						</Link>
					</Col>
					<Col>
						<Link to="/addContact" style={{ textDecoration: "none" }}>
							<button
								className="navButton"
								onClick={() => dispatch(toogleFalse())}
							>
								Add Contact
							</button>
						</Link>
					</Col>
				</Row>
			</Container>
			<br />
		</div>
	);
};

export default NavBar;
