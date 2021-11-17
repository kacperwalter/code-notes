import React from 'react';

const UsersListItem = ({ average, name, attendance }) => (
  <li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <button>X</button>
  </li>
);

export default UsersListItem;
