import React from 'react'

export const SelectUseFormDinamic = ({ LabelInput, Placeholder, SelectOption, ErrorInput, Register, Name, Validation, index }) => {
  return (
    <>
<div className='containerTextInput'>
                <label className='labelInput'>{LabelInput}</label>

                <select
                    className='textInput'
                    name={Name}

                    {...Register(`${Name}.${index}.number`, Validation)}
                >
                    <option value='' hidden> {Placeholder}</option>
                    {
                        SelectOption.map(({ option, id }) => (
                            <option key={id}
                                value={option}
                            >{option}</option>
                        ))
                    }
                </select>
                <label className='labelInputError'>{ErrorInput}</label>
            </div>
    </>
  )
}
