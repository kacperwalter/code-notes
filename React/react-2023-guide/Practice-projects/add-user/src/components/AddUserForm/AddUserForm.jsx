import { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  padding: 5rem;

  p {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.7rem;

    input {
      max-width: 30rem;
      height: 3rem;
    }

    &:nth-child(3) {
      input {
        max-width: 15rem;
      }    
    }
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

const AddUserForm = ({ onSaveForm }) => {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')

  const setUsernameHandler = event => setUsername(event.target.value)
  const setAgeHandler = event => setAge(event.target.value)

  const submitFormHandler = event => {
    event.preventDefault();

    const userData = {
      id: Math.random().toString(),
      username: username,
      age: age,
    }

    onSaveForm(userData)
  }

  return (
    <Form onSubmit={submitFormHandler}>
      <fieldset>
        <legend>Add user to list</legend>
        <p>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' onChange={setUsernameHandler}/>
        </p>
        <p>
          <label htmlFor='age'>Age</label>
          <input type='number' id='age' onChange={setAgeHandler}/>
        </p>
        <div>
          <button type='submit'>Add user</button>
        </div>
      </fieldset>
    </Form>
  )
}

export default AddUserForm