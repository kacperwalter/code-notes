import styled from 'styled-components'

import Section from '../UI/Section'

const List = styled.ul`
  li {
    list-style: circle;
  }
`

const UsersList = () => {
  return (
    <Section>
      <List>
        <li>Kacper Walter, age 21</li>
      </List>
    </Section>
  )
}

export default UsersList