import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';

// const UsersList = () => (
//   <Wrapper>
//     <ul>
//       {users.map((userData, i) => (
//         <UsersListItem index={i} userData={userData} />
//       ))}
//     </ul>
//   </Wrapper>
// );

class UsersList extends React.Component {
  state = {
    isUsersList: true,
  };

  toggleListTitle = () => {
    this.setState({ isUsersList: !this.state.isUsersList });
  };

  render() {
    return (
      <Wrapper>
        <h1>{this.state.isUsersList ? `User's List` : 'Students List'}</h1>
        <button onClick={() => this.toggleListTitle()}>Change title</button>
        <ul>
          {users.map((userData, i) => (
            <UsersListItem index={i} userData={userData} />
          ))}
        </ul>
      </Wrapper>
    );
  }
}

export default UsersList;
