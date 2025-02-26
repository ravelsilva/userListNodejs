import React, { useState } from 'react';

const RegisterForm = ({ addUser }) => {
	const [name, setName] = useState('');
	const [idade, setIdade] = useState('');
	const [email, setEmail] = useState('');

	const validateEmail = () => {
		let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	const handleSubmit = () => {
		if (name !== '' && idade !== '' && email !== '' && validateEmail()) {
			addUser(name, idade, email);
			setName('');
			setIdade('');
			setEmail('');
		} else {
			alert('Conteúdo incompleto.');
		}
	};

	return (
		<form className="form" onSubmit={(e) => e.preventDefault()}>
			<input
				type="text"
				id="name"
				placeholder="Nome"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="number"
				id="age"
				placeholder="Idade"
				value={idade}
				onChange={(e) => setIdade(e.target.value)}
			/>
			<input
				type="email"
				id="email"
				placeholder="E-mail"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button type="submit" onClick={handleSubmit}>
				Cadastrar
			</button>
		</form>
	);
};

export default RegisterForm;
