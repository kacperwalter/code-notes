import { useState, useEffect, useRef } from "react"

const App = () => {
  // counter built using useRef
  const [name, setName] = useState('')
  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return (
    <>
      <input value={name} onChange={ev => setName(ev.target.value)}/>
      <div>My names is: {name}</div>
      <div>I renedered {renderCount.current} times</div>
    </>
  )
}

export default App