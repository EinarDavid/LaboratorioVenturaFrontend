import React from 'react'
import { MainNavigator } from '../navigation/MainNavigator'

export const GestionExample = () => {
  return (
    <>
            <div className="App">
                <div className='mainNav'>
                    <MainNavigator />
                </div>
                <div className='container'>
                    <div className='containerHijo'>
                        <h1 className='titleStyle'>Gesion de Examenes</h1>
                        <div className='spaceVer30' />
                    </div>
                </div>
            </div>
        </>
  )
}