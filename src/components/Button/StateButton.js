import React from 'react'
import { useNavigate } from 'react-router-dom'

export const StateButton = ({ State, Ruta }) => {
  
  const navigate = useNavigate();

  const _onClick = ()=>
  {
    return navigate("/edit/examen/"+Ruta)
  }
  return (
    <>
      <button className='stateStyle'
        style={(State === 'Pendiente') ? ({ background: '#FFCECE' }) :
          (State === 'Autorizado') ? ({ background: '#00CAA7' }) : ({ background: '#F9F871' })}
          onClick={_onClick}
      >{State}</button>
    </>
  )
}
