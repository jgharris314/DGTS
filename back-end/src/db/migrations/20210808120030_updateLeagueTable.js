exports.up = function (knex) {
	return knex.schema.alterTable("league", (table) => {
		table.specificType("previous_standings", "INT[]");
	});
};

exports.down = function (knex) {
	return knex.schema.alterTable("league", (table) => {
		table.dropColumn("previous_standings");
	});
};
