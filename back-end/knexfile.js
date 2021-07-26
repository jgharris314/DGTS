require("dotenv").config();
const path = require("path");

const {
	DATABASE_URL = "postgres://bszctcsa:AarxyuWX7hcC3lKw6tYSqi2aS2NCcWwe@chunee.db.elephantsql.com/bszctcsa",
	DATABASE_URL_DEVELOPMENT = "postgres://jlrcqlvd:y6gDGuJ78K1P9v4CIDoFgEU3TT45O9mf@chunee.db.elephantsql.com/jlrcqlvd",
	DATABASE_URL_TEST = "postgres://gjnggxeh:OafKgpIZHC1mspOay5fFpXMXANKUV5sj@chunee.db.elephantsql.com/gjnggxeh",
	DATABASE_URL_PREVIEW = "postgres://qhhiqudf:6Jt2-0xsHwRR0d-xM8ZIHvb8E23CP83x@chunee.db.elephantsql.com/qhhiqudf",
	DEBUG,
} = process.env;

module.exports = {
	development: {
		client: "postgresql",
		pool: { min: 1, max: 5 },
		connection: DATABASE_URL_DEVELOPMENT,
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
		debug: !!DEBUG,
	},
	test: {
		client: "postgresql",
		pool: { min: 1, max: 5 },
		connection: DATABASE_URL_TEST,
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
		debug: !!DEBUG,
	},
	preview: {
		client: "postgresql",
		pool: { min: 1, max: 5 },
		connection: DATABASE_URL_PREVIEW,
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
		debug: !!DEBUG,
	},
	production: {
		client: "postgresql",
		pool: { min: 1, max: 3 },
		connection: DATABASE_URL,
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
		debug: !!DEBUG,
	},
};
