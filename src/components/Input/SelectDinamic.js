import React from 'react'

export const SelectDinamic = ({ LabelInput, Placeholder, SelectOption, ErrorInput, OnChange, Value, Name }) => {


    return (
        <>
            <div className='containerTextInput'>
                <label className='labelInput'>{LabelInput}</label>

                <select
                    className='textInput'
                    name={Name}
                    onChange= {OnChange}
                    

                >
                    <option value={Value} hidden> {Placeholder}</option>
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
