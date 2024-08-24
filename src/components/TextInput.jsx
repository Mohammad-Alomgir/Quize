import React from 'react'
const TextInput = ({handleChange,value,name,className,iconClassName,...rest}) => {
  return (
    <div className={className}>
      <input {...rest} name={name} value={value} onChange={handleChange}/>
      <span className={iconClassName}></span>
    </div>
  )
}

export default TextInput
