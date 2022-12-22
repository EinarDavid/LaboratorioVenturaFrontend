import React from 'react'

export const TextInput = ({LabelInput, Placeholder, Required}) => {
    return (
        <>
            <div className='containerTextInput'>
                <label className='labelInput'>{LabelInput}</label>
                <input type='text' className='textInput' placeholder={Placeholder} required={Required}></input>
            </div>
        </>
    )
}
