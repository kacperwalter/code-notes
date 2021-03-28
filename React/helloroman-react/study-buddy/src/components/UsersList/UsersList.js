import React from 'react';
import { users } from 'data/users';
import PropTypes from 'prop-types';

const UsersList = () => (
  <div>
    <ul>
      {users.map(({ name, average, attendance }) => (
        <li>
          <div>{average}</div>
          <div>
            <p>{name}</p>
            <p>attendance: {attendance}</p>
          </div>
          <button>X</button>
        </li>
      ))}
    </ul>
  </div>
);

// UsersList.PropTypes = {};

export default UsersList;
