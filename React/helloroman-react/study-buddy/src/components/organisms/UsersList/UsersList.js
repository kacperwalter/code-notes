import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';

class UsersList extends React.Component {
  state = {
    users,
  };

  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    this.setState({ users: filteredUsers });
  };

  render() {
    return (
      <Wrapper>
        <ul>
          {this.state.users.map((userData, i) => (
            <UsersListItem deleteUser={this.deleteUser} index={i} userData={userData} />
          ))}
        </ul>
      </Wrapper>
    );
  }
}

export default UsersList;
