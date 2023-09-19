import { useState, useEffect } from "react"

const UseEffectCleanup = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    
    //  Cleanup function - it's good practice to always delete for example listeners or API connections when the component is unmounted
    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
    }
  }, [])

  return (
    <div>{windowWidth}</div>
  )
}

export default UseEffectCleanup