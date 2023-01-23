import React from 'react'


export const EmptySearch = ({Image, Text, Width}) => {
    return (
        <>
            <div className='emptySearch'>
                <img src={Image} width={Width} alt='search'></img>
                <div className='spaceVer10'/>
                <p className='textSearch'>{Text}</p>
            </div>
        </>
    )
}
