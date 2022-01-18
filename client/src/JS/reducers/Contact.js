import {
	ADD_CONTACT_FAIL,
	DELETE_CONTACT_FAIL,
	GET_CONTACTS_FAIL,
	GET_CONTACTS_LOAD,
	GET_CONTACTS_SUCCESS,
	GET_CONTACT_FAIL,
	GET_CONTACT_LOAD,
	GET_CONTACT_SUCCESS,
	TOOGLE_FALSE,
	TOOGLE_TRUE,
} from "../actionstypes/contact";

const initState = {
	listContacts: [],
	load: false,
	errors: null,
	edit: false,
	contact: {},
};

export const contactReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case GET_CONTACTS_LOAD:
			return { ...state, load: true };
		case GET_CONTACTS_SUCCESS:
			return { ...state, load: false, listContacts: payload };
		case GET_CONTACTS_FAIL:
			return { ...state, load: false, errors: payload };

		case DELETE_CONTACT_FAIL:
			return { ...state, errors: payload };
		case ADD_CONTACT_FAIL:
			return { ...state, errors: payload };

		case TOOGLE_TRUE:
			return { ...state, edit: true };
		case TOOGLE_FALSE:
			return { ...state, edit: false };

		case GET_CONTACT_LOAD:
			return { ...state, load: true };
		case GET_CONTACT_SUCCESS:
			return { ...state, load: false, contact: payload };
		case GET_CONTACT_FAIL:
			return { ...state, load: false, errors: payload };
		default:
			return state;
	}
};

export default contactReducer;
