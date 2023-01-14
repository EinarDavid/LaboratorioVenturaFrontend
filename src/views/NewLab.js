import React, { useState } from 'react'
import { SearchInput } from '../components/Input/SearchInput'
import { ModalRegPaciente } from '../components/Modal/ModalRegPaciente';
import Images from '../config/Images';
import { MainNavigator } from '../navigation/MainNavigator'

export const NewLab = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="App">
                <div className='mainNav'>
                    <MainNavigator />
                </div>
                <div className='containerPadre'>

                    <div className='sections'>
                        <div className='section1Lab'>
                            <div className='containerHijo'>

                                <h1 className='titleStyle'>Nuevo Laboratorio</h1>
                                <div className='spaceVer30' />
                                <div className='containerPacDoc'>
                                    <div className='selectPac'>
                                        <div className='containerPac'>
                                            <SearchInput
                                                LabelInput={'Ingresa el dato de búsqueda'}
                                                Placeholder={'Ej. Villarroel'}
                                                Image={Images.ADD}
                                                onClick={() => setModalShow(true)}></SearchInput>
                                        </div>
                                    </div>
                                    <div className='spaceRow20' />
                                    <div className='selectDoc'>
                                        <h1 className='titleStyle'>Nuevo Laboratorio</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='section2Lab'>
                            <div className='containerLab2'>

                                {/* <h1 className='titleStyle'>Nuevo Laboratorio</h1> */}
                                <div className='spaceVer30' />

                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <ModalRegPaciente modal={modalShow} SetModal={setModalShow} ></ModalRegPaciente>
        </>
    )
}
