import React from 'react'
import { MainNavigator } from '../navigation/MainNavigator'

export const SearchLab = () => {
    return (
        <>
            <div className="App">
                <div className='mainNav'>
                    <MainNavigator />
                </div>
                <div className='containerPadre'>
                    <div className='containerHijo'>
                        <h1 className='titleStyle'>Busqueda de Laboratorios</h1>
                        <div className='spaceVer30' />
                    </div>
                </div>
            </div>

        </>
    )
}
