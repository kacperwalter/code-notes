const { useState } = require("react")

// working code thats displays incrementing value when button is clicked

function Button(props) {
    return (
      <button onClick={props.click}>
        +1
      </button>
    );
  }
  
  function Display(props) {
    return (
      <div>
        {props.message}
      </div>
    )
  }
  
  function App() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter + 1);
      return ( 
        <div>
          <Button click={incrementCounter}/>
          <Display message={counter}/>
        </div>
      )
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('mountNode'),
  )