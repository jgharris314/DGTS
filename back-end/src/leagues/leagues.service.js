const knex = require("../db/connection");

async function create(league) {
	const res = await knex("league").insert(league, "*");
	return res[0];
}

async function list() {
	return knex("league").select("*");
}

module.exports = {
	create,
	list,
};
