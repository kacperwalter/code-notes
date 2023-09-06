import { useState } from "react"

import Wrapper from "./components/UI/Wrapper"

import AddUserForm from "./components/AddUserForm/AddUserForm"
import UsersList from "./components/UsersList/UsersList"

function App() {
  const [userData, setUserData] = useState('')

  // const setUserDataHandler = event => setUserData(event)
  const setUserDataHandler = event => console.log(event)

  return (
    <Wrapper>
      <AddUserForm onSaveForm={setUserDataHandler}/>
      <UsersList />
    </Wrapper>
  )
}

export default App
