import React from 'react'
import classes from '../styles/Videos.module.css'
import Video from './Video'
const Videos = ({children}) => {
  return (
    <div className={classes.videos}>
       {children}
    </div>
  )
}

export default Videos
