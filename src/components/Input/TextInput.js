import React from 'react'

export const TextInput = ({ LabelInput, Placeholder, ErrorInput, Register, Value='', Name, OnChange, Validation }) => {
    //console.log("rEGISTERRRR: " , Register)
    return (
        <>
            <div className='containerTextInput'>
                <label className='labelInput'>{LabelInput}</label>
                <input type='text' className='textInput'
                    placeholder={Placeholder}
                    {...Register(Name, 
                        Validation
                      )}
                   
                    //value={Value}
                    name={Name}
                    //onChange={OnChange}
                ></input>
                <label className='labelInputError'>{ErrorInput}</label>
            </div>
        </>
    )
}

// name={Name}