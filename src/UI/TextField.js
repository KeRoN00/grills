import React from 'react'

const TextField = ({title, text}) => {
  return (
    <div className="textfield">
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default TextField