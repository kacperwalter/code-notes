import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';
import globalStyles from 'assets/GlobalStyles.module.scss';
import styles from './UsersList.module.scss';

const UsersList = () => (
  <div className={[styles.container, styles.hasBorder].join(' ')}>
    {/* <div className={globalStyles.box} /> */}
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </div>
);

export default UsersList;
