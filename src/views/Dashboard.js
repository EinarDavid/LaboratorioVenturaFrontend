import React from 'react'
import { MainNavigator } from '../navigation/MainNavigator'

export const Dashboard = () => {
    return (
        <>
            <div className="App">
                <div className='mainNav'>
                    <MainNavigator />
                </div>
                <div className='containerPadre'>
                    <div className='containerHijo'>
                        <h1 className='titleStyle'>Dashboard</h1>
                        <div className='spaceVer30' />
                    </div>
                </div>
            </div>
        </>
    )
}
