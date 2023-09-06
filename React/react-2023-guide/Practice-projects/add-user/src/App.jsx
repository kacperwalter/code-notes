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
      <AddUserForm onSaveForm={setUserDataHandler}/>
      <UsersList users={userData}/>
    </Wrapper>
  )
}

export default App
