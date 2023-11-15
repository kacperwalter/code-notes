import styled from 'styled-components'

export const Button = styled.button`
  width: 100px;
  height: 100px;
  background-color: ${props => props.backgroundColor};

  &:hover {
    background-color: red;
    cursor: pointer;
  }
`
