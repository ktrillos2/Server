const express = require("express");

class Server {
	constructor() {
		this.app = express();
        this.PORT=process.env.PORT
		this.routes();
	}

	routes() {
		this.app.get("/", (req, res) => {
			res.send("Hello World");
		});
	}

	listen() {
		this.app.listen(this.PORT, () => {
			console.log(`Server listening on port ${this.PORT}`);
		});
	}
}

module.exports = Server;
