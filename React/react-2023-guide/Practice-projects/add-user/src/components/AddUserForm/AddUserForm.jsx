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
    }
  }
`

const AddUserForm = () => {
  return (
    <Form>
      <fieldset>
        <legend>Add user to list</legend>
        <p>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' />
        </p>
        <p>
          <label htmlFor='age'>Age</label>
          <input type='number' id='age' />
        </p>
        <div>
          <button type='submit'>Add user</button>
        </div>
      </fieldset>
    </Form>
  )
}

export default AddUserForm