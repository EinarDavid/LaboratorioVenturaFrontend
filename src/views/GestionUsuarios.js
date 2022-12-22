

import React, { useState } from 'react';
import { MainNavigator } from '../navigation/MainNavigator';
import { SearchInput } from '../components/Input/SearchInput';
import Images from '../config/Images';
import { RegUsuario } from '../components/Modal/ModalRegUsuario';


export const GestionUsuarios = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <div className="App">
                <div className='mainNav'>
                    <MainNavigator></MainNavigator>

                </div>
                <div className='container'>
                    <div className='containerHijo'>
                        <h1 className='titleStyle'>Gestion de usuarios</h1>
                        <div className='spaceVer30' />
                        
                        <SearchInput
                            LabelInput={'Ingresa el dato de búsqueda'}
                            Placeholder={'Ej. Villarroel'}
                            Image={Images.ADD}
                            onClick={() => setModalShow(true)}></SearchInput>
                    </div>
                </div>
                
            </div>
            <RegUsuario modal={modalShow} SetModal={setModalShow} ></RegUsuario>
        </>
    )
}
