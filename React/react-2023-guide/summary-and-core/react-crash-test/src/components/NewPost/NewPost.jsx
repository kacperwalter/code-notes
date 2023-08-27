import { useState } from 'react';
import styles from './NewPost.module.css';

const PostSubmit = () => {
  const submitPost = () => {
    console.log("form sent ")
  }

  return (
    <button onClick={submitPost}>
      I dont do anything
    </button>
  )
}

const NewPost = () => {
  const [ enteredBody, setEnteredBody ] = useState('');

  const changeBodyHandler = (event) => {
    setEnteredBody(event.target.value)
  }

  return (
    <>
      <form className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler}/> 
        </p>
        <p>{enteredBody}</p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required />
        </p>
      </form>
    </>
  );
}

export default NewPost;