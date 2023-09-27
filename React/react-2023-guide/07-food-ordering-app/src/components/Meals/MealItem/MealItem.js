import styles from './MealItem.module.css'

const MealItem = ({ name, description, price }) => {

  return (
    <li>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <button>Add to Cart</button>
      </div>
    </li>
  )
}

export default MealItem