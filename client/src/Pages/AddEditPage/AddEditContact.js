import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { addContact, editContact } from "../../JS/actions/contact";

import addContactPic from "../../assets/PinClipart.com_broomstick-clipart_787887.png";
import editContactPic from "../../assets/favpng_user-profile-icon-design.png";

import "./AddEditContact.css";

const AddEditContact = () => {
	const [contact, setContact] = useState({
		name: "",
		email: "",
		phoneNumber: "",
	});
	const edit = useSelector((state) => state.contactReducer.edit);
	const contactFil = useSelector((state) => state.contactReducer.contact);
	const dispatch = useDispatch();
	console.log(typeof contactFil);
	console.log(contactFil);
	console.log(contact);

	useEffect(() => {
		edit
			? setContact(contactFil)
			: // console.log(contactFil)
			  setContact({ name: "", email: "", phoneNumber: "" });
	}, [edit, contactFil]);

	const handleChange = (e) => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	return (
		<div className="formContainer">
			{edit ? <h1>Edit contact</h1> : <h1>Add contact</h1>}
			<Form>
				<Form.Control
					type="text"
					placeholder="Enter Name"
					name="name"
					value={contact.name}
					onChange={handleChange}
				/>
				<Form.Text className="text-muted">Name is required</Form.Text>
				<br />
				<Form.Control
					type="email"
					placeholder="Enter Email"
					name="email"
					value={contact.email}
					onChange={handleChange}
				/>
				<Form.Text className="text-muted">Email is required</Form.Text>
				<br />
				<Form.Control
					type="number"
					placeholder="Enter Phone Number"
					name="phoneNumber"
					value={contact.phoneNumber}
					onChange={handleChange}
				/>
			</Form>
			{edit ? (
				<Link to="/">
					<button className="editBtn">
						<img
							src={editContactPic}
							alt="Edit Contact Pic"
							className="editImg "
							onClick={() => dispatch(editContact(contact._id, contact))}
						/>
					</button>
				</Link>
			) : (
				<Link to="/">
					<button className="addBtn">
						<img
							src={addContactPic}
							alt="Add Contact Pic"
							className="addImg "
							onClick={() => dispatch(addContact(contact))}
						/>
					</button>
				</Link>
			)}
		</div>
	);
};

export default AddEditContact;
