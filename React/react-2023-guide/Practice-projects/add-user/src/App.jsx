import Wrapper from "./components/UI/Wrapper"

import AddUserForm from "./components/AddUserForm/AddUserForm"
import UsersList from "./components/UsersList/UsersList"

function App() {
  return (
    <Wrapper>
      <AddUserForm />
      <UsersList />
    </Wrapper>
  )
}

export default App
