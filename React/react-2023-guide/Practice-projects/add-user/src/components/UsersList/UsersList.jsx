import styled from 'styled-components'

import Section from '../UI/Section'

const List = styled.ul`
  li {
    list-style: circle;
  }
`

const UsersList = ({ users }) => {
  return (
    <Section>
      <List>
        {users.length === 0 ? (
          <p>No users added</p>
        ) : users.map(user => (
          <li key={user.id}>{user.username}, age {user.age}</li>
        ))}
      </List>
    </Section>
  )
}

export default UsersList