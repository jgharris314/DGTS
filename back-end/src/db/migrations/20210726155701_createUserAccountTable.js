exports.up = function (knex) {
	return knex.schema.createTable("users", (table) => {
		table.increments("user_id").primary().notNullable();
		table.string("username").unique().notNullable();
		table.string("email").unique().notNullable();
		table.string("password").notNullable();
		table.timestamps(true, true);
		table.specificType("leagues", "INT[]");
		table.integer("pdga_number").notNullable().unique();
		table.integer("global_rank").unique();
		table.string("account_type").defaultTo("player");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("users");
};
