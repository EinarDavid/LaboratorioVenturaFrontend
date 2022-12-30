import React from 'react'

export const NavButtonUnSelect = ({Image, onClick}) => {
    return (
        <>
            <button onClick={onClick} className='itemNavUnselect'>
                <img src={Image} width={34} alt='icon' ></img>
            </button>
        </>
    )
}
