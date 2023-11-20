import React from 'react'

export const TexInputUseFormDinamic = ({LabelInput, Placeholder, ErrorInput, Register, Name, Validation, Disabled, index }) => {
  //console.log(parse(Name))
//window["name"]= Name
  return (
    <>
<div className='containerTextInput'>
                <label className='labelInput'>{LabelInput}</label>
                <input type='text' className='textInput'
                    disabled={Disabled}
                    placeholder={Placeholder}
                    {...Register(`Detalle.${index}.${Name}`, 
                        Validation
                      )}
                    //name={Name}

                ></input>
                {/* <label className='labelInputError'>{ErrorInput}</label> */}
                {
                    (ErrorInput.Detalle !== undefined)? (<>
                    {
                      console.log("----------",ErrorInput?.Detalle[index]?.Name)
                    }
                    <label className='labelInputError'>aqui: {ErrorInput?.Detalle[index]?.Name?.message}</label>
                    </>): (<>no</>)
                  }
            </div>
    </>
  )
}
