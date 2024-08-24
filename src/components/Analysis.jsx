import React from 'react'
import Question from './Question';
const Analysis = () => {
  return (
    <div style={{margin: "2rem auto"}}>
      <h1>Question Analysis</h1>
      <h4>Your answered 5 out of 10 questions correctly.</h4>
      <Question />
    </div>
  )
}

export default Analysis;
