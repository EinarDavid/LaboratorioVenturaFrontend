import React, { useState } from 'react';
import Images from '../../config/Images';

import { TextInputDinamic } from '../Input/TextInputDinamic';

export const SectionFilterPac = ({ handleChangeSearch }) => {

    const [searchOne, setSearchOne] = useState(true);
    const [searchTwo, setSearchTwo] = useState(true);
    const [searchThree, setSearchThree] = useState(true);
    const [searchFour, setSearchFour] = useState(false);
    const [searchFive, setSearchFive] = useState(false);

    return (
        <>
            <div className='SeccionFilter'>
                <hr className='lineFilter' />
                <div className='spaceVer5' />
                <div>
                    <div className='titleFilter'>
                        <h3 className='titleStyleH3'>CÓDIGO</h3>
                        <button className='buttonPrint' onClick={() => setSearchOne(!searchOne)}>
                            {
                                (searchOne) ? (<>
                                    <img src={Images.ARROWDOWN} width={'25'} alt={'ArrowDown'} />
                                </>) : (<>
                                    <img src={Images.ARROWUP} width={'25'} alt={'ArrowUp'} /></>)
                            }
                        </button>
                    </div>
                    {
                        (searchOne) ? (<>
                            {/* <div className='spaceVer5' /> */}
                            <TextInputDinamic
                                Name={'CodigoPaciente'}
                                //LabelInput={'Buscar por Código Paciente'}
                                Placeholder={'Escribe el Código'}
                                OnChange={(e) => { handleChangeSearch(e) }} />

                        </>) : (<></>)
                    }
                </div>
                <div className='spaceVer5' />
                <hr className='lineFilter' />
                <div className='spaceVer5' />
                <div>
                    <div className='titleFilter'>
                        <h3 className='titleStyleH3'>CI</h3>
                        <button className='buttonPrint' onClick={() => setSearchTwo(!searchTwo)}>
                            {
                                (searchTwo) ? (<>
                                    <img src={Images.ARROWDOWN} width={'25'} alt={'ArrowDown'}/>
                                </>) : (<>
                                    <img src={Images.ARROWUP} width={'25'} alt={'ArrowUp'}/></>)
                            }
                        </button>
                    </div>
                    {
                        (searchTwo) ? (<>
                            {/* <div className='spaceVer5' /> */}
                            <TextInputDinamic Name={'CI'}
                                //LabelInput={'Buscar por CI'} 
                                Placeholder={'Escribe el CI'}
                                OnChange={(e) => { handleChangeSearch(e) }} />
                        </>) : (<></>)
                    }
                </div>
                <div className='spaceVer5' />
                <hr className='lineFilter' />
                <div className='spaceVer5' />
                <div>
                    <div className='titleFilter'>
                        <h3 className='titleStyleH3'>NOMBRE</h3>
                        <button className='buttonPrint' onClick={() => setSearchThree(!searchThree)}>
                            {
                                (searchThree) ? (<>
                                    <img src={Images.ARROWDOWN} width={'25'} alt={'ArrowDown'} />
                                </>) : (<>
                                    <img src={Images.ARROWUP} width={'25'} alt={'ArrowUp'}/></>)
                            }
                        </button>
                    </div>
                    {
                        (searchThree) ? (<>
                            {/* <div className='spaceVer5' /> */}
                            <TextInputDinamic
                                Name={'Nombre'}
                                //LabelInput={'Buscar por Nombre'}
                                Placeholder={'Escribe el Nombre'}
                                OnChange={(e) => { handleChangeSearch(e) }} />

                        </>) : (<></>)
                    }
                </div>
                <div className='spaceVer5' />
                <hr className='lineFilter' />
                <div className='spaceVer5' />
                <div>
                    <div className='titleFilter'>
                        <h3 className='titleStyleH3'>PRIMER APELLIDO</h3>
                        <button className='buttonPrint' onClick={() => setSearchFour(!searchFour)}>
                            {
                                (searchFour) ? (<>
                                    <img src={Images.ARROWDOWN} width={'25'} alt={'ArrowDown'} />
                                </>) : (<>
                                    <img src={Images.ARROWUP} width={'25'} alt={'ArrowUp'}/></>)
                            }
                        </button>
                    </div>
                    {
                        (searchFour) ? (<>
                            <TextInputDinamic
                                Name={'PrimerApellido'}
                                //LabelInput={'Buscar por Nombre'}
                                Placeholder={'Escribe el Primer Apellido'}
                                OnChange={(e) => { handleChangeSearch(e) }} />


                        </>) : (<></>)
                    }
                </div>
                <div className='spaceVer5' />
                <hr className='lineFilter' />

                <div className='spaceVer5' />
                <div>
                    <div className='titleFilter'>
                        <h3 className='titleStyleH3'>SEGUNDO APELLIDO</h3>
                        <button className='buttonPrint' onClick={() => setSearchFive(!searchFive)}>
                            {
                                (searchFive) ? (<>
                                    <img src={Images.ARROWDOWN} width={'25'} alt={'ArrowDown'}/>
                                </>) : (<>
                                    <img src={Images.ARROWUP} width={'25'} alt={'ArrowUp'} /></>)
                            }
                        </button>
                    </div>
                    {
                        (searchFive) ? (<>
                            <TextInputDinamic
                                Name={'SegundoApellido'}
                                //LabelInput={'Buscar por Nombre'}
                                Placeholder={'Escribe el Segundo Apellido'}
                                OnChange={(e) => { handleChangeSearch(e) }} />


                        </>) : (<></>)
                    }
                </div>
                <div className='spaceVer5' />
                <hr className='lineFilter' />
            </div>
        </>
    )
}