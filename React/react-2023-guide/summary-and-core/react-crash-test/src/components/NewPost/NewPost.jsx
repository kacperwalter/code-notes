import styles from './NewPost.module.css';

const NewPost = () => {
  const changeBodyHandler = (event) => {
    console.log(event.target.value)
  }

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;