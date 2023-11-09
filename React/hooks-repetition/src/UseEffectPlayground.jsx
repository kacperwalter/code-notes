import { useState, useEffect } from "react"

const UseEffectPlayground = () => {
  const [resouceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    const fetchResource = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resouceType}`)
      const json = await response.json()
      return json
    }

    fetchResource().then(json => setItems(json))

    return () => console.log('cleanup')
  }, [resouceType])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resouceType}</h1>
      {items.map((item, index)=> {
        return <pre key={index}>{JSON.stringify(item)}</pre>
      }, [])}
    </>
  )
}

export default UseEffectPlayground