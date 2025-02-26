import React from 'react';

const UserList = ({ users, removeUser }) => {
  return (
    <div className="users">
      <ul>
        {users.map((user) => (
          <li className="map" key={user.id} id={user.id}>
            <p>Nome: {user.name} </p>
            <p>Idade: {user.age}</p>
            <p>E-mail: {user.email}</p>
            <button className="remove" onClick={(e) => removeUser(e)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
