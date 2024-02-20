import React from 'react'

export const CardData = ({Number, Name, Description1, Description2}) => {
  return (
    <div className='CardData'>
        <h3 className='TextCard'>{Number} {Name}</h3>
        <div className='DescriptionCard'>
            <p className='Desc FontWeight400'>{Description1}</p>
            <p className='Desc FontWeight700'>{Description2}</p>
        </div>
    </div>
  )
}
