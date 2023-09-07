import { useState } from 'react'
import styled from 'styled-components'

import ErrorModal from './ErrorModal'

import Button from '../UI/Button'

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
  }
`

const Input = styled.input`
  max-width: ${[props => props.shorter ? '15rem' : '30rem']};
  border: 1px solid ${[props => props.isValid ? 'black' : 'red']};
  height: 3rem;
`

const AddUserForm = ({ onSaveForm }) => {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [isErrorVisible, setIsErrorVisible] = useState(false)
  const [isUsernameValid, setIsUsernameValid] = useState(true)
  const [isAgeValid, setIsAgeValid] = useState(true)

  const setUsernameHandler = event => setUsername(event.target.value)

  const setAgeHandler = event => {
    event.target.value < 18 ?
      setIsAgeValid(false) :
      (setAge(event.target.value), setIsAgeValid(true))
  }

  const toggleErrorVisibility = () => isErrorVisible ? setIsErrorVisible(false) : setIsErrorVisible(true)

  const validateData = data => age < 18 ? toggleErrorVisibility() : onSaveForm(data)

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
            <Input isValid={isUsernameValid} type='text' id='username' onChange={setUsernameHandler} />
          </p>
          <p>
            <label htmlFor='age'>Age</label>
            <Input isValid={isAgeValid} shorter='true' type='number' id='age' onChange={setAgeHandler} />
          </p>
          <div>
            <Button type='submit'>Add user</Button>
          </div>
        </fieldset>
      </Form>
      {isErrorVisible && <ErrorModal onToggleError={toggleErrorVisibility} />}
    </>
  )
}

export default AddUserForm