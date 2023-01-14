import React from 'react'

export const TextInput = ({LabelInput, Placeholder, ErrorInput, Register}) => {
   
    return (
        <>
            <div className='containerTextInput'>
                <label className='labelInput'>{LabelInput}</label>
                <input type='text' className='textInput' placeholder={Placeholder} {...Register} 
                ></input>
                <label className='labelInputError'>{ErrorInput}</label>
            </div>
        </>
    )
}

// name={Name}