import React from 'react'
import Checkbox from './Checkbox';
import classes from '../styles/Answer.module.css'
const Answers = () => {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text='test-project' />
    </div>
  )
}

export default Answers;
