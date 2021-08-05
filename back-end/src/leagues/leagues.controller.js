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

async function addMember(req, res, next) {
	let user_id = req.body.data.user_id;
	let league_id = req.body.data.league_id;

	const addedMember = await service.addMember(user_id, league_id);
	addMember
		? res.json({ data: addedMember })
		: next({
				status: 404,
				message: `Account Id: ${id} Not Added to League`,
		  });
}

module.exports = {
	create: [hasProperties, asyncErrorBoundary(create)],
	listById,
	listByLeagueId,
	addMember: [asyncErrorBoundary(addMember)],
};
