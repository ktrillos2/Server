const express = require("express");
const cors = require("cors");


const {dbConnection}=require("../database/config")

class Server {
	constructor() {
		this.app = express();
		this.PORT = process.env.PORT;
		this.usuariosRoutePath = '/api/usuarios'
		
		//conectar a la base de datos

		this.conectarDB();

		//middleware
		this.middleware();

		//lectura y parseo del body
		this.app.use(express.json())

		//rutas de mi aplicacion
		this.routes();
	}

	async conectarDB() {
		await dbConnection();
	}

	middleware() {
		//CORS
		this.app.use(cors());
		//directorio Publico
		this.app.use(express.static("public"));
	}

	routes() {
		this.app.use(this.usuariosRoutePath, require('../routes/usuarios'))
	}

	listen() {
		this.app.listen(this.PORT, () => {
			console.log(`Server listening on port ${this.PORT}`);
		});
	}
}

module.exports = Server;
