import styles from './Header.module.css'
import background from '../../../assets/meals.jpg'
import HeaderCardButton from './HeaderCardButton'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <div className={styles['main-image']}>
        <img src={background} alt="A table full of delicious food!" />
      </div>
    </>
  )
}

export default Header