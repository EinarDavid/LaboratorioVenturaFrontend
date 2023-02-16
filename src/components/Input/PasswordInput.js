import React from 'react'

export const PasswordInput = ({ LabelInput, Placeholder, ErrorInput, Register, Name, Value = '', Onchange }) => {
    return (
        <>
            <div className='containerTextInput'>
                <label className='labelInput'>{LabelInput}</label>
                <input type='password' className='textInput'
                    name={Name}
                    placeholder={Placeholder}
                    {...Register}
                    value={Value}
                    onChange={Onchange}
                ></input>
                <label className='labelInputError'>{ErrorInput}</label>
            </div>
        </>
    )
}
