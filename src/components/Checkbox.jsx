import React from 'react'

const Checkbox = ({text,className}) => {
  return (
    <label className={className}>
        <input type='checkbox' />
        <span> {text}</span>
    </label>
  )
}

export default Checkbox
