import { useState } from 'react';

import Post from '../Post/Post';
import NewPost from '../NewPost/NewPost';
import styles from './PostsList.module.css';

const PostsList = () => {
  const [ enteredBody, setEnteredBody ] = useState('');
  const [ enteredAuthor, setEnteredAuthor ] = useState('');

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value)
  }

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value)
  }

  return (
    <>
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Krzysztof" body='' />
      </ul>
    </>
  )
}

export default PostsList;