import { useState } from 'react'
import styled from 'styled-components'

import ErrorModal from './ErrorModal'

const Form = styled.form`
  padding: 5rem;

  p {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.7rem;
  }

  div {
    padding: 1rem;

    button {
      background: white;
      padding: 0.8rem;
      border: 1px solid black;

      &:hover {
        cursor: pointer;
        background: lightgray;
      }
    }
  }
`

const Input = styled.input`
  max-width: ${[props => props.shorter ? '15rem' : '30rem']};
  height: 3rem;
`

const AddUserForm = ({ onSaveForm }) => {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [isErrorVisible, setIsErrorVisible] = useState(false)
  const [isUsernameValid, setIsUsernameValid] = useState(true)
  const [isAgeValid, setIsAgeValid] = useState(true)

  const setUsernameHandler = event => setUsername(event.target.value)
  const setAgeHandler = event => setAge(event.target.value)

  const toggleErrorVisibility = () => isErrorVisible ? setIsErrorVisible(false) : setIsErrorVisible(true);

  const validateData = data => {
    if (age < 18) {
      toggleErrorVisibility();
    } else {
      onSaveForm(data)
    }
  }

  const submitFormHandler = event => {
    event.preventDefault();

    const userData = {
      id: Math.random().toString(),
      username: username,
      age: age,
    }

    validateData(userData)
  }

  return (
    <>
      <Form onSubmit={submitFormHandler}>
        <fieldset>
          <legend>Add user to list</legend>
          <p>
            <label htmlFor='username'>Username</label>
            <Input type='text' id='username' onChange={setUsernameHandler} />
          </p>
          <p>
            <label htmlFor='age'>Age</label>
            <Input shorter='true' type='number' id='age' onChange={setAgeHandler} />
          </p>
          <div>
            <button type='submit'>Add user</button>
          </div>
        </fieldset>
      </Form>
      {isErrorVisible && <ErrorModal />}
    </>
  )
}

export default AddUserForm