import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = ({ name, description, price }) => {

  return (
    <li>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  )
}

export default MealItem