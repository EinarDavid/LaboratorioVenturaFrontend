import React from 'react'

export const TexInputUseFormDinamic = ({LabelInput, Placeholder, ErrorInput, Register, Name, Validation, Disabled, index }) => {
  return (
    <>
<div className='containerTextInput'>
                <label className='labelInput'>{LabelInput}</label>
                <input type='text' className='textInput'
                    disabled={Disabled}
                    placeholder={Placeholder}
                    {...Register(`${Name}.${index}.number`, 
                        Validation
                      )}
                    name={Name}

                ></input>
                <label className='labelInputError'>{ErrorInput}</label>
            </div>
    </>
  )
}
