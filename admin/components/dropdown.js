import React from 'react'

const Dropdown = ({key, options, value, handleChange, placeholderText, editFlag ,name }) => {
   
  return (
    <>
           <select value={value} onChange={handleChange} disabled={!editFlag} name = {name}  >
             <option key = {0} value= ""> {placeholderText}</option>
            {options?.map((option, index) => (
              <option key = {index} value={option.value}>{option.label}</option>
              ))}
          </select>
    </>
  )
}

export default Dropdown

