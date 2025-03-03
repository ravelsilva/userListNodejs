const cors = require('cors');
const express = require('express');

const UserModel = require('../src/models/user.model');
const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.set('view engine', 'ejs'); //Falando pro express para usar como view engine o EJS
app.set('views', 'src/views'); // local onde estão as views

// Middleware para ler o corpo da requisição -> Funções que rodam antes das requisições
app.use(express.json()); // Para poder ler dados no formato JSON

// app.use((req, res, next) => {
// 	//next deixa o express seguir a vida dele
// 	console.log(`Request Type ${req.method}`);
// 	console.log(`Content Type ${req.headers['content-type']}`);
// 	console.log(`Data: ${new Date()}`);

// 	next();
// });

//Enviar view
app.get('/views/users', async (req, res) => {
	const users = await UserModel.find({});
	res.render('index', { users });
});
app.get('/home', (request, response) => {
	response.contentType('text/html');
	response.status(200).send('<h1>Send Node Title!</h1>');
});

// Puxar todos os usuários
app.get('/users', async (req, res) => {
	try {
		const users = await UserModel.find({});
		res.status(200).json(users);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

//Puxar um usuário apenas pelo ID
app.get('/users/:id', async (req, res) => {
	try {
		const id = req.params.id; //Acessar paramêtro
		const user = await UserModel.findById(id);
		return res.status(200).json(user);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

// Criar um novo usuário no banco de dados
app.post('/users', async (req, res) => {
	try {
		// Criar usuário a partir dos dados recebidos no corpo da requisição
		const user = await UserModel.create(req.body);
		res.status(201).json(user);
	} catch (error) {
		res.status(500).send({ message: 'Erro ao criar usuário', error });
	}
});

//Atualizar usuário
app.patch('/users/:id', async (req, res) => {
	//Lembrar de passar o ID na rota. /users/:id
	try {
		const id = req.params.id;
		const users = await UserModel.findByIdAndUpdate(id, req.body, {
			new: true,
			//Se ñ passar o new, ele vai atualizar, mas ñ vai mostrar
		});
		//Precisa receber 2 parâmetros, o ID e de onde vai atualizar o id, que é o BODY da requisição no postman
		res.status(200).json(users);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

//Deletar usuário
app.delete('/users/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const users = await UserModel.findByIdAndDelete(id);
		return res.status(200).json(users);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});
const port = 8080;
app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
