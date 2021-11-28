import React from 'react';
import PropTypes from 'prop-types';
import styles from './UsersListItem.module.scss';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <li className={`${styles.user} ${styles.hasBorder}`}>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <button>X</button>
  </li>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    avarage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
