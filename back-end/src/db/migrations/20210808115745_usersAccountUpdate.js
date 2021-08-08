exports.up = function (knex) {
	return knex.schema.alterTable("users", (table) => {
		table.integer("previous_global_rank");
		table.string("first_name");
		table.string("last_name");
	});
};

exports.down = function (knex) {
	return knex.schema.alterTable("users", (table) => {
		table.dropColumn("previous_global_rank");
		table.dropColumn("first_name");
		table.dropColumn("last_name");
	});
};
