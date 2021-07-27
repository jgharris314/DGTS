exports.up = function (knex) {
	return knex.schema.createTable("league", (table) => {
		table.increments("league_id").primary().notNullable();
		table.string("league_name").notNullable();
		table.timestamps(true, true);
		table.integer("number_of_members").notNullable();
		table.specificType("member_list", "INT[]");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("league");
};
