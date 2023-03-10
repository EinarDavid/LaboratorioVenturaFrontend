import React from 'react'
import { EmptySearch } from '../components/Empty/EmptySearch'
import Images from '../config/Images'
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
                        <div className='containerEmptySection'>
                            <EmptySearch Image={Images.CONTRUCTION} Text={'Sección en construcción'} Width={100} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
