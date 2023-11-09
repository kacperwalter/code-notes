import { useEffect, useState, useRef, useContext } from 'react'
import { ThemeContext } from './App'

const UseRefPlayground = () => {
  const [name, setName] = useState('')
  // one of things useRef can do is to keep some data
  const renderCount = useRef(1)

  // useRef can also keep track of DOM elements
  const inputRef = useRef()

  const focus = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

   const theme = useContext(ThemeContext)
   console.log(theme.color)

  return (
    <>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
    </>
  )
}

export default UseRefPlayground