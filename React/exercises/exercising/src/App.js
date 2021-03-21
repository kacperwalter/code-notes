import DateDisplay from './Date';

const App = (props) => {
    return (
        <div>
            <DateDisplay/>
            <h1>{props.test}</h1>
        </div>
    )
}

export default App;