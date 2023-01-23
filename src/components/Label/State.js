import React from 'react'

export const State = ({ State }) => {
    return (
        <div className='stateStyle'
            style={(State === 'Pendiente') ? ({ background: '#FFCECE' }) :
                (State === 'Realizado') ? ({ background: '#00CAA7' }) : ({ background: '#F9F871' })}
        >
            <p className='stateParrafo'>
                {State}
            </p>
        </div>
    )
}
