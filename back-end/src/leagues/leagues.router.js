/**
 * Defines the router for Accounts resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./leagues.controller");

router
	.route("/")
	.get(controller.list)
	.post(controller.create)
	.all(methodNotAllowed);

module.exports = router;