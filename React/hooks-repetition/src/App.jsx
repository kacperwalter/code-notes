import React from 'react'

import UseRefPlayground from './UseRefPlayground'

export const ThemeContext = React.createContext()

function App() {
  return (
    <>
    <ThemeContext.Provider value={{ color: 'red' }}>
      <UseRefPlayground />
    </ThemeContext.Provider>
    </>
  )
}

export default App
