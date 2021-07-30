/**
 * Defines the router for Accounts resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./leagues.controller");

router
	.route("/info/:league_id")
	.get(controller.listByLeagueId)
	.all(methodNotAllowed);

router.route("/:user_id").get(controller.listById).all(methodNotAllowed);

router
	.route("/")
	.get(controller.listById)
	.post(controller.create)
	.all(methodNotAllowed);

module.exports = router;
