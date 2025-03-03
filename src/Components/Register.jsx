import React, { useEffect, useRef, useState } from 'react';
import './Register.css';
import axios from 'axios';
import RegisterForm from './RegisterForm';
import UserList from './UserList';
import api from './services/api';
const Register = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await api.get('/users');
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
		// const itemAleatorio = Math.floor(Math.random() * 5000);
		const novoUser = {
			// id: itemAleatorio,
			name: name,
			age: idade,
			email: email,
		};

		api.post('/users', novoUser).then(() =>
			setData((prevValue) => [novoUser, ...prevValue])
		);
	};

	async function removeUser(id) {
		try {
			await api.delete(`/users/${id}`);
			setData((prevData) => prevData.filter((user) => user._id !== id));
		} catch (err) {
			console.error('Erro ao deletar usuário: ', err);
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
