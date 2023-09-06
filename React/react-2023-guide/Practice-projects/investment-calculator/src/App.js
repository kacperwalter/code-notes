import { useState } from 'react';

import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Result from './components/Result/Result'

function App() {
  const [userData, setUserData] = useState('')
  const setUserDataHandler = data => setUserData(data)

  return (
    <>
      <Header />
      <Form onSaveUserData={setUserDataHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Result userData={userData}/>
    </>
  )
}

export default App
