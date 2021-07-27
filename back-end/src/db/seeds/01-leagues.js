const leagues = require("./01-leagues.json");
exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex
		.raw("TRUNCATE TABLE league RESTART IDENTITY CASCADE")
		.then(function () {
			return knex("league").insert(leagues);
		});
};
