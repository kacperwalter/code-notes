import styles from './NewPost.module.css';

const NewPost = ({ onBodyChange, onAuthorChange, onCancel }) => {
  return (
    <>
      <form className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={onBodyChange} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={onAuthorChange} />
        </p>
        <p className={styles.actions}>
          <button type="button" onClick={onCancel}>Cancel</button>
          <button>Submit</button>
        </p>
      </form>
    </>
  );
}

export default NewPost;