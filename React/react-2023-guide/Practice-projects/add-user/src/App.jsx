import { useState } from "react"

import Wrapper from "./components/UI/Wrapper"

import AddUserForm from "./components/AddUserForm/AddUserForm"
import UsersList from "./components/UsersList/UsersList"

function App() {
  const [userData, setUserData] = useState([])

  const setUserDataHandler = data => setUserData(prevData => {
    return [data, ...prevData]
  })

  return (
    <Wrapper>
      <h1>A fucking HTML website</h1>
      <AddUserForm onSaveForm={setUserDataHandler}/>
      <UsersList />
    </Wrapper>
  )
}

export default App
