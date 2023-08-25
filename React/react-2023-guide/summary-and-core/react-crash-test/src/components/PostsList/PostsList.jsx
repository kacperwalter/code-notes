import Post from '../Post/Post';
import styles from './PostsList.module.css';

const PostsList = () => {
  return (
    <>
      <Post author="Kacper" body="React.js is awesome" />
      <Post author="Krzysztof" body="check out React.js" />
    </>
  )
}

export default PostsList;