import { users } from 'data/users';
import styled from 'styled-components';
import UsersListItem from 'components/UsersListItem/UsersListItem';

// to moze nazywac sie wrapper, mimo uzycia tej nazwy w innej czesci projektu, poniewaz kazdy styled-component w innym pliku dostaje finalnie inna nazwe w DOM
const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

const UsersList = () => (
  <Wrapper>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </Wrapper>
);

export default UsersList;
