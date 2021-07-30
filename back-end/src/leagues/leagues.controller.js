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
async function listById(req, res, next) {
	const id = req.params.user_id;
	let leagues = await service.listById(id);
	res.json({ data: leagues });
}

async function listByLeagueId(req, res, next) {
	const id = req.params.league_id;
	let leagues = await service.listByLeagueId(id);
	res.json({ data: leagues });
}

module.exports = {
	create: [hasProperties, asyncErrorBoundary(create)],
	listById,
	listByLeagueId,
};
