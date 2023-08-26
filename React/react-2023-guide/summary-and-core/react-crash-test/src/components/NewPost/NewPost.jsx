import { useState } from 'react';
import styles from './NewPost.module.css';

const NewPost = () => {
  // const stateData = useState(''); // initial value
  // stateData[0] // current value
  // stateData[1] // state updating function

  const [ enteredBody, setEnteredBody ] = useState('');
  
  const changeBodyHandler = (event) => {
    setEnteredBody(event.target.value);
  }

  return (
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
  );
}

export default NewPost;