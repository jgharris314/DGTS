const knex = require("../db/connection");

async function create(league) {
	const res = await knex("league").insert(league, "*");
	return res[0];
}

async function listById(id) {
	return knex("league").select("*").where({ owner_id: id });
}

async function listByLeagueId(id) {
	return knex("league").select("*").where({ league_id: id }).first();
}

module.exports = {
	create,
	listById,
	listByLeagueId,
};
