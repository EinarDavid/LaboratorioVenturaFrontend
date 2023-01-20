import React, { useState } from 'react'
import Images from '../../config/Images';
import { SelectDinamic } from '../Input/SelectDinamic'

import { TextInputDinamic } from '../Input/TextInputDinamic'

export const SectionFilter = ({ SearchCodigoPac, SearchCI, SearchNombre, SearchEstado }) => {

    const [searchCodigo, setSearchCodigo] = useState(true);
    const [searchCI, setSearchCI] = useState(false);
    const [searchNombre, setSearchNombre] = useState(false);
    const [searchState, setSearchState] = useState(false)

    console.log(searchCodigo)

    const Estado = [{
        option: 'Pendiente',
        id_option: 1
    },
    {
        option: 'Realizado',
        id_option: 2
    },
    {
        option: 'Todos',
        id_option: 3
    },
    ];


    return (
        <>
            <div className='SeccionFilter'>
                <hr className='lineFilter' />
                <div className='spaceVer5' />
                <div>
                    <div className='titleFilter'>
                        <h3 className='titleStyleH3'>CÓDIGO</h3>
                        <button className='buttonPrint' onClick={() => setSearchCodigo(!searchCodigo)}>
                            {
                                (searchCodigo) ? (<>
                                    <img src={Images.ARROWDOWN} width={'25'} />
                                </>) : (<>
                                    <img src={Images.ARROWUP} width={'25'} /></>)
                            }
                        </button>
                    </div>
                    {
                        (searchCodigo) ? (<>
                            {/* <div className='spaceVer5' /> */}
                            <TextInputDinamic
                                Name={'CodigoPaciente'}
                                //LabelInput={'Buscar por Código Paciente'}
                                Placeholder={'Escribe el Código'}
                                OnChange={(e) => { SearchCodigoPac(e) }} />

                        </>) : (<></>)
                    }
                </div>
                <div className='spaceVer5' />
                <hr className='lineFilter' />
                <div className='spaceVer5' />
                <div>
                    <div className='titleFilter'>
                        <h3 className='titleStyleH3'>CI</h3>
                        <button className='buttonPrint' onClick={() => setSearchCI(!searchCI)}>
                            {
                                (searchCI) ? (<>
                                    <img src={Images.ARROWDOWN} width={'25'} />
                                </>) : (<>
                                    <img src={Images.ARROWUP} width={'25'} /></>)
                            }
                        </button>
                    </div>
                    {
                        (searchCI) ? (<>
                            {/* <div className='spaceVer5' /> */}
                            <TextInputDinamic Name={'CI'}
                                //LabelInput={'Buscar por CI'} 
                                Placeholder={'Escribe el CI'}
                                OnChange={(e) => { SearchCI(e) }} />

                        </>) : (<></>)
                    }
                </div>
                <div className='spaceVer5' />
                <hr className='lineFilter' />
                <div className='spaceVer5' />
                <div>
                    <div className='titleFilter'>
                        <h3 className='titleStyleH3'>NOMBRE</h3>
                        <button className='buttonPrint' onClick={() => setSearchNombre(!searchNombre)}>
                            {
                                (searchNombre) ? (<>
                                    <img src={Images.ARROWDOWN} width={'25'} />
                                </>) : (<>
                                    <img src={Images.ARROWUP} width={'25'} /></>)
                            }
                        </button>
                    </div>
                    {
                        (searchNombre) ? (<>
                            {/* <div className='spaceVer5' /> */}
                            <TextInputDinamic
                                Name={'Nombre'}
                                //LabelInput={'Buscar por Nombre'}
                                Placeholder={'Escribe el Nombre'}
                                OnChange={(e) => { SearchNombre(e) }} />

                        </>) : (<></>)
                    }
                </div>
                <div className='spaceVer5' />
                <hr className='lineFilter' />
                <div className='spaceVer5' />
                <div>
                    <div className='titleFilter'>
                        <h3 className='titleStyleH3'>ESTADO</h3>
                        <button className='buttonPrint' onClick={() => setSearchState(!searchState)}>
                            {
                                (searchState) ? (<>
                                    <img src={Images.ARROWDOWN} width={'25'} />
                                </>) : (<>
                                    <img src={Images.ARROWUP} width={'25'} /></>)
                            }
                        </button>
                    </div>
                    {
                        (searchState) ? (<>
                            {/* <div className='spaceVer5' /> */}
                            <SelectDinamic
                                Name={'Estado'}
                                //LabelInput={'Estado'}
                                SelectOption={Estado}
                                Placeholder={'Selecciona'}
                                OnChange={(e) => { SearchEstado(e) }} />

                        </>) : (<></>)
                    }
                </div>
                <div className='spaceVer5' />
                <hr className='lineFilter' />
            </div>
        </>
    )
}
