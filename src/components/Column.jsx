import React from 'react'
import Illustration from './Illustration';
import classes from '../styles/Form.module.css'
import Form from './Form';
const Column = ({children}) => {
  return (
    <div className="column">
      {children}
    </div>
  )
}

export default Column;
