import axios from "axios";
import {
	GET_CONTACTS_FAIL,
	GET_CONTACTS_LOAD,
	GET_CONTACTS_SUCCESS,
	DELETE_CONTACT_SUCCESS,
	DELETE_CONTACT_FAIL,
	ADD_CONTACT_SUCCESS,
	ADD_CONTACT_FAIL,
	TOOGLE_TRUE,
	TOOGLE_FALSE,
	GET_CONTACT_LOAD,
	GET_CONTACT_SUCCESS,
	GET_CONTACT_FAIL,
	EDIT_CONTACT_SUCCESS,
	EDIT_CONTACT_FAIL,
} from "../actionstypes/contact";

export const getContacts = () => async (dispatch) => {
	dispatch({ type: GET_CONTACTS_LOAD });
	try {
		let result = await axios.get("/api/contacts"); //http://localhost:5000/api/contacts/
		dispatch({
			type: GET_CONTACTS_SUCCESS,
			payload: result.data.listContacts,
		});
	} catch (error) {
		dispatch({
			type: GET_CONTACTS_FAIL,
			payload: error.response.data,
		});
	}
};

export const deleteContact = (contactId) => async (dispatch) => {
	try {
		await axios.delete(`/api/contacts/${contactId}`);
		dispatch({ type: DELETE_CONTACT_SUCCESS });
		dispatch(getContacts());
	} catch (error) {
		dispatch({ type: DELETE_CONTACT_FAIL, payload: error.response.data });
	}
};

export const addContact = (newContact) => async (dispatch) => {
	try {
		await axios.post("/api/contacts", newContact);
		dispatch({ type: ADD_CONTACT_SUCCESS });
		dispatch(getContacts());
	} catch (error) {
		dispatch({ type: ADD_CONTACT_FAIL, payload: error.response.data });
	}
};

export const toogleTrue = () => {
	return { type: TOOGLE_TRUE };
};

export const toogleFalse = () => {
	return { type: TOOGLE_FALSE };
};

export const getContact = (contactId) => async (dispatch) => {
	dispatch({ type: GET_CONTACT_LOAD });

	try {
		let result = await axios.get(`/api/contacts/${contactId}`);
		dispatch({ type: GET_CONTACT_SUCCESS, payload: result.data.contactFound });
	} catch (error) {
		dispatch({ type: GET_CONTACT_FAIL, payload: error.response.data });
	}
};

export const editContact = (contactId, newContact) => async (dispatch) => {
	try {
		await axios.put(`/api/contacts/${contactId}`, newContact);
		dispatch({ type: EDIT_CONTACT_SUCCESS });
		dispatch(getContacts());
	} catch (error) {
		dispatch({ type: EDIT_CONTACT_FAIL, payload: error.response.data });
	}
};
