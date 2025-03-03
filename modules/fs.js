const fs = require('fs');
const path = require('path');

//Criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (error) => {
	if (error) {
		return console.log('Erro', error);
	}
	console.log('Create Folder');
});
//-------------------------------------------//
//Criar arquivo
fs.writeFile(
	//Assíncrono
	path.join(__dirname, '/test', 'test.txt'),
	'First text Node! ',
	(error) => {
		if (error) {
			return console.log('Erro: ', error);
		}
		console.log('Arquivo criado com sucesso!');
		fs.appendFile(
			path.join(__dirname, './test', 'test.txt'),
			'Add text in archive ',
			(error) => {
				if (error) {
					return console.log('Erro: ', error);
				}
				console.log('Item adicionado ao arquivo.');
			}
		);
		fs.readFile(
			path.join(__dirname, '/test', 'test.txt'),
			'utf8',
			(error, data) => {
				if (error) {
					return console.log('Erro:', error);
				}
				console.log(data);
			}
		);
	}
);
//-------------------------------------------//
//Adicionar à um arquivo

//Ler arquivo
