import { useState, useEffect } from 'react';

import Post from '../Post/Post';
import NewPost from '../NewPost/NewPost';
import Modal from '../Modal/Modal';
import styles from './PostsList.module.css';

const PostsList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([])
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []) // second argument [] decides when the useEffect is fired

  const addPostHandler = (postData) => {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": 'application/json'
      }
    })
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

      {!isFetching && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map(post => <Post key={post.author} author={post.author} body={post.body} />)}
        </ul>
      )}

      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign:'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Add some!</p>
        </div>
      )}

      {isFetching && (
        <div style={{ textAlign: 'center', color: 'white'}}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  )
}

export default PostsList;