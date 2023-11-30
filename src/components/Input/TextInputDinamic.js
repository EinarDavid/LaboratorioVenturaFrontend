import React from 'react'

export const TextInputDinamic = ({ LabelInput, Placeholder, ErrorInput, OnChange, Value, Name, State, Disabled }) => {
  
  return (
    <>
      {(State === 1 || State === -1) ? (
        <div className='containerTextInput'>
          <label className='labelInput'>{LabelInput}</label>
          <input type='text' className='textInputError' placeholder={Placeholder}
          disabled={Disabled}
            name={Name}
            onChange={OnChange}
            defaultValue={Value}
          ></input>
          <label className='labelInputError'>Valor fuera de Rango</label>
        </div>
      ) : (
          <div className='containerTextInput'>
            <label className='labelInput'>{LabelInput}</label>
            <input type='text' className='textInput' placeholder={Placeholder}
              disabled={Disabled}
              name={Name}
              onChange={OnChange}
              defaultValue={Value}
            ></input>
            <label className='labelInputError'>{ErrorInput}</label>
          </div>
        
      )

      }
    </>
  )
}

