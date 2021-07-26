const knex = require("../db/connection");

async function authorization(username, password) {
	const res = await knex("users")
		.select("*")
		.where({ username: username, password: password });
	return res;
}
async function create(account) {
	const res = await knex("users").insert(account, "*");
	return res[0];
}
async function update(account_id, newAccountData) {
	const res = await knex("users")
		.select("*")
		.where({ account_id })
		.update(newAccountData, "*");
	return res[0];
}

module.exports = {
	authorization,
	create,
	update,
};
