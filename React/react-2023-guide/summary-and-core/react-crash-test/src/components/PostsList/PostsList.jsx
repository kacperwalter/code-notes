import Post from '../Post/Post';
import NewPost from '../NewPost/NewPost';
import styles from './PostsList.module.css';

const PostsList = () => {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author="Kacper" body="React.js is awesome" />
        <Post author="Krzysztof" body="check out React.js" />
      </ul>
    </>
  )
}

export default PostsList;