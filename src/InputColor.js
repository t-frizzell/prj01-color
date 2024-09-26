import React from 'react'

// This will be the form to take the color input

// Destructure Prop Drill useState variables & function
const InputColor = ({color, setColor}) => {
  return (
    <form onSubmit={(e) => {e.preventDefault()}}>
      <input 
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        onChange={(e) => {setColor(e.target.value)}} 
        onSubmit={(e) => {e.preventDefault()}} 
      >
      </input>
    </form>
  )
}

export default InputColor