import { useState } from 'react';

import styles from './NewPost.module.css';

const NewPost = ({ onCancel, onAddPost }) => {
  const [enteredBody, setEnteredBody] = useState('')
  const [enteredAuthor, setEnteredAuthor] = useState('')

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value)
  }

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    }
    onAddPost(postData)
    onCancel()
  }

  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={authorChangeHandler} />
        </p>
        <p className={styles.actions}>
          <button type="button" onClick={onCancel}>Cancel</button>
          <button>Submit</button>
        </p>
      </form>
    </>
  );
}

export default NewPost;