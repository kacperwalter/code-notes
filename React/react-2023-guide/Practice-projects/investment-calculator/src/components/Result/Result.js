import { useState } from 'react'

import styles from './Result.module.css'

const Result = ({ userData }) => {
  return (
    <table className={styles.result}>
      {console.log(userData)}
      {userData.length === 0 ? (
        <p>Please provide some data</p>
      ) : (
        <>
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>

          <tbody>
            {userData.map(element => (
              <tr>
                <td>{element.year}</td>
                <td>{element.savingsEndOfYear}</td>
                <td>{element.yearlyContribution}</td>
                <td>TOTAL INTEREST GAINED</td>
                <td>TOTAL INVESTED CAPITAL</td>
              </tr>
            ))}
          </tbody>
        </>
      )}
    </table>
  )
}

export default Result