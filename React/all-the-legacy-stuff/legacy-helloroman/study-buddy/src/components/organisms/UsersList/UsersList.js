import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users) {
        resolve([...users]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

class UsersList extends React.Component {
  state = {
    users: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    mockAPI().then((data) => {
      this.setState({ isLoading: false });
      this.setState({ users: data });
    });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.isLoading !== this.state.isLoading) {
      console.log('Loading state has changed');
    }
  }

  componentWillUnmount() {}

  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    this.setState({ users: filteredUsers });
  };

  render() {
    return (
      <Wrapper>
        <h1>{this.state.isLoading ? 'Loading...' : ''}</h1>
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
