import React from 'react'

export const ButtonIcon = ({ OnClick, Image, Nombre }) => {
    return (
        <>
            <button className='ButtonIcon' onClick={OnClick}>
                <img src={Image} width={30} alt={'icon'}/>
                <div className='spaceRow5' />
                {Nombre}
            </button>
        </>
    )
}
