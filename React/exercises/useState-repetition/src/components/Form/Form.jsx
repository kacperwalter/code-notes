import { useState } from "react"

import Banner from '../Banner/Banner';

const Form = () => {
  const [currentValue, setCurrentValue] = useState('');

  const displayEvent = (event) => {
    setCurrentValue(event.target.value);
  }

  return (
    <>
      <form>
        <p>
          <label htmlFor="body">Some text input</label>
          <textarea id="body" required onChange={displayEvent}/>
        </p>
      </form>
      <Banner text={currentValue} />
    </>
  )
}

export default Form