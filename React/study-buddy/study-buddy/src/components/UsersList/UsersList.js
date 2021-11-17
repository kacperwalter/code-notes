import React from 'react';
import { users } from 'data/users';

const UsersList = () => (
  <div>
    <ul>
      {users.map(({ name, average, attendance }) => (
        <li>
          <div>{average}</div>
          <div>
            <p>{name}</p>
            <p>{attendance}</p>
          </div>
          <button>X</button>
        </li>
      ))}
    </ul>
  </div>
);

export default UsersList;
