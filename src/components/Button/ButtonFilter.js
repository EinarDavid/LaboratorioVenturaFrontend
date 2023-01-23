import React from 'react'
import Images from '../../config/Images'

export const ButtonFilter = ({ Active, Nombre, OnClick }) => {
    return (
        <>
            {
                (Active) ? (
                    <>
                        <button className='ButtonActiveFilter' type="submit" onClick={OnClick}>
                            <img src={Images.FILTERWHITE} width={30}/>
                            
                            {Nombre}
                        </button>
                    </>
                ) : (
                    <>
                        <button className='ButtonUnActiveFilter' type="submit" onClick={OnClick}>
                        <img src={Images.FILTERBLUE} width={30}/>
                            {Nombre}
                        </button>
                    </>
                )
            }
        </>
    )
}
