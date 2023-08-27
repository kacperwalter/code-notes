import { useState } from 'react';

import Post from '../Post/Post';
import NewPost from '../NewPost/NewPost';
import Modal from '../Modal/Modal';
import styles from './PostsList.module.css';

const PostsList = ({ isPosting, onStopPosting }) => {
  const [enteredBody, setEnteredBody] = useState('')
  const [enteredAuthor, setEnteredAuthor] = useState('')

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value)
  }

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value)
  }

  return (
    <>
      {isPosting && (
        <Modal onBackdropClick={onStopPosting} isVisible={isPosting}>
          <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Krzysztof" body='' />
      </ul>
    </>
  )
}

export default PostsList;