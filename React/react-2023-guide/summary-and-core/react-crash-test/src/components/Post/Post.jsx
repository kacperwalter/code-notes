import styles from './Post.module.css'

const Post = ({ author, body }) => {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.body}>{body}</p>
    </li>
  );
}

export default Post;