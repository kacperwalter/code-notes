import { useState, useMemo } from "react"

const UseMemoPlayground = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  // memoizing the result of slowFunction - example of good usage when we have a slow function
  const doubleNumber = useMemo(() => slowFunction(number), [number]) // only running when we have
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

const slowFunction = (num) => {
  console.log('Calling slow function')
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2
}

export default UseMemoPlayground