import { useState } from 'react';

import Post from '../Post/Post';
import NewPost from '../NewPost/NewPost';
import Modal from '../Modal/Modal';
import styles from './PostsList.module.css';

const PostsList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([])

  const addPostHandler = (postData) => {
    // setPosts([postData, ...posts]) // will work but its not the greatest way to do it
    setPosts((existingPosts) => [postData, ...existingPosts]) // better way to add data to existing data
  }

  return (
    <>
      {isPosting && (
        <Modal onBackdropClick={onStopPosting} isVisible={isPosting}>
          <NewPost
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map(post => <Post key={post.author} author={post.author} body={post.body} />)}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign:'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Add some!</p>
        </div>
      )}
    </>
  )
}

export default PostsList;