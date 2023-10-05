import { useState, useEffect, useRef } from "react"

const App = () => {
  const [name, setName] = useState('')
  const inputRef = useRef()

  // also here we can get whole passed string instead of every letter 
  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} value={name} onChange={ev => setName(ev.target.value)}/>
      <div>My names is: {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  )
}

export default App