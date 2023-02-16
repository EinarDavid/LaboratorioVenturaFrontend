import React from 'react'

export const ButtonDelete = ({ Disabled, Nombre, OnClick }) => {
    return (
        <>
            {
                (Disabled) ? (
                    <button className='stateStyle'
                        style={{ background: '#D4D4D4' }}
                        onClick={OnClick}
                        disabled={Disabled}
                    >
                        <p className='stateParrafo'>{Nombre}</p>
                    </button>
                ) : (

                    <button className='stateStyle'
                        style={{ background: '#FFCECE' }}
                        onClick={OnClick}
                        disabled={Disabled}
                    >
                        <p className='stateParrafo'>{Nombre}</p>
                    </button>
                )
            }

        </>
    )
}
