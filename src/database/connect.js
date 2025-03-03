const mongoose = require('mongoose');

const connectToDatabase = async () => {
	await mongoose
		.connect(
			`mongodb+srv://${process.env.MONGODB_USER}:${encodeURIComponent(
				process.env.MONGODB_PASSWORD
			)}@clusternodejs.ubjk5.mongodb.net/`
		)
		.then(console.log('Conexão efetuada com sucesso!'))
		.catch((error) => {
			console.log('Ocorreu um erro ao realizar a conexão! Erro: ', error);
		});
};
module.exports = connectToDatabase;
