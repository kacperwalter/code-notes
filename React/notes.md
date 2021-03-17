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
    // =useState() 
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