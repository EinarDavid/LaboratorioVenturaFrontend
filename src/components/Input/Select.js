import React from 'react'

export const Select = ({ LabelInput, Placeholder, SelectOption, ErrorInput, Register, Name, Onchange, Value, Validation }) => {


    return (
        <>
            <div className='containerTextInput'>
                <label className='labelInput'>{LabelInput}</label>

                <select
                    className='textInput'
                    name={Name}
                    //onChange={Onchange}
                    //value={Value}
                    {...Register(Name, Validation)}
                >
                    <option value='' hidden> {Placeholder}</option>
                    {
                        SelectOption?.map(({ Nombre, _id }) => (
                            <option key={_id}
                                value={_id}
                            >{Nombre}</option>
                        ))
                    }
                </select>
                <label className='labelInputError'>{ErrorInput}</label>
            </div>
        </>
    )
}
