import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import Average from 'components/atoms/Average/Average';
import { Wrapper } from './UserListItem.styles';

const showIndex = (index) => alert(`This is student #${index + 1}`);

const UsersListItem = ({ index, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <Average avgData={average} />
    <div className="textField">
      <p className="nameField">{name}</p>
      <p className="attendanceField">attendance: {attendance}</p>
    </div>
    <Button onClick={() => showIndex(index)} />
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
