const service = require("./leagues.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const hasProperties = require("../errors/hasProperties")(
	"league_name",
	"number_of_members"
);

async function create(req, res, next) {
	service
		.create(req.body.data)
		.then((data) => res.status(201).json({ data }))
		.catch(next);
}
async function list(req, res, next) {
	let leagues = await service.list();
	res.json({ data: leagues });
}

module.exports = {
	create: [hasProperties, asyncErrorBoundary(create)],
	list,
};
