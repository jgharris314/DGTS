/**
 * Defines the router for Accounts resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./accounts.controller");

router.route("/authorize").post(controller.authorize).all(methodNotAllowed);

router.route("/").post(controller.create).all(methodNotAllowed);

module.exports = router;
