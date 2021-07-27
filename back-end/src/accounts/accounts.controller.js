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
		console.log("username:", username, "password:", password);
		service
			.authorization(username, password)
			.then((results) => {
				console.log("results", results);
				if (results.length > 0) {
					req.session.loggedin = true;
					req.session.username = username;
					res.locals.session = req.session;
					res.json(res.locals.session);
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
	let id = req.body.data.user_id;

	const accountById = await service.listAccountById(id);
	accountById
		? res.json({ data: accountById })
		: next({
				status: 404,
				message: `Account Id: ${id} Not Found`,
		  });
}

module.exports = {
	authorize: [asyncErrorBoundary(authorize)],
	create: [hasProperties, asyncErrorBoundary(create)],
	list,
	listAccountById,
};
