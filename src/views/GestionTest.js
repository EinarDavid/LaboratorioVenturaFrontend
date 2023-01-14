import React, { useState } from 'react'
import { SearchInput } from '../components/Input/SearchInput';
import { ModalRegTest } from '../components/Modal/ModalRegTest';
import Images from '../config/Images';
import { MainNavigator } from '../navigation/MainNavigator'

export const GestionTest = () => {
    const [modalShow, setModalShow] = useState(false);
  return (
    <>
            <div className="App">
                <div className='mainNav'>
                    <MainNavigator />
                </div>
                <div className='containerPadre'>
                    <div className='containerHijo'>
                        <h1 className='titleStyle'>Gesion de Examenes</h1>
                        <div className='spaceVer30' />
                        <SearchInput
                            LabelInput={'Ingresa el dato de búsqueda'}
                            Placeholder={'Ej. Villarroel'}
                            Image={Images.ADD}
                            onClick={() => setModalShow(true)}></SearchInput>
                    </div>
                </div>
            </div>
            <ModalRegTest modal={modalShow} SetModal={setModalShow} ></ModalRegTest>
        </>
  )
}
