
import './App.css'
import Solution from './Solution'

function App() {

  return (
    <>
    <Solution menuConfig={[
      {
        title: 'Home',
      },
      {
        title: 'Services',
        subItems: ['Cooking', 'Cleaning'],
      },
      {
        title: 'Contact',
        subItems: ['Phone', 'Mail'],
      },
    ]} />
    </>
  )
}

export default App
