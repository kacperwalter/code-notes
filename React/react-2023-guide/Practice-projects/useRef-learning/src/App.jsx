import { useState, useEffect, useRef } from "react"

const App = () => {
  const [name, setName] = useState('')
  const prevName = useRef('')

  // get the previous state value
  useEffect(() => {
    prevName.current = name
  }, [name])


  return (
    <>
      <input value={name} onChange={ev => setName(ev.target.value)}/>
      <div>My names is: {name} but earlier it was {prevName.current}</div>
      <button onClick={focus}>Focus</button>
    </>
  )
}

export default App