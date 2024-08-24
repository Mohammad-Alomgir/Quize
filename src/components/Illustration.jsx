import React from 'react'
import classes from '../styles/Illustration.module.css'
const Illustration = ({illustrationImage}) => {
  return (
    <div className={classes.illustration}>
      <img src={illustrationImage} alt="Signup" />
    </div>
  )
}

export default Illustration
