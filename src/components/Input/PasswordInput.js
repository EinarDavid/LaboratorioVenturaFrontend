import React from 'react'

export const PasswordInput = ({ LabelInput, Placeholder, ErrorInput, Register }) => {
    return (
        <>
            <div className='containerTextInput'>
                <label className='labelInput'>{LabelInput}</label>
                <input type='password' className='textInput' placeholder={Placeholder} {...Register}></input>
                <label className='labelInputError'>{ErrorInput}</label>
            </div>
        </>
    )
}
