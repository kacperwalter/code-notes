import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: lightgray;
  }
`;

const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${(props) => (props.secondary ? '#e7e044' : '#c0c7d6')};
  border-radius: 50px;
  border: none;
  color: white;
`;

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <StyledButton>X</StyledButton>
    <StyledButton secondary>X</StyledButton>
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
