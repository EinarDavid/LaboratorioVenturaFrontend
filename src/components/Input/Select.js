import React from 'react'

export const Select = ({ LabelInput, Placeholder, SelectOption, ErrorInput, Register }) => {


    return (
        <>
            <div className='containerTextInput'>
                <label className='labelInput'>{LabelInput}</label>

                <select
                    className='textInput'
                    {...Register}
                >
                    <option value='' hidden> {Placeholder}</option>
                    {
                        SelectOption.map(({ option, id_option }) => (
                            <option key={id_option}
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
