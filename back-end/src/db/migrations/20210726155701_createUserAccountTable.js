exports.up = function (knex) {
	return knex.schema.createTable("users", (table) => {
		table.increments("user_id").primary().notNullable();
		table.string("username").unique().notNullable();
		table.string("email").unique().notNullable();
		table.string("password").notNullable();
		table.timestamps(true, true);
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("users");
};
