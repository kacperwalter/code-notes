import './App.css';
import { useState } from 'react';


function Button(props) {
  const handleClick = () => props.click(props.increment);
  return (
    <button onClick={() => handleClick()}>
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

export default function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => {
    setCounter(counter + incrementValue);
  }
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