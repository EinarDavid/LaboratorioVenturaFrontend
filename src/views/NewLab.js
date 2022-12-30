import React from 'react'
import { MainNavigator } from '../navigation/MainNavigator'

export const NewLab = () => {
  return (
    <>
            <div className="App">
                <div className='mainNav'>
                    <MainNavigator />
                </div>
                <div className='container'>
                    <div className='containerHijo'>
                        <h1 className='titleStyle'>Nuevo Laboratorio</h1>
                        <div className='spaceVer30' />
                    </div>
                </div>
            </div>
        </>
  )
}
