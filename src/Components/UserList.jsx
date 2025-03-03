import React from 'react';

const UserList = ({ users, removeUser }) => {
	return (
		<div className="users">
			<ul>
				{users.map((user, i) => (
					<li className="map" key={i}>
						{console.log(user._id)}
						<p>Nome: {user.name} </p>
						<p>Idade: {user.age}</p>
						<p>E-mail: {user.email}</p>
						<button
							className="remove"
							onClick={() => removeUser(user._id)}
						>
							X
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
