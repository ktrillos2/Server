const express = require("express");
const cors = require("cors");

const { dbConnection } = require("../database/config");

class Server {
	constructor() {
		this.app = express();
		this.PORT = process.env.PORT;
		this.path = "/";

		this.connect();

		this.middleware();

		this.app.use(express.json())

		this.routes();
	}

	async connect() {
		await dbConnection();
	}

	middleware() {
		this.app.use(express.static("public"));
	}

	routes() {
		this.app.use(this.path, require("../routes/usuarios"));
	}

	listen() {
		this.app.listen(this.PORT, () => {
			console.log(`Server listening on port ${this.PORT}`);
		});
	}
}

module.exports = Server;
