import React from 'react'

export const ButtonFilter = ({ Active, Nombre, OnClick }) => {
    return (
        <>
            {
                (Active) ? (
                    <>
                            <button className='ButtonActiveFilter' type="submit" onClick={OnClick}>{Nombre}</button>
                    </>
                ) : (
                    <>
                        <button className='ButtonUnActiveFilter' type="submit" onClick={OnClick}>{Nombre}</button>
                    </>
                )
            }
        </>
    )
}
