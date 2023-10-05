import styles from './HeaderCardButton.module.css'
import CartIcon from '../../Cart/CartIcon'

const HeaderCardButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>
        3
      </span>
    </button>
  )
}

export default HeaderCardButton