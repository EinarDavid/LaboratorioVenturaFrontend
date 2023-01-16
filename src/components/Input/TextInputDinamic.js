import React from 'react'

export const TextInputDinamic = ({ LabelInput, Placeholder, ErrorInput, OnChange, Value, Name }) => {
  return (
    <>
      <div className='containerTextInput'>
        <label className='labelInput'>{LabelInput}</label>
        <input type='text' className='textInput' placeholder={Placeholder}
          name={Name}
          onChange={OnChange}
          defaultValue={Value}
        ></input>
        <label className='labelInputError'>{ErrorInput}</label>
      </div>
    </>
  )
}

