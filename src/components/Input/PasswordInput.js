import React from 'react'

export const PasswordInput = ({ LabelInput, Placeholder, Required }) => {
    return (
        <>
            <div className='containerTextInput'>
                <label className='labelInput'>{LabelInput}</label>
                <input type='password' className='textInput' placeholder={Placeholder} required={Required}></input>
            </div>
        </>
    )
}
