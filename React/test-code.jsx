const { useState } = require("react")

function Button() {
    const [counter, setCounter ] = useState(1);
    const handleClick = () => setCounter(counter + 1);
    return (
        <button onClick={handleClick}>
            {counter}
        </button>
    );
}

function Display() {
    return (
        <div>Test</div>
    )
}

function App() {
    return (
        <div>
            <Button />
            <Display />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('mountNode'),
)
// Your first one-way data flow 6:12