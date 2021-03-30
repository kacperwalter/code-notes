import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import Average from 'components/atoms/Average/Average';
import { Wrapper } from './UserListItem.styles';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <Average avgData={average} />
    <div>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </div>
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    avarage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;