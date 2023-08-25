import styles from './Post.module.css'

const Post = (props) => {
  return (
    <div className={styles.post}>
      <p className={styles.author}>{props.author}</p>
      <p className={styles.body}>{props.body}</p>
    </div>
  );
}

export default Post;