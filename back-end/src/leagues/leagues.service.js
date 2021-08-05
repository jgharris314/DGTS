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

async function addMember(user_id, league_id) {
	return knex("league")
		.update({
			member_list: knex.raw("array_append(member_list, ?)", [user_id]),
		})
		.where({ league_id: league_id });
}

module.exports = {
	create,
	listById,
	listByLeagueId,
	addMember,
};
