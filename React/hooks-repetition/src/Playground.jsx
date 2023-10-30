import { useState } from "react"

const Playground = () => {
  const [count, setCount] = useState(0)

  // wrong way of operating on previous state
  // const decrementCount = () => {
  //   setCount(count - 1)
  // }

  // correct way of operating on previous state
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button>+</button>
    </>
  )
}

export default Playground