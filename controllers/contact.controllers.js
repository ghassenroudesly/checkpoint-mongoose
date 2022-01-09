const addContact = async (req, res) => {
	try {
		const newContact = req.body;

		if (!newContact.email || !newContact.name) {
			return res.status(400).send({ msg: "name and email are required" });
		}

		const contactFind = await Contact.findOne({ email: newContact.email });
		if (contactFind) {
			return res.status(400).send({ msg: "contact already exists" });
		}

		const contactToAdd = new Contact(newContact);
		await contactToAdd.save();

		res.status(200).send({ msg: "Contact Added Successfully", contactToAdd });
	} catch (error) {
		res.status(400).send({ msg: "Can not add new contact", error });
	}
};

const getContacts = async (req, res) => {
	try {
		const listContacts = await Contact.find();
		res
			.status(200)
			.send({ msg: "This is the list of all contacts:", listContacts });
	} catch (error) {
		res.status(400).send({ msg: "Can not get contacts", error });
	}
};

const getOneContact = async (req, res) => {
	try {
		const { _id } = req.params;
		const contactFound = await Contact.find({ _id });
		res.status(200).send({ msg: "Contact Found:", contactFound });
	} catch (error) {
		res.status(400).send({ msg: "Can not get this contact", error });
	}
};

const deleteContact = async (req, res) => {
	try {
		const contactID = req.params.id;
		await Contact.deleteOne({ _id: contactID });
		res.status(200).send({ msg: "Contact Deleted Succesfully" });
	} catch (error) {
		res.status(400).send({ msg: "Can not delete this contact", error });
	}
};

const updateContact = async (req, res) => {
	try {
		const { _id } = req.params;
		const updateContact = req.body;
		let results = await Contact.updateOne(
			{ _id },
			{ $set: { ...updateContact } }
		);
		if (results.modifiedCount === 0) {
			return res.status(400).send({ msg: "Contact Already Updated" });
		}
		res.status(200).send({ msg: "Contact Updated Succesfully" });
	} catch (error) {
		res.status(400).send({ msg: "Can not update this contact", error });
	}
};

module.exports = controllers = {
	addContact,
	getContacts,
	getOneContact,
	deleteContact,
	updateContact,
};