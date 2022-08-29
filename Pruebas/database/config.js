const mongoose = require("mongoose");

const dbConnection = async () => {
	try {
		mongoose.connect(process.env.MONGODB_ATLAS, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log("base de datos online");
	} catch (error) {
		console.log(error);
		throw new Error("error a la hora de incializar el proceso");
	}
};

module.exports = {
	dbConnection,
};
