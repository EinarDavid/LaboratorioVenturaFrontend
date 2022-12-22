import React from 'react'

export const Select = ({ LabelInput, Placeholder, Required, SelectOption }) => {
    

    return (
        <>
            <div className='containerTextInput'>
                <label className='labelInput'>{LabelInput}</label>

                <select
                    className='textInput'
                    required={Required}
                >
                    <option value='Default' hidden> {Placeholder}</option>
                    {
                        SelectOption.map(({ option, id_option }) => (
                            <option key={id_option}
                                value={option}
                            >{option}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}
