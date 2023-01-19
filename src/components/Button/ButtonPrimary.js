import React from 'react'

export const ButtonPrimary = ({Disabled, Nombre, OnClick }) => {
    return (
        <>
            <div className='container-Button-Modal'>
                {
                    (Disabled) ? (
                        <button className='ButtonPrimaryDisabled' type="submit" disabled={Disabled} >{Nombre}</button>
                    ):(<button className='ButtonPrimary' type="submit" disabled={Disabled} onClick={OnClick}>{Nombre}</button>)
                }
            </div>
        </>
    )
}
