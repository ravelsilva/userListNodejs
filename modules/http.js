// const http = require('http');

// //Definir porta

// // const port = 8080;

// //CRIAR SERVIDOR

// const server = http.createServer((request, response) => {
// 	//request - Objeto da requisição
// 	//response - Objeto da resposta

// 	if (request.url === '/home') {
// 		response.writeHead(200, { 'Content-Type': 'text/html' }); // O browser vai entender que estou enviando um HTML via end()
// 		response.end('<h1>Home Page</h1>');
// 	}
// 	if (request.url === '/users') {
// 		//Via node nós enviamos normalmente backends via JSON para serem consumidos pelo fronend

// 		response.writeHead(200, { 'Content-Type': 'application/JSON' });
// 		const users = [
// 			{
// 				name: 'Ravel Silva',
// 				email: 'ravel.test@email.com',
// 			},
// 			{
// 				name: 'Eliza Marques',
// 				email: 'eliza.test@email.com',
// 			},
// 		];
// 		response.end(JSON.stringify(users));
// 	}
// });

// //Colocar online

// server.listen(port, () => console.log(`Rodando na porta: ${port}!`));
