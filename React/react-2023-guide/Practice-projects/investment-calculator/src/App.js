import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Result from './components/Result/Result'

function App() {


  return (
    <>
      <Header />
      <Form />
      
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Result />
    </>
  )
}

export default App
