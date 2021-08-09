exports.up = function (knex) {
	return knex.schema.alterTable("league", (table) => {
		//   table.raw("")
	});
};

exports.down = function (knex) {};
