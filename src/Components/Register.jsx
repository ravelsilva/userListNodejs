import React, { useEffect, useState } from 'react';
import './Register.css';
import axios from 'axios';
import RegisterForm from './RegisterForm';
import UserList from './UserList';

const Register = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const baseUrl = 'http://localhost:3000/users';

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(baseUrl);
				setData(response.data);
			} catch (err) {
				console.log(err.message);
			} finally {
				setIsLoading(false);
			}
		}
		fetchData();
	}, []);

	const addUser = (name, idade, email) => {
		const itemAleatorio = Math.floor(Math.random() * 5000);
		const novoUser = {
			id: itemAleatorio,
			name: name,
			age: idade,
			email: email,
		};

		axios
			.post(baseUrl, novoUser)
			.then(() => setData((prevValue) => [novoUser, ...prevValue]));
	};

	async function removeUser(e) {
		const userRef = e.currentTarget.closest('li');
		const userId = userRef.getAttribute('id');

		try {
			// Excluir o usuário do servidor
			await axios.delete(`http://localhost:3000/users/${userId}`);

			// Recarregar a lista de usuários após a exclusão
			const response = await axios.get('http://localhost:3000/users');
			setData(response.data); // Atualize o estado com os dados mais recentes
		} catch (err) {
			console.error('Erro ao deletar usuário: ', err);
			console.log(
				'Erro ao deletar o usuário. Verifique a ID e tente novamente.'
			);
			console.log(userId);
		}
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="Register">
			<div className="center">
				<h1>Cadastro de Usuários</h1>
				<RegisterForm addUser={addUser} />
			</div>
			<UserList users={data} removeUser={removeUser} />
		</div>
	);
};

export default Register;
