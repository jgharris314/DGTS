const service = require("./accounts.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const hasProperties = require("../errors/hasProperties")(
	"username",
	"email",
	"password",
	"pdga_number"
);

async function authorize(req, res, next) {
	const username = req.body.data.username;
	const password = req.body.data.password;

	if (username && password) {
		service
			.authorization(username, password)
			.then((results) => {
				if (results.length > 0) {
					req.session.loggedin = true;
					req.session.username = username;
					req.session.pdga_number = results[0].pdga_number;
					req.session.account_type = results[0].account_type;
					req.session.nice = "nice";
					req.session.user_id = results[0].user_id;
					req.session.first_name = results[0].first_name;
					res.locals.session = req.session;

					res.json({ data: res.locals.session });
				} else {
					res.send("Invalid Username or Password");
				}
				res.end();
			})
			.catch(next);
	} else {
		res.send("Please enter a Username and Password");
		res.end();
	}
}

async function create(req, res, next) {
	service
		.create(req.body.data)
		.then((data) => res.status(201).json({ data }))
		.catch(next);
}

async function list(req, res, next) {
	let accounts = await service.list();
	res.json({ data: accounts });
}

async function listAccountById(req, res, next) {
	let id = req.params.user_id;

	const accountById = await service.listAccountById(id);
	accountById
		? res.json({ data: accountById })
		: next({
				status: 404,
				message: `Account Id: ${id} Not Found`,
		  });
}

async function listAccountByUsername(req, res, next) {
	let username = req.params.username;

	const accountByUsername = await service.listAccountByUsername(username);
	accountByUsername
		? res.json({ data: accountByUsername })
		: next({
				status: 404,
				message: `Username: ${username} Not Found`,
		  });
}

async function listUsersInLeague(req, res, next) {
	let accounts = await service.listUsersInLeague(req.body.data.member_list);
	res.json({ data: accounts.rows });
}

module.exports = {
	authorize: [asyncErrorBoundary(authorize)],
	create: [hasProperties, asyncErrorBoundary(create)],
	list,
	listAccountById,
	listAccountByUsername: [asyncErrorBoundary(listAccountByUsername)],
	listUsersInLeague,
};
