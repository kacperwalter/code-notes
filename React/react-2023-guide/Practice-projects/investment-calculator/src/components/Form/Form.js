import { useState } from 'react';

import styles from './Form.module.css'

const Form = ({ onSaveUserData }) => {
  const [currentSavings, setCurrentSavings] = useState(0)
  const [yearlySavings, setYearlySavings] = useState(0)
  const [expectedInterest, setExpectedInterest] = useState(0)
  const [investmentDuration, setInvestmentDuration] = useState(0)

  const currentSavingsChangeHandler = event => setCurrentSavings(event.target.value)
  const yearlySavingsChangeHandler = event => setYearlySavings(event.target.value)
  const expectedInterestChangeHandler = event => setExpectedInterest(event.target.value)
  const investmentDurationChangeHandler = event => setInvestmentDuration(event.target.value);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    onSaveUserData(yearlyData)
  };

  const submitFormHandler = event => {
    event.preventDefault()

    const userData = {
      'current-savings': currentSavings,
      'yearly-contribution': yearlySavings,
      'expected-return': expectedInterest,
      'duration': investmentDuration,
    }

    calculateHandler(userData)
  }

  const resetFormHandler = () => {
    setCurrentSavings(0)
    setCurrentSavings(0)
    setExpectedInterest(0)
    setInvestmentDuration(0)
  }

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={`${styles["input-group"]}`}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" value={currentSavings} onChange={currentSavingsChangeHandler} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" value={yearlySavings} onChange={yearlySavingsChangeHandler} />
        </p>
      </div>
      <div className={`${styles["input-group"]}`}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" value={expectedInterest} onChange={expectedInterestChangeHandler} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" value={investmentDuration} onChange={investmentDurationChangeHandler} id="duration" />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" onClick={resetFormHandler} className={styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  )
}

export default Form