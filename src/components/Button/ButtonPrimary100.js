import React from 'react'

export const ButtonPrimary100 = ({Disabled, Nombre, OnClick }) => {
  return (
    <>
            <div className='container-Button-Modal'>
                {
                    (Disabled) ? (
                        <button className='ButtonPrimaryDisabled100' type="submit" disabled={Disabled} >{Nombre}</button>
                    ):(<button className='ButtonPrimary100' type="submit" disabled={Disabled} onClick={OnClick}>{Nombre}</button>)
                }
            </div>
        </>
  )
}
