import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';

class UsersList extends React.Component {
  state = {
    isUsersList: true,
    users,
  };

  toggleListTitle = () => {
    this.setState((prevState) => ({ isUsersList: !prevState.isUsersList }));
  };

  render() {
    const { title } = this.props;
    const { isUsersList } = this.state;

    return (
      <Wrapper>
        <h1>{this.state.isUsersList ? `User's List` : 'Students List'}</h1>
        <button onClick={() => this.toggleListTitle()}>Change title</button>
        <ul>
          {this.state.users.map((userData, i) => (
            <UsersListItem index={i} userData={userData} />
          ))}
        </ul>
      </Wrapper>
    );
  }
}

export default UsersList;
