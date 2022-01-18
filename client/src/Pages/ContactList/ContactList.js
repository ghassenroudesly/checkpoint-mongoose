import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactCard from "../../Components/ContactCard/ContactCard";
import { getContacts } from "../../JS/actions/contact";
import LodingPage from "../LoadingPage/LodingPage";

import "./ContactList.css";

const ContactList = () => {
	const listContacts = useSelector(
		(state) => state.contactReducer.listContacts
	);

	const load = useSelector((state) => state.contactReducer.load);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getContacts());
	}, [dispatch]);

	return load ? (
		<LodingPage />
	) : (
		<div className="contactContainer">
			{listContacts.map((contact) => (
				<ContactCard contact={contact} key={contact._id} />
			))}
		</div>
	);
};

export default ContactList;
