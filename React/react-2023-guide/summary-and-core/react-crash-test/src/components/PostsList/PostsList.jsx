import Post from '../Post/Post';
import styles from './PostsList.module.css';

const PostsList = () => {
  return (
    <ul className={styles.posts}>
      <Post author="Kacper" body="React.js is awesome" />
      <Post author="Krzysztof" body="check out React.js" />
    </ul>
  )
}

export default PostsList;