const { useState } = require("react")

// working code thats displays incrementing value when button is clicked

function Button(props) {
  return (
    <button onClick={() => props.click(props.increment)}>
      +{props.increment}
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
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
    return ( 
      <div>
        <Button click={incrementCounter} increment={1}/>
        <Button click={incrementCounter} increment={5}/>
        <Button click={incrementCounter} increment={10}/>
        <Button click={incrementCounter} increment={100}/>
        <Display message={counter}/>
      </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
)
