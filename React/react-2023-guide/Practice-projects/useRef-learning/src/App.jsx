import { useState, useEffect, useRef } from "react"

const App = () => {
  // counter built using useRef
  const [name, setName] = useState('')

  return (
    <>
      <input value={name} onChange={ev => setName(ev.target.value)}/>
      <div>My names is: {name}</div>
    </>
  )
}

export default App