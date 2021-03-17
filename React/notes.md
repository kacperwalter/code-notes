** React component

function Button() {
    return <button>Test</button>
}

** Rendered in function like this

ReactDOM.render {
    <Button />
    document.getElementById('mountNode'),

}

React is written in jsx which is transpiled (for example by Babel) to regular JS code.

** State object has a special function named useState

function Button() {
    // = useState() 
    return <button>Test</button>
}

useState() results (returning two items)
a) state object (gatter)
b) updater function (setter) - function to change that state object

function Button() {
    const [counter, setCounter] = useState();  // arrays destructuring 
    return <button>Test</button>
}

const [] = useState(initialStateValue) // useState gets the init value

** Hook
 
useState() function is called Hook in the React world


** Reactive button - increment value on click (code to copy and pase)

function Button() {
  // useState() - to use state obj
  const [counter, setCounter] = useState(0);
      return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
}

ReactDOM.render(
  <Button  />,
  document.getElementById('mountNode'),
)

** We should avoid long lines, so its better to write upper component like this

function Button() {
  const [counter, setCounter] = useState(1); 
  const handleClick = () => setCounter(counter + 1);
      return (
      <button onClick={handleClick}>
        {counter}
      </button>
      );
}