const express = require("express");
const {
	addContact,
	getContacts,
	getOneContact,
	deleteContact,
	updateContact,
} = require("../controllers/contact.controllers");
const Contact = require("../model/Contact");

const router = express.Router();

/**
 * @desc: add new contact
 * @method: POST
 * @path :'http://localhost:5000/api/api/contacts/'
 * @data : req.body
 */

router.post("/", addContact);

/**
 * @desc: Get all contacts
 * @method: GET
 * @path :'http://localhost:5000/api/api/contacts/'
 * @data : no data needed
 */

router.get("/", getContacts);

/**
 * @desc: Get one contact
 * @method: GET
 * @path :'http://localhost:5000/api/api/contacts/'
 * @data : req.params
 */

router.get("/:_id", getOneContact);

/**
 * @desc: Delete one contact
 * @method: DELETE
 * @path :'http://localhost:5000/api/api/contacts/:id'
 * @data : req.params
 */

router.delete("/:id", deleteContact);

/**
 * @desc: Update one contact
 * @method: PUT
 * @path :'http://localhost:5000/api/api/contacts/:_id'
 * @data : req.params, req.body
 */

router.put("/:_id", updateContact);
module.exports = router;